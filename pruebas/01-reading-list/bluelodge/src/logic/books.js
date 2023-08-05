import responseLibrary from '../mocks/books.json'

const bookList = responseLibrary.library

export const mappedBooks = bookList.map(({ book }) => ({
    id: book.ISBN,
    title: book.title,
    pages: book.pages,
    genre: book.genre,
    image: book.cover,
    details: book.synopsis,
    year: book.year,
    author: book.author.name
}))

export function FetchGenres ({ library }) {

    const genres = []
    library.forEach(book => {
        if(!genres.includes(book.genre)) {
            genres.push(book.genre)
        }
    });

    genres.sort((a, b) => (a.localeCompare(b)))

    return genres
}

export function FetchAuthors ({library}) {

    const authors = []
    library.forEach(book => {
        if (!authors.includes(book.author)) {
            authors.push(book.author)
        }
    });

    authors.sort((a, b) => (a.localeCompare(b)))

    return authors
}
