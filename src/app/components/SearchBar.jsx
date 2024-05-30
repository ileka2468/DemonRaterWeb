"use client";
import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import SearchResults from "./SearchResults";
import { createClient } from "@supabase/supabase-js";
import { Divider } from "@nextui-org/divider";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const SearchBar = () => {
  const [hidden, setHidden] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isUserSelecting, setIsUserSelecting] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null);

  console.log(selectedResult);

  useEffect(() => {
    if (isUserSelecting) {
      setIsUserSelecting(false);
      return;
    } else {
      setSelectedResult(null);
    }

    let handler = null;
    if (searchText.length > 0) {
      handler = setTimeout(async () => {
        console.log("change...");
        const { data, error } = await supabase
          .from("Professors")
          .select("*")
          .or(
            `professor_name.ilike.%${searchText}%,rmp_profile_name.ilike.%${searchText}%`
          );

        if (error) {
          console.error("Error fetching professors:", error);
        }
        setSearchResults(data);
        setHidden(false);
      }, 300);
    } else {
      setSearchResults([]);
      setHidden(true);
    }

    return () => {
      clearTimeout(handler);
    };
  }, [searchText]);

  return (
    <>
      <div className="mt-14 py-3 w-[85%] rounded-full flex justify-evenly items-center shadow">
        <select
          className="outline-none text-hero_grey"
          name="filter"
          id="filter"
          defaultValue=""
        >
          <option value="" disabled hidden>
            Filters
          </option>
          <option value="name">Professor Name</option>
          <option value="title">Course Title</option>
          <option value="number">Course Number</option>
        </select>
        <Divider orientation={"vertical"} />
        <input
          className="outline-none placeholder-hero_grey w-[50%]"
          placeholder="Search for professors"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <Button
          onClick={() => console.log(selectedResult?.professor_name)}
          className="bg-theme_blue text-white"
          radius="full"
        >
          Search
        </Button>
      </div>
      <SearchResults
        hidden={hidden}
        setHidden={setHidden}
        searchResults={searchResults}
        setSearchText={setSearchText}
        setIsUserSelecting={setIsUserSelecting}
        setSelectedResult={setSelectedResult}
        searchText={searchText}
      />
    </>
  );
};

export default SearchBar;
