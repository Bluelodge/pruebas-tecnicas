import { useId } from "react"
import { useFilters } from "../hooks/useFilters"
import { useReading } from "../hooks/useReading"

export function Filters() {
  const { genre, author, minPages, minYear,
          updateGenreFilter, updateAuthorFilter,
          updatePagesFilter, updateYearFilter
        } = useFilters()

  const { genres, authors } = useReading()
  
  const genreFilterId = useId()
  const authorFilterId = useId()
  const pagesFilterId = useId()
  const yearFilterId = useId()

  const handleGenreChange = (event) => {
    const newGenre = event.target.value
    updateGenreFilter(newGenre)
  }

  const handleAuthorChange = (event) => {
    const newAuthor = event.target.value
    updateAuthorFilter(newAuthor)
  }

  const handlePagesChange = (event) => {
    const newAmounth = event.target.value
    updatePagesFilter(newAmounth)
  }

  const handleYearChange = (event) => {
    const newMinYear = event.target.value
    updateYearFilter(newMinYear)
  }

  return (
    <section
      className="w-full mt-12 mb-8 px-8 grid grid-cols-1 gap-2 sm:gap-3
        sm:grid-cols-2 lg:grid-cols-4
        sm:w-3/4 sm:p-0"
    >
      <fieldset className="flex sm:flex-col items-center sm:items-start">
        <label
          className="w-20 sm:w-40 text-lg font-bold dark:font-medium dark:text-cream uppercase"
          htmlFor={genreFilterId}
        >
          GÉNEROS
        </label>
        <select
          className="filter-select w-40 h-5 ms-4 sm:m-0 ps-2 rounded-md border border-1 border-purple-900 appearance-none
          bg-purple-900 text-cream dark:bg-cream dark:text-red-600 dark:border-transparent
          focus:outline-none focus:ring-0 focus:border-0
          hover:border-amber-400 hover:dark:border-red-600 hover:text-amber-400 hover:dark:text-purple-950"
          id={genreFilterId}
          value={genre}
          onChange={handleGenreChange}
        >
          <option className="bg-cream text-purple-950" value="all">Todos</option>
          {
            genres.map(genre =>(
              <option key={genres.index} className="bg-cream text-purple-950" value={genre}>{genre}</option>
            ))
          }
        </select>
      </fieldset>

      <fieldset className="flex sm:flex-col items-center sm-lg:justify-self-end sm:items-end lg:items-start">
        <label
          className="w-20 sm:w-auto text-lg font-bold dark:font-medium dark:text-cream uppercase"
          htmlFor={authorFilterId}
        >
          AUTORES
        </label>
        <select
          className="filter-select w-40 h-5 ms-4 sm:m-0 ps-2 rounded-md border border-1 border-purple-900 appearance-none
          bg-purple-900 text-cream dark:bg-cream dark:text-red-600 dark:border-trasnparent
          focus:outline-none focus:ring-0 focus:border-0
          hover:border-amber-400 hover:dark:border-red-600 hover:text-amber-400 hover:dark:text-purple-950"
          id={authorFilterId}
          value={author}
          onChange={handleAuthorChange}
        >
          <option className="bg-cream text-purple-950" value="all">Todos</option>
          {
            authors.map(author =>(
              <option key={authors.index} className="bg-cream text-purple-950" value={author}>{author}</option>
            ))
          }
        </select>
      </fieldset>

      <fieldset className="flex flex-col">
        <label
          className="w-52 text-lg font-bold dark:font-medium dark:text-cream"
          htmlFor={pagesFilterId}
        >
          No. DE PÁGINAS
        </label>
        <input
          className="filter-slider w-64 sm:w-44 h-2 rounded-lg bg-purple-900 dark:bg-cream cursor-pointer appearance-none"
          type="range"
          id={pagesFilterId}
          min="0"
          max="2000"
          onChange={handlePagesChange}
          value={minPages}
        />
        <p className="font-bold text-xl text-red-600 dark:text-amber-400">
          {minPages} - 2000
        </p>
      </fieldset>

      <fieldset className="flex flex-col sm-lg:justify-self-end sm:items-end lg:items-start">
        <label
          className="lg:w-52 sm:w-auto text-lg font-bold uppercase dark:font-medium dark:text-cream"
          htmlFor={yearFilterId}
        >
          AÑO DE PUBLICACIÓN
        </label>
        <input
          className="filter-slider w-64 sm:w-44 h-2 rounded-lg bg-purple-900 dark:bg-cream cursor-pointer appearance-none"
          type="range"
          id={yearFilterId}
          min="1800"
          max="2023"
          onChange={handleYearChange}
          value={minYear}
        />
        <p className="font-bold text-xl text-red-600 dark:text-amber-400">
        {minYear} - 2023
        </p>
      </fieldset>
    </section>
  )
}