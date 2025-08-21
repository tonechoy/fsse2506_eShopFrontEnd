import {Link} from "@tanstack/react-router";

interface Props {
  isLogin: boolean
}

export default function TopStatus({isLogin}: Props) {

  return (
    <div className="flex justify-between px-3 bg-green-950 text-white align-middle h-10 items-center">
      <Link to={"/"}>
        <button className="self-center hover:cursor-pointer">Logo</button>
      </Link>
      <h1 className="text-2xl self-center font-serif">ComfortCraft</h1>

      {
        !isLogin
          ? (
            <button
              className="underline self-center hover:cursor-pointer"
            >
              LOGIN
            </button>

          ) : (

            <div className="flex gap-3.5 align-middle self-center">
              <div>
                Hi, <a href="" className="underline font-bold">username</a>!
              </div>
              <div className="flex gap-1 self-center">
                <span>Cart</span>
                <button>
                  <img
                    src="/public/shopping-cart-light.png"
                    width={20}
                    // height={10}
                  />
                </button>
              </div>
              {/*<div className="flex gap-1 align-middle">*/}
              {/*  <div>Favorite</div>*/}
              {/*  <button>*/}
              {/*    <img*/}
              {/*      src="./../../../public/favorite-list-light.png"*/}
              {/*      width={20}*/}
              {/*    />*/}
              {/*  </button>*/}
              {/*</div>*/}
            </div>
          )
      }
      {/*<CategoryTab/>*/}

    </div>
  )
}