import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../../redux/slices/userSlice";
const Container = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  color: #c71717;
`;
const SearchContainer = styled.div`
  margin-left: 20px;
`;
const Input = styled.input`
  border: aquamarine;
  padding: 10px;
  box-shadow: 0 1px 3px 0 #bbbbbb;
`;
const Menu = styled.div`
  display: flex;
`;
const MenuItem = styled.button`
  font-size: 14px;
  border: none;
  margin-left: 15px;
  padding: 0;
  cursor: pointer;
  background: none;
  font-weight: bold;

  :hover {
    color: #17e1a0;
  }
`;
const CartIcon = styled.div`
  font-size: 20px;
  position: relative;
`;
const Badge = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  font-size: 10px;
  border-radius: 50%;
  top: -8px;
  right: -4px;
  background-color: azure;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  const { totalAmount } = useSelector((s) => s.cart);
  const { isSuccess, user } = useSelector((s) => s.user);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  return (
    <Container>
      <Left>
        <Logo>
          <Link to="/">Nevis</Link>
        </Logo>
        <SearchContainer>
          <Input placeholder="...search" />
        </SearchContainer>
      </Left>
      <Menu>
        {isSuccess ? (
          <>
            <MenuItem>Добро пожаловать, {user.email}</MenuItem>
            {/*<MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>*/}
            <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
          </>
        ) : (
          <>
            <MenuItem onClick={() => navigate("/register")}>Register</MenuItem>
            <MenuItem onClick={() => navigate("/login")}>Sign in</MenuItem>
          </>
        )}

        <MenuItem onClick={() => navigate("/cart")}>
          <CartIcon>
            <Badge>{totalAmount}</Badge>
            <i className="bx bx-cart"></i>
          </CartIcon>
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Header;
