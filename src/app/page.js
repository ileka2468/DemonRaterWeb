import AuthModal from "./components/AuthModal";
import SearchBar from "./components/SearchBar";

export const metadata = {
  title: "DemonRater | Home"
};

export default function Home() {
  return (
    <main className="min-h-screen w-full flex justify-center bg-transparent">
      <div className="mt-[12%] max-w-4xl text-center flex flex-col items-center">
        <h1 className="font-plus_jakarta_sans font-extrabold text-6xl leading-[141%]">Find The Best CDM <br /> <span className="text-theme_blue">Professors</span> For Your Courses</h1>

        <p className="text-gray-500 mt-8">Discover Top-Rated CDM Professors, Find Ideal Instructor Matches For Your Courses</p>

        <SearchBar />
      </div>

    </main>
  );
}
