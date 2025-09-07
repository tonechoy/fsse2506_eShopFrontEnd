import {type FormEvent, useState} from "react";
import {useNavigate} from "@tanstack/react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
// import {getProductByKeyword} from "../../../../api/product/productApi.ts";

interface Props {
  handleSearchBar: (keywordInput: string) => void;
}

export default function SearchBar({handleSearchBar}: Props) {

  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearchBtn = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate({to:"/"})
    handleSearchBar(keyword);
  }

  return (
    <form id="search-bar" className="flex justify-center p-3" onSubmit={handleSearchBtn}>
      <input
        type="text"
        value={keyword}
        onChange={(event) => {setKeyword(event.target.value)}}
        // onChange={(event) => handleSearchBar(event.target.value)}
        placeholder="Search..."
        className="border border-gray-400 rounded-none w-150 px-3 h-12 italic text-gray-500 focus:outline-none"
      />
      <button type="submit" className="btn btn-neutral rounded-none shadow-none w-12 h-12 border shrink-0">
        {/*<img*/}
        {/*  src="/search-light.png"*/}
        {/*  className="mx-auto w-6"*/}
        {/*/>*/}
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
      </button>
    </form>
  )
}