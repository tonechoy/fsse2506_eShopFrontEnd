import {useState} from "react";

export default function CategorySelector() {
  const [category, setCategory] = useState("Cellphone");

  const addStyle = (event) => {
    event.target.style.backgroundColor = "black";
    event.target.style.color = "white";
  }

  const handleCategory = (event) => {
    // console.log(event.target.innerText);
    setCategory(event.target.innerText);
    console.log("category: ", category);
    addStyle(event);
  }

  return (
    <div className="border-b w-full bg-white">
      <div className="flex w-6xl mx-auto justify-center align-middle text-center self-center" onClick={handleCategory}>

        <span className="p-3 text-white bg-black px-5">Cellphone</span>
        <span className="p-3 px-5">Tablet</span>
        <span className="p-3 px-5">Laptop</span>
        <span className="p-3 px-5">Cellphone</span>
      </div>

    </div>
  )
}