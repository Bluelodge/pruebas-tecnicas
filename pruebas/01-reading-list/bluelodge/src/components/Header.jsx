import logo from '../svg/logo.png'

export function Header() {
    return (
        <header className="w-1/2 flex h-32 items-center justify-center relative">
            <img className="me-4" src={logo} alt="Logo Casa Editorial THOTH" width="78px"  />
            <div className="flex flex-col items-center ">
                <h1 className="text-amber-500 text-6xl">THOTH</h1>
                <h3 className="library-name text-amber-500 text-2xl">CASA EDITORIAL</h3>
            </div>
        </header>
    )
}