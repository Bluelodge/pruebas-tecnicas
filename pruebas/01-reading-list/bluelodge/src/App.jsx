import { ReadingProvider } from './context/library.jsx'

import { Header } from './components/Header.jsx'
import { Library } from './components/Library.jsx'
import { Theme } from './components/Theme.jsx'

import './css/App.css'

function App() {
  return (
    <ReadingProvider>
      <Theme />
      <Header />
      <Library />
    </ReadingProvider>
  )
}

export default App
