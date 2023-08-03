import { useId } from 'react'
import { useReading } from '../hooks/useReading.js'
import { ReadingItem } from './ReadingItem.jsx'

export function ReadingBooks() {
  const { personalLibrary, totalPersonal, removeFromReadingList } = useReading()
  const readingCheckboxId = useId()

  return (
    <section
      className="
        w-full px-8 flex flex-col items-center
        sm:p-0 sm:w-3/4"
    >
      <label
        className="reading-button ms-auto px-4 py-2 relative justify-self-end rounded-lg cursor-pointer
          
          bg-red-600 text-cream
          hover:scale-105 hover:drop-shadow-[-2px_3px_0_rgba(216,180,254,.3)]"
        htmlFor={readingCheckboxId}
      >
        Mi lista de lectura
        {
          totalPersonal > 0
            ? <span
              className="px-5 pt-0.5 pb-1 absolute -right-5 -bottom-4 rounded-b-xl rounded-tr-xl
                bg-amber-400 text-purple-950 dark:bg-cream"
            >
              {totalPersonal}
            </span>
            : ''
        }
      </label>
      <input
        id={readingCheckboxId}
        type="checkbox"
        hidden
      />
      <h1 className="reading-books-title hidden my-6 text-3xl dark:text-amber-400">
        MI LISTA DE LECTURA
        <span className="ms-2 ps-2 pe-1 pt-1 bg-purple-900 text-cream dark:bg-cream dark:text-purple-950">
          {totalPersonal}
        </span>
      </h1>
      {
        totalPersonal > 0
          ?
          <ul
            className="reading-books hidden w-full pt-2 rounded-md
            bg-[rgba(220,38,38,.3)] dark:bg-[rgba(192,132,252,.1)]"
          >
            {
              personalLibrary.map(book => (
                <ReadingItem
                  key={book.id}
                  removeFromReadingList={() => { removeFromReadingList(book) }}
                  {...book}
                />
              ))

            } 
          </ul>
          : <h3 className='reading-notice hidden w-full text-center py-4 text-2xl rounded-lg bg-[rgba(220,38,38,.3)] dark:bg-[rgba(192,132,252,.1)]'>
            Aún no tienes libros en tu lista de lectura.
            </h3>
      }

    </section>
  )
}
