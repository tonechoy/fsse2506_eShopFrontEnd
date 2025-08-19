import type {GetAllProductDto} from "../../../../data/product/product.type.ts";
import {Link} from "@tanstack/react-router";
import LoadingItem from "../../../component/LoadingItem";

interface Props {
  itemDto: GetAllProductDto;
  isLoading: boolean
}

export default function ProductItem({itemDto, isLoading}: Props) {
  // console.log(isLoading);
  //
  // if (isLoading) {
  //   console.log("isLoading");
  //   return <LoadingItem/>
  // }

  return (

    itemDto && !isLoading
      ? (
        <div className="bg-white flex rounded-lg p-6 hover:shadow-lg justify-center sm:flex-col gap-4">
          <div className="relative flex flex-1 w-full justify-center">
            <Link
              to="/product/$productId" params={{productId: itemDto.pid.toString()}}
              className="m-0 p-0"
            >
              <img
                src={itemDto.imageUrl}
                alt={itemDto.name}
                className="flex flex-2 h-60 object-contain hover:scale-107 duration-450 transition-transform relative mx-auto"
              />
            </Link>
            <span className="w-10 h-10 rounded-4xl left-2 top-4 absolute">
              <img
                src="/public/favourite-dark.png"
                width={30}
                className="hover:scale-110"
              />
            </span>
            <span className="w-12 h-12 rounded-4xl bg-green-800 right-5 invisible sm:visible top-52 absolute  hover:bg-green-600">
              <img
                src="/public/add-cart-light.png"
                className="mx-auto p-2.5"
              />
            </span>
          </div>
          <div className="flex-col flex-1 mt-4 h-30 sm:flex-1">
            <div className="text-gray-400 text-sm font-extralight">{itemDto.category.toUpperCase()}</div>
            <Link to="/product/$productId" params={{productId: itemDto.pid.toString()}} className="m-0 p-0">
              <div className="h-13 line-clamp-2 hover:underline text-lg sm:text-base">{itemDto.name}</div>
            </Link>
            <div className="mt-2 italic font-bold">${itemDto.price.toLocaleString()}</div>
            <div className="flex justify-end mt-3 mr-5">
              <button className="bg-green-800 text-white font-bold p-2 px-5 rounded-md wrap-normal text-sm sm:hidden hover:bg-green-600">Add
                Cart
              </button>
              {/*<button className="bg-red-800 text-white wrap-normal p-1 px-3 rounded-2xl text-sm sm:hidden hover:bg-red-600">+*/}
              {/*  Favorite*/}
              {/*</button>*/}
            </div>
          </div>
        </div>

      ) :
      <LoadingItem/>


  )
}