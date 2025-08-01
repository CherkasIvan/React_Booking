import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';
import booksData from './public/books.json';
import { BookCardContainer, FilterContainer, MenuBaseContainer } from '../../containers';

class App extends Component {
  componentDidMount() { 
    const { setBooks } = this.props;
    setBooks(booksData); 
  }

  render() {
    const { books, isReady } = this.props;

    return (
      <Container>
        <MenuBaseContainer />
        <FilterContainer />
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? 'Загрузка...'
            : books.map((book, i) => <BookCardContainer key={i} {...book} />)}
        </Card.Group>
      </Container>
    );
  }
}

export default App;