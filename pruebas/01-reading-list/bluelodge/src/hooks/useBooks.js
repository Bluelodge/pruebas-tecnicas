import { useEffect } from 'react'
import responseLibrary from '../mocks/books.json'

export function useBooks({ context }) {
    const bookList = responseLibrary.library

    const library = bookList.map(({ book }) => ({
        id: book.ISBN,
        title: book.title,
        pages: book.pages,
        genre: book.genre,
        image: book.cover,
        details: book.synopsis,
        year: book.year,
        author: book.author.name
    }))

    useEffect(() => {
        context.setInitialLibrary(library)
    }, [])

    return { library }
}
