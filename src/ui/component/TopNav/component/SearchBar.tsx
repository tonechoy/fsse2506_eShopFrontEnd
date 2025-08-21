export default function SearchBar() {

  return (
    <div className="flex justify-center p-3">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-400 w-150 px-3 h-12"
      />
      <button className="bg-black w-12 h-12 border shrink-0">
        <img
          src="/public/search-light.png"
          className="mx-auto w-6"
        />
      </button>
    </div>
  )
}