import {useState} from "react";
import * as React from "react";

export default function CategoryTab() {
  const [category, setCategory] = useState("Cellphone");

  const addStyle = (event:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.currentTarget.style.backgroundColor = "black";
    event.currentTarget.style.color = "white";
  }

  const handleCategory = (event:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // console.log(event.target.innerText);
    setCategory(event.currentTarget.innerText);
    console.log("category: ", category);
    addStyle(event);
  }

  return (
    <div className="border-b-2 w-full bg-white">
      <div className="flex w-6xl mx-auto justify-center align-middle text-center self-center" onClick={handleCategory}>

        <button className="p-3 px-5">Cellphone</button>
        <button className="p-3 px-5">Tablet</button>
        <button className="p-3 px-5">Laptop</button>
        <button className="p-3 px-5">Cellphone</button>
      </div>

    </div>
  )
}