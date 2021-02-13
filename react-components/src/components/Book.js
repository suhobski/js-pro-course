import React, { useState } from 'react'
import './Book.scss'

const Book = (props) => {
  const {title, author} = props
  const [readStatus, setReadStatus] = useState(false)
  const bookClasses = ['Book']

  if (readStatus) {
    bookClasses.push('Book__delete')
  }

  return(
    <div className={bookClasses.join(' ')} onClick={() => setReadStatus(!readStatus)}>
      <span className="Book__title">{title}</span>
      <span className="Book__author">{author}</span>
    </div>
  )
}

export default Book;

