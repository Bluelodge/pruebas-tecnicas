import { describe, it, expect, beforeAll } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"

import { mappedBooks } from '../logic/books.js'
import { addToReadingList } from '../context/library.jsx'

import { BookItem } from '../components/BookItem.jsx'

describe("BookList", () => {

    const singleBook = mappedBooks[0]

    beforeAll(() => {
        render(
            <BookItem
                key={singleBook.id}
                addToReadingList={() => addToReadingList}
                {...singleBook}
            />
        )
    })

    it('should render the image of the book', () => {
        expect(screen.getByAltText(/Portada del libro.*?/i)).toBeTruthy()
    })

    it('should remove book from available list', () => {
        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(screen.getByAltText(/Portada del libro.*?/i)).toBeFalsy
    })

})