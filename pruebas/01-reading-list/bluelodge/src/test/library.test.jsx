import { describe, it, expect } from "vitest"
import { library } from '../mocks/books.json'

describe("Library", () => {

    it('should have at least one book', () => {
        expect(library.length).toBeGreaterThanOrEqual(1)
    })

})