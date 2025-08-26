export default function LoadingBackdrop() {
  return (
    <>
      <div className="bg-white/10 backdrop-blur-sm w-screen h-screen absolute top-0 left-0 flex justify-center align-middle">
        {/*<div className="bg-yellow-300/30 backdrop-blur-md w-screen h-screen"></div>*/}
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    </>
  )
}