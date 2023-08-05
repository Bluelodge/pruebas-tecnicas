import { describe, it, expect } from "vitest"

import { library } from '../mocks/books.json'
import { FetchGenres, FetchAuthors } from '../logic/books.js'

describe("Filter", () => {

    const genres = FetchGenres({library})
    const authors = FetchAuthors({library})

    it('should have at least one genre', () => {
        expect(genres.length).toBeGreaterThanOrEqual(1)
    })

    it('should have at least one author', () => {
        expect(authors.length).toBeGreaterThanOrEqual(1)
    })

})