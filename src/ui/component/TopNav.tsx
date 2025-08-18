interface Props {
  isLogin: boolean;
}

export default function TopNav({isLogin}: Props) {
  return (
    <div className="flex justify-between px-2 bg-black text-white align-middle">

      <h1 className="self-center">Logo</h1>
      <h1 className="text-2xl self-center">Comfy</h1>

      {
        !isLogin
        ? (
            <div
              className="underline self-center"
            >
              LOGIN
            </div>
          ) : (

      <div className="flex gap-3.5 align-middle self-center">
        <div>
          Hi, <a href="" className="underline font-bold">username</a>!
        </div>
        <div className="flex gap-1 self-center">
          <span>Cart</span>
          <button>
            <img
              src="./../../../public/shopping-cart-light.png"
              width={20}
              // height={10}
            />
          </button>
        </div>
        <div className="flex gap-1 align-middle">
          <div>Favorite</div>
          <button>
            <img
              src="./../../../public/favorite-list-light.png"
              width={20}
            />
          </button>
        </div>
      </div>
          )
      }
    </div>
  )
}