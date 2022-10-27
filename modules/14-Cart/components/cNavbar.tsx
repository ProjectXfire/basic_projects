import React, { useContext } from "react";
// External libraries
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/cartContext";

//******** COMPONENTS ********//

export const Navbar = () => {
  //--> Hooks

  const {
    state: { items },
  } = useContext(CartContext);

  //--> Renders

  return (
    <SNavbar>
      <SMenu items={items > 99 ? `+99` : `${items}`}>
        <li>Cart</li>
        <li>
          <FaShoppingCart />
        </li>
      </SMenu>
    </SNavbar>
  );
};

//******** STYLES ********//

interface SMenuProps {
  items: string;
}

const SNavbar = styled.nav`
  padding: 20px 0px;
  background: -moz-linear-gradient(
    90deg,
    rgba(0, 99, 255, 1) 0%,
    rgba(138, 173, 242, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(0, 99, 255, 1) 0%,
    rgba(138, 173, 242, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(0, 99, 255, 1) 0%,
    rgba(138, 173, 242, 1) 100%
  );
`;

const SMenu = styled.ul<SMenuProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0;
  color: white;
  font-size: 1.5rem;
  & li:nth-of-type(2) {
    font-size: 2rem;
    &::after {
      position: absolute;
      top: -10px;
      right: -10px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18px;
      height: 18px;
      padding: 4px;
      content: "${(props) => props.items}";
      background-color: #2f55ff;
      font-size: 0.7rem;
      border-radius: 50%;
      overflow: hidden;
    }
  }
`;
