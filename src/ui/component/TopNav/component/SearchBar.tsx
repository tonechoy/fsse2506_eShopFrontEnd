export default function SearchBar() {

  return (
    <div className="flex justify-center p-3">
      <input
        type="text"
        placeholder="Search..."
        className="border w-150 px-3 h-13"
      />
      <button className="bg-black w-13 border shrink-0">
        <img
          src="/public/search-light.png"
          className="mx-auto w-6"
        />
      </button>
    </div>
  )
}