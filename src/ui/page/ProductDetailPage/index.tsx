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

  const [isAddingtoCart, setisAddingtoCart] = useState(false);

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
        setisAddingtoCart(true);
        await putCartItem(productDto.pid, quantity);
        setisAddingtoCart(false);
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
    document.title = `${response.name} - Comfort Craft`;
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
      // if (productDto) {
      //   console.log(productDto.name)
      //   document.title = productDto.name;
      // }
    } catch (e) {
      navigate({to: ("/error")});
      console.error(e);
      throw e;
    }
  }, []);


  return (
    <div className="bg-white pb-1">
      <TopNav/>
      {
        isLoading && <LoadingDetail/>
      }
      {productDto && !isLoading &&
          <div className="flex bg-white @xs:w-md mx-auto sm:px-10 px-5 w-full h-full my-10 justify-center align-middle" key={productDto.pid}>

              <div className="lg:flex @xs:flex-col w-screen mx-auto gap-3 @xs:w-lg md:w-3xl lg:w-4xl xl:w-6xl">
                  <div className="uppercase italic text-gray-500 font-light lg:hidden">{productDto.category}</div>
                  <div className="text-xl mb-6 text-gray-700 lg:hidden">{productDto.name}</div>
                  <div className="left-container flex-6">
                    {
                      productDto.imageUrl.length === 0
                        ? <img src="/no-image.png" className="h-120 mx-auto"/>
                        : <ProductImageDisplay imageUrl={productDto.imageUrl}/>
                    }
                  </div>
                  <div className="right-container flex-4 flex-col p-3">
                      <p className="text-gray-600 mb-3 uppercase italic font-light hidden lg:block">{productDto.category}</p>
                      <p className="text-2xl mb-8 text-gray-700 hidden lg:block">{productDto.name}</p>
                      <p className="text-xl mb-10 text-gray-700 lg:mb-20">${productDto.price.toLocaleString()}</p>
                      <div className="flex w-full mx-auto lg:h-13 lg:justify-evenly align-middle mb-5 lg:mb-15 gap-3">
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
                          className="bg-gray-200 lg:w-full w-[80%] h-15 text-center flex px-7 gap-7 text-sm py-2 mb-15 overflow-hidden">
                          <img
                              src="/van-dark.png"
                          />
                          <p className="self-center text-gray-700">Free standard delivery</p>

                      </div>
                      <div className="text-sm white">
                          <p className="mb-3 font-bold text-gray-700">Product Detail</p>
                          <p className="leading-relaxed whitespace-pre-line text-gray-700">{productDto.description}</p>
                      </div>
                  </div>
              </div>
          </div>
      }

    </div>
  )
}