import {Link} from "@tanstack/react-router";

export default function LoadingItem() {
  return (
    <>
      <div className="flex-col rounded-md mt-3 p-6 bg-gray-50 h-100 m-2 mx-auto w-md md:w-full">
        <div className="skeleton w-full h-43 mb-7 rounded-md bg-gray-200"></div>
        <div className="skeleton w-30 h-8 mb-5 rounded-md bg-gray-200"></div>
        <div className="skeleton w-full h-8 mb-7 rounded-md bg-gray-200"></div>
        <div className="skeleton w-40 h-8 mb-4 rounded-md bg-gray-200"></div>
      </div>
    </>
  )
}