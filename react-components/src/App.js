import { useState } from 'react';
import './App.scss';
import Book from './components/Book';
import BookInput from './components/BookInput';
import Button from './components/Button';

function App() {
  const books = [
    {title: 'The Lord of the Rings', author: 'J. R. R. Tolkien'},
    {title: 'Lord of the Flies', author: 'William Golding'},
    {title: 'Oliver Twist', author: 'Charles Dickens'},
    {title: 'Eugene Onegin', author: 'Aleksandr Pushkin'},
    {title: 'Uncle Vanya', author: 'Anton Chekhov'},
    {title: 'War and Peace', author: 'Leo Tolstoy'},
  ]

  const [booksList, setBooksList] = useState(books);
  const [showAuthors, setShowAuthors] = useState(true)

  const addBook = (title, author) => {
    const updatingList = Array.from(booksList)
    updatingList.push({title, author})
    setBooksList(updatingList)
  }

  const changeAuthorsVisible = () => {
    setShowAuthors(!showAuthors)
  }

  return (
    <div className="App">
      <header className="App__header">
        <Button changeAuthorsVisible={changeAuthorsVisible} showAuthors={showAuthors}>Hide Authors</Button>
        <Button changeAuthorsVisible={changeAuthorsVisible} showAuthors={!showAuthors}>Show Authors</Button>
      </header>
      <div className="App__list">
        {
          booksList.map(({title, author}) => {
            return (
              showAuthors
                ? <Book title={title} author={author} key={title}/>
                : <Book title={title} author={''} key={title}/>
            )
          })
        }
      </div>
      <BookInput addBook={addBook}/>

    </div>
  );
}

export default App;
