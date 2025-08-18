import type {GetAllProductDto} from "../../../../data/product/getAllProductDto.type.ts";

interface Props {
  itemDto: GetAllProductDto
}

export default function ProductItem({itemDto}: Props) {
  return (
    <div className="bg-white flex-1 rounded-lg p-6 hover:shadow-lg">
      <img
        src={itemDto.imageUrl}
        alt={itemDto.name}
        className="flex flex-2 h-60 object-contain hover:scale-105 duration-500 transition-transform"

      />
      <div className="flex-col flex-1 mt-4 h-30">
        <div className="text-gray-400 text-sm font-extralight roboto-">{itemDto.category.toUpperCase()}</div>
        <div className="overflow-hidden text-clip line-clamp-2 hover:underline">{itemDto.name}</div>
        <div className="mt-2 italic font-bold">${itemDto.price}</div>
        <div className="flex justify-around mt-3">
          <button className="bg-green-800 text-white rounded-2xl p-1 px-3 wrap-normal text-sm hover:bg-green-600">Add Cart</button>
          <button className="bg-red-800 text-white wrap-normal p-1 px-3 rounded-2xl text-sm hover:bg-red-600">+ Favorite</button>
        </div>
      </div>
    </div>
  )
}