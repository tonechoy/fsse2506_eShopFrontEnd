import "./../../../App.css"
import {useNavigate, useParams} from "@tanstack/react-router";
import TopNav from "../../component/TopNav";
import {useEffect, useState} from "react";
import type {ProductDto} from "../../../data/product/product.type.ts";
import {getProductByPid} from "../../../api/product/productApi.ts";
import LoadingDetail from "../../component/LoadingDetail";
import ProductImageDisplay from "../../component/ProductImageDisplay";

interface Props {
  isLogin: boolean
}

export default function ProductDetailPage({isLogin}: Props) {
  const {productId} = useParams({from: "/product/$productId"});
  // const location = useLocation();
  const [product, setProduct] = useState<ProductDto | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate({from: ("/")});

  const handleQuantityChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setQuantity(parseInt(event.target.value));
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

  const fetchProductByPid = async () => {
    const response = await getProductByPid(productId.toString());
    setProduct(response);
    setIsLoading(false);
    return response;
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
      <TopNav isLogin={isLogin}/>
      {
        isLoading && <LoadingDetail/>
      }
      {product && !isLoading &&
          <div className="bg-orange-50 w-full h-auto" key={product.pid}>

              <div className="flex w-screen mx-auto gap-3 md:w-3xl xl:w-6xl">
                  <div className="left-container flex-6">
                      {/*<img*/}
                      {/*    src={product.imageUrl}*/}
                      {/*    className="mx-auto object-contain h-150"*/}
                      {/*/>*/}
                      <ProductImageDisplay/>
                  </div>
                  <div className="right-container flex-4 bg-blue-50 flex-col p-3">
                      <p className="text-gray-500 mb-3 capitalize">{product.category}</p>
                      <p className="text-2xl mb-8">{product.name}</p>
                      <p className="text-xl mb-20">${product.price.toLocaleString()}</p>
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
                                  <option>6</option>
                                  <option>7</option>
                                  <option>8</option>
                                  <option>9</option>
                                  <option>10</option>

                              </select>
                          </div>
                        {
                          quantity > product.stock
                            ? (
                              <button className="btn-disabled bg-gray-300 text-gray-800 btn-wide text-lg font-semibold">
                                Sold Out
                              </button>
                            ) : (
                              <button
                                className="bg-black text-white btn-wide text-xs sm:text-md md:text-lg font-semibold hover:bg-gray-700"
                                onClick={handleAddCart}
                              >
                                <p>Add to cart</p>
                                {/*<p className="visible sm:invisible"><img src="/public/add-cart-light.png"/></p>*/}
                              </button>
                            )
                        }

                        {/*<span className="border rounded-4xl p-3 self-center">*/}
                        {/*  <img*/}
                        {/*    src="../../../../public/love-dark.png"*/}
                        {/*    className="object-contain hover:scale-110"*/}
                        {/*    width="28"*/}

                        {/*  />*/}
                        {/*</span>*/}
                        {/*<button className="btn-soft btn btn-info">testing</button>*/}
                      </div>
                      <div
                          className="bg-gray-200 h-15 text-center flex px-7 gap-7 text-sm py-2 mb-15 overflow-hidden">
                          <img
                              src="/public/van-dark.png"
                          />
                          <p className="self-center">Free standard delivery over $500</p>

                      </div>
                      <div className="text-sm">
                          <p className="mb-3 font-bold">Product Detail</p>
                          <p className="leading-relaxed">{product.description}</p>
                      </div>
                  </div>

              </div>
          </div>
      }

    </>
  )
}