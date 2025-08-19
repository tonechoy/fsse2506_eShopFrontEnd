import mockData from "../../response.json"
import "./../../../App.css"
import {useLocation, useParams} from "@tanstack/react-router";
import TopNav from "../../component/TopNav";
import {useState} from "react";
// import type {GetAllProductDto} from "../../../data/product/getAllProductDto.type.ts";
// import {useEffect, useState} from "react";
// import type {GetAllProductDto} from "../../../data/product/getAllProductDto.type.ts";

interface Props {
  isLogin: boolean
}

export default function ProductDetailPage({isLogin}: Props) {
  const {productId} = useParams({from: "/products/$productId"});
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  // const [product, setProduct] = useState();

  const handleQuantityChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setQuantity(event.target.value);
  }

  const handleAddCart = (event) => {
    event.preventDefault();
    console.log("Add bag:", quantity);
    event.target.innerText = "Added"
    event.target.style.backgroundColor = "darkGreen"
    setTimeout(() => {
    event.target.innerText = "Add to cart";
    event.target.style.backgroundColor = "black";
    }, 4000);
  }

  const productDetail = mockData.filter((item) => {
    if (parseInt(productId) === item.pid) {
      console.log("foundID:", productId);
      // setProduct(item);
      // console.log(item);
      return item;
    }
    // console.log(productDetail);
  })
  //
  // useEffect(() => {
  //
  // }, []);


  return (
    <>
      <TopNav isLogin={isLogin}/>
      {/*<h1>Product ID: {productId}</h1>*/}
      <h2>Pathname: {location.pathname}</h2>
      {productDetail.map((item) => (
        <div className="flex-row bg-white w-full h-auto" key={item.pid}>

          <div className="flex w-6xl mx-auto gap-3">
            <div className="left-container flex-6 bg-orange-50">
              <img
                src={item.imageUrl}
                className="mx-auto object-contain h-150"

              />
            </div>
            <div className="right-container flex-4 bg-blue-50 flex-col p-3">
              <p className="text-gray-500 mb-3 capitalize">{item.category}</p>
              <p className="text-2xl mb-8">{item.name}</p>
              <p className="text-xl mb-20">${item.price}</p>
              <div className="flex w-full h-13 justify-evenly align-middle mb-15 gap-3">
                <div className="dropdown" onClick={handleQuantityChange}>
                  {/*<legend>Quantity</legend>*/}
                  <select
                    className="select w-30 self-center border h-13 border-info-content rounded-none"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>

                  </select>
                </div>
                <button className="bg-black text-white btn-wide text-lg font-semibold hover:bg-gray-700" onClick={handleAddCart}>Add to cart</button>
                {/*<span className="border rounded-4xl p-3 self-center">*/}
                {/*  <img*/}
                {/*    src="../../../../public/love-dark.png"*/}
                {/*    className="object-contain hover:scale-110"*/}
                {/*    width="28"*/}

                {/*  />*/}
                {/*</span>*/}
                {/*<button className="btn-soft btn btn-info">testing</button>*/}
              </div>
              <div className="bg-gray-200 h-15 align-middle text-center flex align-middle px-7 gap-7 text-sm py-2 mb-15">
                <img
                  src="../../../../public/van-dark.png"
                />
                <p className="self-center">Free standard delivery over $500</p>
              </div>
              <div className="text-sm">
                <p className="mb-3 font-bold">Product Detail</p>
                <p className="leading-relaxed">雙卡, 指紋解鎖, 面部解鎖, SD卡槽, NFC, 快速充電, 3.5mm插頭, 雙卡, 指紋解鎖, 面部解鎖, SD卡槽, NFC, 快速充電, 3.5mm插頭 雙卡, 指紋解鎖, 面部解鎖, SD卡槽, NFC, 快速充電, 3.5mm插頭</p>
              </div>
            </div>

          </div>
        </div>
      ))}

    </>
  )
}