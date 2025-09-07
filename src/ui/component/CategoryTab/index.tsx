interface Props{
  category: string;
  handleCategory: (category:string) => void
}

export default function CategoryTab({category, handleCategory}: Props) {

  return (
    <div
      id="category-tab"
      role="tablist"
      className="tabs tabs-border mx-auto gap-2 rounded-none text-gray-700 w-md xl:w-6xl lg:w-4xl md:w-2xl sm:w-xl"
    >
      {/*<hr/>*/}

      {
        ["All", "Chair", "Desk", "Keyboard", "Mouse"].map((value)=>{
         return value.toLowerCase() === category.toLowerCase()
          ? <a role="tab" className="tab-active text-green-800  rounded-none border-b-2 border-b-green-700 px-1 py-1 mr-2 font-bold hover:cursor-pointer" key={value}>{value}</a>
            : <a role="tab" className="rounded-none px-1 py-1 mr-2 hover:cursor-pointer hover:border-b hover:border-gray-400" key={value} onClick={()=>{handleCategory(value.toLowerCase())}}>{value}</a>
        })
      }

    </div>
  )
}