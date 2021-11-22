import React, {useEffect, useState} from 'react'
import rgbToHex from './utils'

export type SingleColorType = {
  rgb: Array<number>
  weight: string
  index: number
  hexColor: string
}

const SingleColor = ({rgb, weight, index, hexColor}: SingleColorType) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  // const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{backgroundColor: `rgb(${bcg})`}}
      onClick={() => {
        setAlert(true)
        console.log(navigator)
        navigator.clipboard.writeText(hexValue)

      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {
        alert && <p className="alert">copied to clipboard</p>
      }
    </article>
  )
}

export default SingleColor
