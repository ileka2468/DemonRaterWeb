import React from "react";
import SearchIcon from "./SearchIcon";
import { ScrollShadow } from "@nextui-org/react";

const SearchResults = ({
  hidden,
  setHidden,
  searchResults,
  setSearchText,
  setIsUserSelecting,
  setSelectedResult,
  searchText,
}) => {
  const closestResults = [...searchResults].sort((a, b) => {
    const nameA = a.professor_name.toLowerCase();
    const nameB = b.professor_name.toLowerCase();
    const searchTextLower = searchText.toLowerCase();

    const indexA = nameA.indexOf(searchTextLower);
    const indexB = nameB.indexOf(searchTextLower);

    // If both names contain the search text, prioritize the one that starts with it
    if (indexA === 0 && indexB !== 0) {
      return -1;
    }
    if (indexA !== 0 && indexB === 0) {
      return 1;
    }

    // If neither or both start with the search text, compare their indices
    if (indexA !== indexB) {
      return indexA - indexB;
    }

    // If indices are the same, fall back to alphabetical order
    return nameA.localeCompare(nameB);
  });

  const resultsListItems = closestResults.map((row) => (
    <li
      key={row.professor_name}
      className="hover:bg-gray-100 text-start p-3 flex cursor-default"
      onClick={() => {
        setSearchText(row.professor_name);
        setHidden((hidden) => !hidden);
        setIsUserSelecting(() => true);
        setSelectedResult(row);
      }}
    >
      <SearchIcon />
      <p className="ml-2">{row.professor_name}</p>
    </li>
  ));
  return (
    <ScrollShadow
      size={0}
      className="w-[75%] h-[250px] mt-1 rounded-lg shadow-lg bg-body border-solid border-1 scrollbar-thin overflow-y-scroll"
      hidden={hidden}
    >
      {resultsListItems.length > 0 ? (
        <ul>{resultsListItems}</ul>
      ) : (
        <ul>
          <li>No results...</li>
        </ul>
      )}
    </ScrollShadow>
  );
};

export default SearchResults;
