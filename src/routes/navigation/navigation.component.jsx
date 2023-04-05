import { Outlet } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { signOutUser } from '../../utils/firebase/firebase.util';
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SignOut
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}

          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
