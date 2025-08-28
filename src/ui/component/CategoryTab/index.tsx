interface Props{
  category: string;
  handleCategory: (category:string) => void
}

export default function CategoryTab({category, handleCategory}: Props) {

  return (
    <div
      role="tablist" className="tabs tabs-border w-6xl mx-auto gap-2"
    >
      <hr/>
      {/*{*/}
      {/*  category === "all"*/}
      {/*  ? <a role="tab" className="tab tab-active" onClick={(event) => {*/}
      {/*    handleCategory(event.currentTarget.innerText.toLowerCase())*/}
      {/*    }}>All</a>*/}
      {/*    :<a role="tab" className="tab">All</a>*/}
      {/*}*/}
      {/*{*/}
      {/*  category === "cellphone"*/}
      {/*    ? <a role="tab" className="tab tab-active">Cellphone</a>*/}
      {/*    :<a role="tab" className="tab">Cellphone</a>*/}
      {/*}*/}
      {/*{*/}
      {/*  category === "tablet"*/}
      {/*    ? <a role="tab" className="tab tab-active">Tablet</a>*/}
      {/*    :<a role="tab" className="tab">Tablet</a>*/}
      {/*}*/}
      {/*{*/}
      {/*  category === "laptop"*/}
      {/*    ? <a role="tab" className="tab tab-active">Laptop</a>*/}
      {/*    :<a role="tab" className="tab">Laptop</a>*/}
      {/*}*/}

      {
        ["All", "Cellphone", "Tablet", "Laptop", "Chair", "Desk", "Keyboard", "Mouse"].map((value)=>{
         return value.toLowerCase() === category.toLowerCase()
          ? <a role="tab" className="tab tab-active" key={value}>{value}</a>
            : <a role="tab" className="tab" key={value} onClick={()=>{handleCategory(value.toLowerCase())}}>{value}</a>
        })
      }

    </div>
  )
}