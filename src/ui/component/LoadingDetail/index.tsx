export default function LoadingDetail() {
  return (
    <>
      <div className="flex m-auto gap-10 w-screen px-20 my-10 lg:w-5xl">
        <div className="flex-6 skeleton w-50 h-130 bg-gray-100"></div>
        <div className="flex-4 w-full flex-col my-auto">
          <div className="skeleton h-10 bg-gray-100 mb-7 w-40"></div>
          <div className="skeleton h-10 bg-gray-100 mb-7"></div>
          <div className="skeleton h-10 bg-gray-100 mb-20 w-80"></div>
          <div className="skeleton h-10 bg-gray-100 mb-7 w-30"></div>
          <div className="skeleton h-10 bg-gray-100 mb-7 w-50"></div>
        </div>
      </div>
      {/*<div*/}
      {/*  className="hero min-h-screen"*/}
      {/*  // style={{backgroundColor:"black", opacity:"30%"}}*/}
      {/*>*/}
      {/*  <div className="hero-overlay"></div>*/}
      {/*  <div className="hero-content text-neutral-content text-center">*/}
      {/*    <div className="max-w-md">*/}
      {/*      <progress className="progress w-56"></progress>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  )
}