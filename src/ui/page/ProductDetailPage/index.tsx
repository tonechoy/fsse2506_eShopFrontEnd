import "./../../../App.css"
import {useNavigate, useParams} from "@tanstack/react-router";
import TopNav from "../../component/TopNav";
import {type ChangeEvent, useContext, useEffect, useState} from "react";
import type {ProductDto} from "../../../data/product/product.type.ts";
import {getProductByPid} from "../../../api/product/productApi.ts";
import LoadingDetail from "../../component/LoadingDetail";
import ProductImageDisplay from "../../component/ProductImageDisplay";
import QuantitySelector from "../../component/QuantitySelector";
import {LoginUserContext} from "../../../context/LoginUserContext.tsx";
import {putCartItem} from "../../../api/cartItem/cartItemApi.ts";
import {faCircleCheck} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// interface Props {
// }

export default function ProductDetailPage() {
  const {productId} = useParams({from: "/product/$productId"});
  // const location = useLocation();
  const [productDto, setProductDto] = useState<ProductDto | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const loginUser = useContext(LoginUserContext);

  const navigate = useNavigate({from: ("/product/$productId")});

  const [isAddingtoCart, setIsAddingtoCart] = useState(false);

  const handleQuantityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    console.log(event.target.value);
    setQuantity(parseInt(event.target.value));
  }

  const handlePutCartItem = async () => {
    if (!loginUser) {
      navigate({to: "/login"})
    } else try {
      if (productDto) {
        setIsAddingtoCart(true);
        await putCartItem(productDto.pid, quantity);
        setIsAddingtoCart(false);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000)
        // handleAddCart();
      }
    } catch {
      navigate({to: "/error"})
    }
  }

  const fetchProductByPid = async () => {
    const response = await getProductByPid(productId.toString());
    setProductDto(response);
    setIsLoading(false);
    return response;
  }

  const renderAddToCartBtn = () => {
    if (productDto && productDto.stock > 0) {
      if (isSuccess) {
        return (
          <button
            className="bg-green-800 text-white btn-wide text-xs sm:text-md md:text-lg font-semibold btn-disabled"
          >
            <div className="flex justify-center items-center gap-2">
              <p>Added</p>
              <FontAwesomeIcon icon={faCircleCheck} style={{color: "#ffffff",}}/>
            </div>
            {/*<p className="visible sm:invisible"><img src="/public/add-cart-light.png"/></p>*/}
          </button>
        )
      }

      if (isAddingtoCart) {
        return (
          <button
            className="bg-gray-500 text-white btn-wide text-xs sm:text-md md:text-lg font-semibold btn-disabled"
          >
            <p>Processing...</p>
            {/*<p className="visible sm:invisible"><img src="/public/add-cart-light.png"/></p>*/}
          </button>
        )
      }

      if (quantity > productDto.stock) {
        return (
          <button
            className="btn-disabled bg-gray-300 text-gray-800 btn-wide text-lg font-semibold"
          >
            <p>Out of stock</p>
            {/*<p className="visible sm:invisible"><img src="/public/add-cart-light.png"/></p>*/}
          </button>
        )
      }

      return (
        <button
          className="bg-black text-white btn-wide text-xs sm:text-md md:text-lg font-semibold hover:bg-gray-700"
          onClick={handlePutCartItem}
        >
          <p>Add to cart</p>
          {/*<p className="visible sm:invisible"><img src="/public/add-cart-light.png"/></p>*/}
        </button>
      )

    } else {
      return (
        <button className="btn-disabled bg-gray-300 text-gray-800 btn-wide text-lg font-semibold">
          Sold Out
        </button>
      )
    }
  }

  useEffect(() => {
    try {
      fetchProductByPid();
    } catch (e) {
      navigate({to: ("/error")});
      console.error(e);
      throw e;
    }
  }, []);


  return (
    <>
      <TopNav/>
      {
        isLoading && <LoadingDetail/>
      }
      {productDto && !isLoading &&
          <div className="bg-white w-full h-auto my-10" key={productDto.pid}>

              <div className="flex w-screen mx-auto gap-3 md:w-3xl xl:w-6xl">
                  <div className="left-container flex-6">
                      <ProductImageDisplay imageUrl={productDto.imageUrl}/>
                  </div>
                  <div className="right-container flex-4 bg-blue-50 flex-col p-3">
                      <p className="text-gray-500 mb-3 capitalize">{productDto.category}</p>
                      <p className="text-2xl mb-8">{productDto.name}</p>
                      <p className="text-xl mb-20">${productDto.price.toLocaleString()}</p>
                      <div className="flex w-full h-13 justify-evenly align-middle mb-15 gap-3">
                          <QuantitySelector handleQuantityChange={handleQuantityChange}/>
                        {
                          renderAddToCartBtn()
                        }

                        {/*<span className="border rounded-4xl p-3 self-center">*/}
                        {/*  <img*/}
                        {/*    src="/love-dark.png"*/}
                        {/*    className="object-contain hover:scale-110"*/}
                        {/*    width="28"*/}

                        {/*  />*/}
                        {/*</span>*/}
                      </div>
                      <div
                          className="bg-gray-200 h-15 text-center flex px-7 gap-7 text-sm py-2 mb-15 overflow-hidden">
                          <img
                              src="/van-dark.png"
                          />
                          <p className="self-center">Free standard delivery</p>

                      </div>
                      <div className="text-sm white">
                          <p className="mb-3 font-bold">Product Detail</p>
                          <p className="leading-relaxed">{productDto.description}</p>
                      </div>
                  </div>

              </div>
          </div>
      }

    </>
  )
}