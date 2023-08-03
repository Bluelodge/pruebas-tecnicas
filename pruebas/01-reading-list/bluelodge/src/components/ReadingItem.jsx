export function ReadingItem({ image, title, details, removeFromReadingList }) {
  return (
    <li className="w-44 mx-4 pb-2 relative inline-block rounded-lg text-center">
      <div className="reading-book-shadow"></div>
      <img
        className="reading-book-image self-start aspect-[2/3] rounded-lg"
        src={image}
        alt={`Portada del libro ${title}`}
      />
      <button
        className="my-6 px-4 pb-0.5 rounded border border-2 border-transparent font-bold
        bg-amber-400 text-purple-950 dark:font-medium dark:bg-cream 
        hover:scale-110 hover:border-red-600"
        onClick={removeFromReadingList}
      >
        Ya no me interesa
      </button>
      <div
        className="reading-book-details hidden px-2 py-1 top-1/4 left-2/3 rounded-2xl text-sm
        bg-cream dark:bg-violet-900"
      >
        {details}
        <span className="dark:noise-popover rounded-2xl"></span>
      </div>
    </li>
  )
}