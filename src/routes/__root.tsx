// import appCss from '../styles/app.css?url'
import {createRootRoute, Outlet} from "@tanstack/react-router";
import {useEffect, useState} from "react";
import type {UserData} from "../data/user/user.type.ts";
import {onAuthStateChanged} from "../authService/FirebaseAuthService.ts";
import {LoginUserContext} from "../context/LoginUserContext.tsx";

export const Route = createRootRoute({
  component: RootComponent
})

function RootComponent() {
  const [loginUser, setLoginUser] = useState<UserData | null | undefined>(undefined);

  useEffect(() => {
    onAuthStateChanged(setLoginUser);
  }, []);

  return (
    <LoginUserContext.Provider value={loginUser}>
      <Outlet/>
    </LoginUserContext.Provider>
  )
}