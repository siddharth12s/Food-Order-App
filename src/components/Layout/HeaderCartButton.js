import React,{useContext,useEffect,useState} from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {

  const [btnisHighlight, setBtnisHighlight] = useState(false);
  const CartCtx = useContext(CartContext);

  const numberOfItems = CartCtx.items.reduce((acc, item) => {
    return acc + item.amount
  }, 0);
  
  const btnClasses = `${classes.button} ${btnisHighlight ? classes.bump : ''}`;

  const {items} = CartCtx

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnisHighlight(true);

    const timer = setTimeout(()=> {
      setBtnisHighlight(false);
    }, 300)
    
    return () => {
      clearTimeout(timer);
    }
   }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
          <span className={classes.icon }>
              <CartIcon/>
          </span>
          <span>Your Cart</span>
          <span className={classes.badge}>
              {numberOfItems}
          </span>
    </button>
  )
}

export default HeaderCartButton
