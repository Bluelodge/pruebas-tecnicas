import { useId } from "react"
import { useTheme } from "../hooks/useTheme"

import light from '../svg/iconDay.png'
import dark from '../svg/iconNight.png'

export function Theme() {

  const themeInputId = useId()

  const { changeTheme } = useTheme()
  
  const handleClick = () => {
    changeTheme()
  }

  return (
    <>
      <div className="isolate">
        <div className="noise-background"></div>
      </div>
      <div className="absolute top-2 right-2">
        <label
          className="siteTheme cursor-pointer"
          htmlFor={themeInputId}
        >
          <img className="ligth-mode hidden" src={light} alt="Icono ligth mode" width="30px"  />
          <img className="dark-mode" src={dark} alt="Icono dark mode" width="30px"  />
        </label>
        <input
          className="hidden"
          id={themeInputId}
          type="checkbox"
          onClick={handleClick}
        />
      </div>
    </>
  )
}