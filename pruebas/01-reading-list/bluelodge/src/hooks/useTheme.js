import { UserTheme } from "../logic/theme"

export function useTheme() {
    
    const userTheme = window.localStorage.getItem('user-theme')

    UserTheme({userTheme})

    const changeTheme = () => {
        const currentTheme = window.localStorage.getItem('user-theme')
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark'

        window.localStorage.setItem('user-theme', newTheme)

        newTheme === 'dark'
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark')
    }

    return { changeTheme }
}