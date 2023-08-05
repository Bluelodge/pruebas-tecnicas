import { describe, it, expect, beforeAll } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"

import { mappedBooks } from '../logic/books.js'
import { removeFromReadingList } from '../context/library.jsx'

import { ReadingItem } from '../components/ReadingItem.jsx'

describe("RedingList", () => {

    const singleBook = mappedBooks[0]

    beforeAll(() => {
        render(
            <ReadingItem
                key={singleBook.id}
                removeFromReadingList={() => removeFromReadingList}
                {...singleBook}
            />
        )
    })

    it('should render the image of the reading book', () => {
        expect(screen.getByAltText(/Portada del libro.*?/i)).toBeTruthy()
    })

    it('should remove book from reading list', () => {
        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(screen.getByAltText(/Portada del libro.*?/i)).toBeFalsy
    })

})