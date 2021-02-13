import './BookInput.scss'

const BookInput = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookTitle = document.querySelector('.BookInput__title')
    const bookAuthor = document.querySelector('.BookInput__author')

    if (bookTitle.value && bookAuthor.value) {
      props.addBook(bookTitle.value, bookAuthor.value);
      bookTitle.value = ''
      bookAuthor.value = ''      
    }
  }

  return(
    <form className="BookInput" onSubmit={handleSubmit}>
      <input className="BookInput__title" type="text" placeholder="Title"/>
      <input className="BookInput__author" type="text" placeholder="Author"/>
      <input type="submit" value="Add book" />
  </form>
  )
}

export default BookInput;