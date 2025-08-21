// import CategoryTab from "./component/CategoryTab.tsx";
import TopStatus from "./component/TopStatus.tsx";
import SearchBar from "./component/SearchBar.tsx";
import {Link} from "@tanstack/react-router";

interface Props {
  isLogin: boolean;
}

export default function TopNav({isLogin}: Props) {
  return (
    <>
      <TopStatus isLogin={isLogin}/>
      {/*<div className="flex h-22 justify-center gap-13 px-6 items-center">*/}
      {/*  <Link to={("/")}*/}
      {/*    className="p-0 m-0"*/}
      {/*  >*/}
      {/*    <img src="/public/ComfortCraft-banner-light.png" className="h-22"/>*/}
      {/*  </Link>*/}
      {/*  <SearchBar/>*/}
      {/*  <div className="bg-gray-200 w-50 h-10"></div>*/}
      {/*</div>*/}
      {/*<CategoryTab/>*/}
    </>
  )
}