import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../actions/cart";
import { MenuBase } from "../../components";
import uniqBy from "lodash/uniqBy";

const mapStateToProps = ({ cart }) => {
  const totalCount = cart.items.length;
  const totalPrice = cart.items.reduce((total, book) => total + book.price, 0);
  // Группируем книги по id, чтобы получить уникальные позиции с количеством
  const items = cart.items.reduce((acc, book) => {
    const existing = acc.find((item) => item.id === book.id);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ ...book, count: 1 });
    }
    return acc;
  }, []);
  return {
    totalPrice,
    count: totalCount,
    items,
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuBase);
