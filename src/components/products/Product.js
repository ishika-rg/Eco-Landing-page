import React from "react";
import "./Product.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import a from "../../images/bamboo qtips7.jpg";
 import b from '../../images/reusable makeup 3.jfif'
import c from '../../images/reusable snackbag6.jfif';
import d from '../../images/collapsible straw5.jpg'
import e from '../../images/bamboo straw4.jfif'
import f from '../../images/bamboo toothbrush8.jpg'


import { useInView } from "react-intersection-observer";


const Product = () => {


  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.4,
  });



  return (
    <div className="product_section">
      <h1>OUR PRODUCTS</h1>

      <div className= { inView ? "products products_zoom" : "products"} ref = {ref}>
        <div className="card">
          <Card style={{ width: "18rem" }}>
            <Card.Img className="product_img" variant="top" src={a} />
            <Card.Body>
              <Card.Title className="product_title">Cotton Buds</Card.Title>
              <Card.Text className="product_text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <Card.Text className="product_price">$300</Card.Text>

              <Button variant="primary" className="cart">
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="card">
          <Card style={{ width: "18rem" }}>
            <Card.Img className="product_img" variant="top" src={c} />
            <Card.Body>
              <Card.Title className="product_title">Reusable Snack Bag</Card.Title>
              <Card.Text className="product_text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <Card.Text className="product_price">$200</Card.Text>

              <Button variant="primary" className="cart">
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="card">
          <Card style={{ width: "18rem" }}>
            <Card.Img className="product_img" variant="top" src={b} />
            <Card.Body>
              <Card.Title className="product_title">Reusable Makeup Kit</Card.Title>
              <Card.Text className="product_text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <Card.Text className="product_price">$500</Card.Text>

              <Button variant="primary" className="cart">
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="card">
          <Card style={{ width: "18rem" }}>
            <Card.Img className="product_img" variant="top" src={d} />
            <Card.Body>
              <Card.Title className="product_title">Collapsible Straws</Card.Title>
              <Card.Text className="product_text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <Card.Text className="product_price">$500</Card.Text>

              <Button variant="primary" className="cart">
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="card">
          <Card style={{ width: "18rem" }}>
            <Card.Img className="product_img" variant="top" src={e} />
            <Card.Body>
              <Card.Title className="product_title">Bamboo Straws</Card.Title>
              <Card.Text className="product_text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <Card.Text className="product_price">$250</Card.Text>

              <Button variant="primary" className="cart">
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="card">
          <Card style={{ width: "18rem" }}>
            <Card.Img className="product_img" variant="top" src={f} />
            <Card.Body>
              <Card.Title className="product_title">Bamboo Tooth Brush</Card.Title>
              <Card.Text className="product_text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <Card.Text className="product_price">$220</Card.Text>

              <Button variant="primary" className="cart">
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Product;
