import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
<<<<<<< HEAD
  const navigate = useNavigate();

  const goToCheckoutHandle = () => {
    navigate("/checkout");
=======
  const naviagte = useNavigate();

  const goToCheckoutHandler = () => {
    naviagte("/checkout");
>>>>>>> 6a31f9388aca4fd0773cf40bbdfb65a0f49dde49
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
<<<<<<< HEAD
      <Button onClick={goToCheckoutHandle}>GO TO CHECKOUT</Button>
=======
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
>>>>>>> 6a31f9388aca4fd0773cf40bbdfb65a0f49dde49
    </div>
  );
};

export default CartDropdown;
