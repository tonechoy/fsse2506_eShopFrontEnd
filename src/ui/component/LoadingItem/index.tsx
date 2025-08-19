import {Link} from "@tanstack/react-router";

export default function LoadingItem() {
  return (
    <>
      <div className="flex-col rounded-lg p-6 bg-gray-50 h-100">
        <div className="skeleton w-full h-40 mb-5 bg-gray-200"></div>
        <div className="skeleton w-30 h-10 mb-5 bg-gray-200"></div>
        <div className="skeleton w-full h-10 mb-3 bg-gray-200"></div>
        <div className="skeleton w-40 h-10 mb-4 bg-gray-200"></div>
      </div>
    </>
  )
}