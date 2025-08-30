import TopNav from "../../component/TopNav";
import {type FormEvent, useContext, useEffect, useState} from "react";
import {signInWithEmailAndPassword, signInWithGoogle} from "../../../authService/FirebaseAuthService.ts";
import {useNavigate, useRouter} from "@tanstack/react-router";
import {LoginUserContext} from "../../../context/LoginUserContext.tsx";
import {GoogleLoginButton} from "react-social-login-buttons";

// interface Props {
//   isLogin: boolean
// }

export default function LoginPage() {
  const router = useRouter();

  const loginUser = useContext(LoginUserContext);

  const navigate = useNavigate({from: "/login"});

  const [isPasswordHide, setIsPasswordHide] = useState(true);
  const [isInvalidLogin, setIsInvalidLogin] = useState(false);

  function toggleShowBtn() {
    isPasswordHide ? setIsPasswordHide(false) : setIsPasswordHide(true);
  }

  const handleLoginWithEmailPassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;

    console.log("email: ", email);
    console.log("password:", password);

    const loginResult = await signInWithEmailAndPassword(email, password);

    if (loginResult) {
      router.history.back();
    } else {
      setIsInvalidLogin(true);
    }
  }

  useEffect(() => {
    if (loginUser) {
      navigate({to: "/"});
    }
  }, [loginUser]);

  return (
    <div className="bg-white w-screen h-svh">
      <TopNav/>
      <div className="flex-col  mx-auto w-md lg:w-6xl">
        <div className="container flex mt-10 justify-center align-middle">
          <div className="left flex-1 hidden lg:block">
            <img
              src="/ComfortCraft-logo2-light.png"
            />
          </div>
          <div className="right flex-col flex-1 space-y-8 m-auto p-5">
            <div className="text-xl font-bold text-gray-700">Sign in to your account</div>
            <form onSubmit={handleLoginWithEmailPassword} className="space-y-5 relative">
              <label className="text-gray-700">Email address</label>
              <input
                type="email"
                id="email-input"
                name="email"
                placeholder="Enter email"
                className="required w-full bg-white border border-gray-500 p-3 rounded-none mt-2 text-gray-700"
              />
              <label className="text-gray-700">Password</label>
              <input
                type={isPasswordHide ? "password" : "text"}
                id="password-input"
                name="password"
                placeholder="Enter password"
                className="required w-full bg-white border border-gray-500 p-3 rounded-none mt-2 relative text-gray-700"
              />
              <button
                type="button"
                id="showBtn"
                className="absolute right-4 bottom-19 hover:cursor-pointer"
                onClick={toggleShowBtn}>
                {isPasswordHide ? "Show" : "Hide"}
              </button>
            <button
              type="submit"
              className="w-full p-3 mt-4 bg-black text-white hover:bg-gray-800"
            >
              Sign in
            </button>
            </form>
            <p id="loginMsg" className={`${isInvalidLogin ? "block" : "invisible"} -mt-7 text-error text-sm`}>Invalid username & password!</p>
            <hr className="-mt-4 mb-9 text-gray-300"/>
            <GoogleLoginButton onClick={signInWithGoogle}/>
          </div>
        </div>
      </div>
    </div>
  )
}