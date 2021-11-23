import React, {useEffect, useState} from 'react'

export type SingleColorType = {
  rgb: Array<number>
  weight: string
  hexColor: string
  type: string
}

const SingleColor = ({rgb, weight, hexColor, type}: SingleColorType) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hexValue = `#${hexColor}`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 500)
    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <article
      className={`color ${type === 'shade' && 'color-light'}`}
      style={{backgroundColor: `rgb(${bcg})`}}
      onClick={() => {
        setAlert(true)
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
