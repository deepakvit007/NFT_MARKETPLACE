import React from 'react'


// internal import
import Style from "./Button.module.css";

const Button = ({btnName, handleClick}) => {
  return (
    <div className={Style.box}>
      <button className={Style.button} onClick={() => handleClick()}>{ btnName}</button>
    </div>
  )
}

export default Button