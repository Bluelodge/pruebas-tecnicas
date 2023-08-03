export function BookItem({ title, image, author, year, details, genre, addToReadingList }) {
  return (
    <li
      className="
        h-48 p-2 flex gap-4 rounded-md bg-[rgba(59,7,100,0.8)]
        dark:bg-cream
        md:h-60 md:gap-2"
    >
      <div className="relative aspect-[2/3] rounded-md">
        <img
          className="book-cover aspect-[2/3] rounded-md"
          src={image}
          alt={`Portada del libro ${title}`}
        />
        
        <div
          className="book-info hidden px-2 py-1 top-1/3 left-1/2 rounded-md text-sm
          bg-cream text-purple-950 dark:bg-purple-950 dark:text-amber-400"
        >
          {details}
          <span className="rounded-md dark:noise-popover"></span>
        </div>
      </div>

      <div className="w-full relative flex flex-col">
        <h2 className="book-title text-xl font-bold text-amber-400 dark:text-purple-950">
          {title}
        </h2>
        <h3 className="book-year text-lg font-bold text-amber-400 dark:text-purple-950">
          ({year})
        </h3>
        <p className="mb-5 text-lg text-cream dark:text-red-500">{author}</p>
        <p className="mt-auto justify-end text-sm text-amber-400 dark:text-purple-950">{genre}</p>
        <button
          className="w-28 mt-1 px-1 py-1 rounded-md text-sm
          bg-amber-400 text-purple-950 font-bold dark:font-normal dark:bg-purple-950 dark:text-amber-400
          md:text-base lg:w-32 lg:px-3
          hover:scale-105 hover:drop-shadow-[-2px_4px_0_rgba(251,191,36,0.6)] dark:hover:drop-shadow-[-2px_4px_0_rgba(59,7,100,0.6)]"
          onClick={addToReadingList}
        >
          ¡Quiero leerlo!
        </button>
      </div>
    </li>
  )
}