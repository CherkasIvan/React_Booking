import React, {Component} from 'react';
import {Card, Container} from 'semantic-ui-react';
import axios from 'axios';

import {BookCardContainer, FilterContainer, MenuBaseContainer} from '../../containers';


class App extends Component {
  componentWillMount() {
    const {setBooks} = this.props;
    axios.get('books.json').then(({data}) => {
      setBooks(data);
    });
  }

  render() {
    const {books, isReady} = this.props;

    return (
        <Container>
          <MenuBaseContainer/>
          <FilterContainer/>
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
