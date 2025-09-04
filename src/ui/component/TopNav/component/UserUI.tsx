import {Link, useNavigate} from "@tanstack/react-router";
import {useContext, useEffect, useState} from "react";
import {LoginUserContext} from "../../../../context/LoginUserContext.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {signOut} from "../../../../authService/FirebaseAuthService.ts";
import toast, {Toaster} from "react-hot-toast";
import {getUserCart} from "../../../../api/cartItem/cartItemApi.ts";
import {UserCartContext} from "../../../../context/UserCartContext.tsx";

export default function UserUI() {
  const navigate = useNavigate({from: "/"})
  const loginUser = useContext(LoginUserContext);
  const userCart = useContext(UserCartContext);

  const [cartQuantity, setCartQuantity] = useState(0);

  const handleLogoutBtn = async () => {
    await signOut();
    // setCartQuantity("");
    notify();
  }

  const fetchUserCart = async () => {
    const responseData = await getUserCart();
    setCartQuantity((responseData.length));
  }

  useEffect(() => {
  if (loginUser) {
    fetchUserCart();
    // console.log(userCart);
    setCartQuantity(cartQuantity);
  } else {
    setCartQuantity(0)
  }
  }, [loginUser]);

  useEffect(() => {
    if (userCart) {
      fetchUserCart();
    }
  }, [userCart]);

  const notify =() => {toast.success("Logout Successful!")}

  if (loginUser) {
    return (
      <>
        <div className="flex flex-1 align-middle justify-end gap-x-3">
          <p className="self-center">Welcome, {loginUser.email.split("@")[0]}!</p>
          <Link to={"/shoppingcart"}>
            <button className="btn btn-sm p-2 hover:bg-gray-300 border-gray-300 border bg-[#122620] group relative">
              <FontAwesomeIcon
                icon={faCartShopping}
                // style={{color: "#ffffff",}}
                className="text-gray-50 group-hover:text-gray-700"/>
              {/*{*/}
              {/*  cartQuantity > 0 &&*/}
              {/*   <span className="w-3.5 h-3.5 bg-red-500 rounded-4xl text-[0.5rem] font-bold absolute text-center text-white left-6 bottom-6">{cartQuantity}</span>*/}
              {/*}*/}

            </button>
          </Link>
          <button
            className="btn btn-sm p-1 px-2 hover:bg-gray-200 hover:text-gray-700 border-gray-50 border bg-[#122620] text-gray-50"
            onClick={() => handleLogoutBtn()}
          >
            Logout
          </button>
          <dialog id="logoutModalMsg" className="modal">
            <div className="modal-box rounded-none w-md">
              <p className="text-center text-black">Logout successful!</p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

        </div>
      </>
    )
  } else if (loginUser === null) {
    return (
      <div className="flex-1 text-end">
        <button
          className="underline self-center hover:cursor-pointer"
          onClick={() => navigate({to: "/login"})}
        >
          LOGIN
        </button>
        {/*<span className="absolute z-10 bg-white text-black rounded-2xl border border-gray-500 w-40 h-6 right-25 top-12 text-wrap text-sm text-center ">*/}
        {/*  Logout successful!*/}
        {/*  */}
        {/*</span>*/}
        <Toaster/>
      </div>
    )
  } else {
    return (
      <div className="flex-1 text-end">
        {/*<progress className="progress w-50 text-white"/>*/}
        <span className="loading loading-spinner loading-sm text-white"></span>
      </div>
    )
  }
}
