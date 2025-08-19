import CategoryTab from "./component/CategoryTab.tsx";
import TopStatus from "./component/TopStatus.tsx";
import SearchBar from "./component/SearchBar.tsx";

interface Props {
  isLogin: boolean;
}

export default function TopNav({isLogin}: Props) {
  return (
    <>
      <TopStatus isLogin={isLogin}/>
      <SearchBar/>
     {/*<CategoryTab/>*/}
    </>
  )
}