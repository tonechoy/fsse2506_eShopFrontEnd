import TopNav from "../../component/TopNav";
import {type FormEvent, useState} from "react";

interface Props {
  isLogin: boolean
}

export default function LoginPage({isLogin}: Props) {
  const [isPasswordHide, setIsPasswordHide] = useState(true)

  function toggleShowBtn() {
    isPasswordHide ? setIsPasswordHide(false) : setIsPasswordHide(true);
  }

  function handleLoginWithEmailPassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;

    console.log("email: ", email);
    console.log("password:", password);
  }

  return (
    <>
      <TopNav isLogin={isLogin}/>
      <div className="flex-col mx-auto w-md lg:w-6xl">
        <div className="container flex mt-10 justify-center align-middle">
          <div className="left flex-1 hidden lg:block">
            <img
              src="/ComfortCraft-logo1-light.png"
            />
          </div>
          <div className="right flex-col flex-1 space-y-8 m-auto p-5">
            <div className="text-xl font-bold">Sign in to your account</div>
            <form onSubmit={handleLoginWithEmailPassword} className="space-y-5 relative">
              <label className="">Email address</label>
              <input
                type="email"
                id="email-input"
                name="email"
                placeholder="Enter email"
                className="required w-full bg-white border p-3 rounded-none mt-2"
              />
              <label className="">Password</label>
              <input
                type={isPasswordHide ? "password" : "text"}
                id="password-input"
                name="password"
                placeholder="Enter password"
                className="required w-full bg-white border p-3 rounded-none mt-2 relative"
              />
              <button
                type="button"
                id="showBtn"
                className="absolute right-4 bottom-15.5 hover:cursor-pointer"
                onClick={toggleShowBtn}>
                {isPasswordHide ? "Show" : "Hide"}
              </button>
            <button
              type="submit"
              className="w-full p-3 bg-black text-white hover:bg-gray-800"
            >
              Sign in
            </button>
            </form>
            <p className="-mt-7 text-error text-sm invisible">Invalid username & password!</p>
          </div>
        </div>
      </div>
    </>
  )
}