import { THEME_MODES, THEME_LOCAL_STORAGE } from "../constants/constants"

export function UserTheme ({ userTheme }) {
    if (userTheme === undefined) {
        window.localStorage.setItem(THEME_LOCAL_STORAGE, THEME_MODES.DARK)
        document.documentElement.classList.add(THEME_MODES.DARK)

        return
    }

    if (userTheme === THEME_MODES.DARK) {
        document.documentElement.classList.add(THEME_MODES.DARK)

        return
    }
    
    if (userTheme === THEME_MODES.LIGHT) {
        document.documentElement.classList.remove(THEME_MODES.DARK)

        return
    }
}