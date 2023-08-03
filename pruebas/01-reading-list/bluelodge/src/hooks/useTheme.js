import { UserTheme } from "../logic/theme"
import { THEME_MODES, THEME_LOCAL_STORAGE } from "../constants/constants"

export function useTheme() {
    
    const userTheme = window.localStorage.getItem(THEME_LOCAL_STORAGE)

    UserTheme({userTheme})

    const changeTheme = () => {
        const currentTheme = window.localStorage.getItem(THEME_LOCAL_STORAGE)
        const newTheme =
            currentTheme === THEME_MODES.DARK
            ? THEME_MODES.LIGHT
            : THEME_MODES.DARK

        window.localStorage.setItem(THEME_LOCAL_STORAGE, newTheme)

        newTheme === THEME_MODES.DARK
            ? document.documentElement.classList.add(THEME_MODES.DARK)
            : document.documentElement.classList.remove(THEME_MODES.DARK)
    }

    return { changeTheme }
}