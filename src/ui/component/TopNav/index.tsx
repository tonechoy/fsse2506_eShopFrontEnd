// import CategoryTab from "./component/CategoryTab.tsx";
import TopStatus from "./component/TopStatus.tsx";
// import SearchBar from "./component/SearchBar.tsx";
// import {Link} from "@tanstack/react-router";
import "./../../../App.css"

// interface Props {
//   handleSearch: (keywordInput: string) => void;
// }

export default function TopNav() {
  return (
    <>
      <TopStatus/>
      {/*<div className="flex h-22 justify-center gap-13 px-6 items-center">*/}
      {/*  <Link to={("/")}*/}
      {/*    className="p-0 m-0"*/}
      {/*  >*/}
      {/*    <img src="/public/ComfortCraft-banner-light.png" className="h-22"/>*/}
      {/*  </Link>*/}
      {/*  <SearchBar handleSearchBar={handleSearch}/>*/}
      {/*  <div className="bg-gray-200 w-50 h-10"></div>*/}
      {/*</div>*/}
    </>
  )
}