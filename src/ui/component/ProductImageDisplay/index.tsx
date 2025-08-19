export default function ProductImageDisplay() {
  // const src1 = "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp";
  // const src2 = "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp";
  // const src3 = "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp";
  // const src4 = "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp";

  const imageSrcString = "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp,https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp,https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp,https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp,https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"

  const imageSrc:string[] = imageSrcString.split(",");
  const image1 = imageSrcString.split(",")[0];
  console.log("image1: ", image1);

  return (
    <>
      {/*<div className="carousel w-full">*/}
      {/*  <div id="item1" className="carousel-item w-full">*/}
      {/*    <img*/}
      {/*      src={src1}*/}
      {/*      className="w-full h-120"/>*/}
      {/*  </div>*/}
      {/*  <div id="item2" className="carousel-item w-full">*/}
      {/*    <img*/}
      {/*      src={src2}*/}
      {/*      className="w-full"/>*/}
      {/*  </div>*/}
      {/*  <div id="item3" className="carousel-item w-full">*/}
      {/*    <img*/}
      {/*      src={src3}*/}
      {/*      className="w-full"/>*/}
      {/*  </div>*/}
      {/*  <div id="item4" className="carousel-item w-full">*/}
      {/*    <img*/}
      {/*      src={src4}*/}
      {/*      className="w-full"/>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="flex w-100 h-20 mx-auto gap-2 p-2">*/}
      {/*  <a href="#item1"><img src={src1} className="h-20 object-cover"/></a>*/}
      {/*  <a href="#item2"><img src={src2} className="h-20 object-cover"/></a>*/}
      {/*  <a href="#item3"><img src={src3} className="h-20 object-cover"/></a>*/}
      {/*  <a href="#item4"><img src={src4} className="h-20 object-cover"/></a>*/}
      {/*</div>*/}

      <div className="carousel w-full">
      {
         imageSrc.map((image, index) => (
           <div id={("item"+(index+1)).toString()} className="carousel-item w-full" key={index}>
             <img
               src={image}
               className="w-full h-120 object-cover"/>
           </div>
         ))
      }
      </div>
      <div className="flex justify-start h-20 gap-2 mt-5">
        {
          imageSrc.map((image, index) => (
            <a href={"#item"+(index+1).toString()} key={index}>
              <img src={image} className="h-20 w-20 object-cover rounded"/>
            </a>
          ))
        }
      </div>
    </>
  )
}