import React from "react";
import {
  Container,
  Navbar,
  FormControl,
  Dropdown,
  Nav,
  Badge,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from "../Context/Context";

export default function Header() {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="./">Home</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            className="m-auto"
            style={{ width: 500 }}
            placeholder="Search"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignright="true">
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length > 0 ? <>{cart.length}</> : <></>}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartItem" key={prod.id}>
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="cartItemImg"
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>${prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({ type: "REMOVE-FROM-CART", payload: prod })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go to Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <span style={{ padding: 10 }}>Card is emplty</span>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>

        <Button
          style={{ backgroundColor: "green", border: "none" }}
          className="navbar1"
        >
          <Link to="/signup">SignUp</Link>
        </Button>
      </Container>
    </Navbar>
  );
}
