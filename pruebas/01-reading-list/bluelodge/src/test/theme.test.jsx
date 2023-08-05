import { describe, it, expect, beforeAll } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"

import { UserTheme } from "../logic/theme"
import { Theme } from "../components/Theme"

describe("Theme", () => {

    beforeAll(() =>{
        render(<Theme />)
    })

    it('should accept ligth mode', () => {
        const mode = 'ligth'
        expect(UserTheme(mode)).toBeTruthy
    })

    it('should accept dark mode', () => {
        const mode = 'dark'
        expect(UserTheme(mode)).toBeTruthy
    })

    it('should not accept something different from light or dark', () => {
        const mode = 'other mode'
        expect(UserTheme(mode)).toBeFalsy
    })

    it('should have input hidden', () => {
        expect(screen.getByRole('checkbox', { hidden: true})).toBeTruthy
    })

    it('should be able to change theme', () => {
        const change = screen.getByRole('checkbox', { hidden: true})
        fireEvent.click(change)

        expect(screen.getByRole('checkbox', { checked: true})).toBeTruthy
    })

})