import { useReading } from '../hooks/useReading'
import { BookItem } from './BookItem.jsx'

export function Books() {
  
  const { totalComercial, addToReadingList, books, totalFiltered } = useReading()

  return (
    <section
      className="
        w-full mb-12 flex flex-col items-center
        sm:w-3/4 sm:p-0"
    >
      <div className="w-full m-5 flex items-center justify-center">
        <h1 className=" text-3xl">
          LIBROS DISPONIBLES 
        </h1>
        <h2 className="w-32 text-3xl">
          <span
            className="mx-2 ps-2 pe-1 pt-1.5
            dark:bg-cream dark:text-purple-950"
          >
            {
              totalFiltered === totalComercial
                ? ''
                : `${totalFiltered} de `
            }
            {totalComercial}

          </span>
        </h2>
      </div>
        {
          books.length > 0
            ? <ul className="
                    w-full grid grid-cols-1 gap-3
                    md:grid-cols-2 xl:grid-cols-3"
              >
                { books.map(book => (
                  <BookItem
                    key={book.id}
                    addToReadingList={() => addToReadingList(book)}
                    {...book}
                  />
                ))
                }
              </ul>
            : <h3 className='w-full text-center py-4 text-2xl rounded-lg bg-[rgba(220,38,38,.3)] dark:bg-[rgba(192,132,252,.1)] text-2xl'>
                No tenemos libros con estas características
              </h3>
        }
    </section>
  )
}
