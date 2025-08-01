import React from "react";
import { Menu, Popup, List, Button, Image, Label } from "semantic-ui-react";


const CartComponent = ({ title, id, image, removeFromCart, count }) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <div className="contenter">
        <Image avatar src={image} />
        <List.Content>{title}</List.Content>
      </div>
      <List.Content floated="right">
        <Label circular color="teal">
          {count}
        </Label>
        <Button onClick={() => removeFromCart(id)} color="red" style={{ marginLeft: '10px' }}>
          Удалить
        </Button>
      </List.Content>
    </List.Item>
  </List>
);

const MenuBase = ({ totalPrice, count, items }) => (
  <Menu>
    <Menu.Item name="browse">Магазин книг</Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item name="signup">
        Итого: &nbsp; <b>{totalPrice}</b>&nbsp;руб.
      </Menu.Item>

      <Popup
        trigger={
          <Menu.Item name="help">
            Корзина (<b>{count}</b>)
          </Menu.Item>
        }
        content={items.map(book => (
          <CartComponent {...book} addedCount={book.count} />
        ))}
        on="click"
        hideOnScroll
      />
    </Menu.Menu>
  </Menu>
);

export default MenuBase;
