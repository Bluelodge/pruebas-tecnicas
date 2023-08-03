export function UserTheme ({ userTheme }) {
    if (userTheme === undefined) {
        window.localStorage.setItem('user-theme', 'dark')
        document.documentElement.classList.add('dark')

        return
    }

    if (userTheme === 'dark') {
        document.documentElement.classList.add('dark')

        return
    }
    
    if (userTheme === 'light') {
        document.documentElement.classList.remove('dark')

        return
    }
}