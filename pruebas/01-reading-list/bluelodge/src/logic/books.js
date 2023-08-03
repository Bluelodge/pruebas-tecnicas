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
