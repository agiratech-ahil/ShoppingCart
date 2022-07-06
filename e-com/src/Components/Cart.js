import React, { useState, useEffect } from "react";
import { ListGroup, Card, Form } from "react-bootstrap";
import { CartState } from "../Context/Context";
import { AiFillDelete } from "react-icons/ai";

export default function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState([]);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  return (
    <>
      <div className="home2">
        <div className="productContainer">
          <ListGroup>
            {cart.map((prod) => (
              <div className="product1">
                <Card>
                  <Card.Img
                    variant="top"
                    src={prod.image}
                    alt={prod.name}
                    style={{ width: 250 }}
                  />
                  <span>{prod.name}</span>
                  <Card.Subtitle style={{ paddingBottom: 10 }}>
                    <span>${prod.price.split(".")[0]}</span>
                  </Card.Subtitle>
                  <Card.Subtitle style={{ paddingBottom: 10, width: 500 }}>
                    <span>{prod.Description}</span>
                  </Card.Subtitle>
                </Card>
                <Form.Control
                  as="select"
                  value={prod.qty}
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE-CART-QTY",
                      payload: {
                        id: prod.id,
                        qty: e.target.value,
                      },
                    })
                  }
                >
                  {[...Array(prod.inStock).keys()].map((x) => (
                    <option key={x + 1}>{x + 1} </option>
                  ))}
                </Form.Control>
                <AiFillDelete
                  fontSize="20px"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    dispatch({ type: "REMOVE-FROM-CART", payload: prod })
                  }
                />
              </div>
            ))}
          </ListGroup>
          <div className="filters summary">
            <span className="title">Subtotal({cart.length}) items</span>
            <span style={{ fontWeight: 700, fontSize: 20 }}>
              Total:${total}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
