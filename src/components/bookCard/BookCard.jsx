  import React, { useState, useEffect } from 'react';
  import { Card, Image, Icon, Button } from 'semantic-ui-react';
  const BookCard = (book) => {
    const { title, author, price, image, addToCart, addedCount } = book;
    const [imageError, setImageError] = useState(false);
    useEffect(() => {
      setImageError(false);
    }, [image]);
    if (!image || imageError) {
      return null;
    }
    const handleImageError = () => {
      setImageError(true);
    };
    return (
      <Card>
        <div className="card-image">
          <Image src={image} onError={handleImageError} />
        </div>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            <span className="date">{author}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a><Icon name="money bill alternate" />{price} BYN</a>
        </Card.Content>
        <Button onClick={() => addToCart(book)}>
          Добавить в корзину {addedCount > 0 && `(${addedCount})`}
        </Button>
      </Card>
    );
  };
  export default BookCard;