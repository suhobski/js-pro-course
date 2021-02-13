import React from 'react'
import './Button.scss'

const Button = (props) => {
  return(
    props.showAuthors 
      ? <button 
          className="Button" 
          onClick={props.changeAuthorsVisible}
        >
          {props.children}
        </button> 
      : <button 
          className="Button" 
          onClick={props.changeAuthorsVisible} 
          disabled
        >
          {props.children}
        </button> 
  )
}

export default Button;

