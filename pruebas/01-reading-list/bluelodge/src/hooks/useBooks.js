import { useEffect } from 'react'
import { mappedBooks } from '../logic/books'

export function useBooks({ context }) {
    const library = mappedBooks

    useEffect(() => {
        context.setInitialLibrary(mappedBooks)
    }, [])

    return { library }
}
