import { describe, it, expect } from "vitest"

import { library } from '../mocks/books.json'
import { mappedBooks } from '../logic/books.js'

describe("Library", () => {

    const singleBook = mappedBooks[0]

    it('should have at least one book', () => {
        expect(library.length).toBeGreaterThanOrEqual(1)
    })

    it('should map the books', () => {
        expect(singleBook).toHaveProperty('id')
    })

    it('should map all the books', () => {
        expect(mappedBooks.length).toEqual(library.length)
    })

})