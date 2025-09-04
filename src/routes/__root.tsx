// import appCss from '../styles/app.css?url'
import {createRootRoute, Outlet} from "@tanstack/react-router";
import {useEffect, useState} from "react";
import type {UserData} from "../data/user/user.type.ts";
import {onAuthStateChanged} from "../authService/FirebaseAuthService.ts";
import {LoginUserContext} from "../context/LoginUserContext.tsx";
// import type {CartItemDto} from "../data/cartItem/cartItemDto.ts";
// import {getUserCart} from "../api/cartItem/cartItemApi.ts";
// import {UserCartContext} from "../context/UserCartContext.tsx";

export const Route = createRootRoute({
  component: RootComponent
})

function RootComponent() {
  const [loginUser, setLoginUser] = useState<UserData | null | undefined>(undefined);
  // const [userCart, setUserCart] = useState<CartItemDto[] | undefined>(undefined);

  // const fetchUserCart = async () => {
  //   const result = await getUserCart();
  //   setUserCart(result);
  // }

  useEffect(() => {
    onAuthStateChanged(setLoginUser);
    // if (loginUser) {
    //   fetchUserCart();
    // }
  }, []);

  return (
    <LoginUserContext.Provider value={loginUser}>
      {/*<UserCartContext value={userCart}>*/}
      <Outlet/>
      {/*</UserCartContext>*/}
    </LoginUserContext.Provider>
  )
}