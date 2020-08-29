import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const Area = () => {
  return (
    <div className="msg-container">
      <h1>Seu pedido foi o primeiro de sua área</h1>
      <br />
      <h2>Agregaremos seu pedido a outros e entraremos em contato em breve</h2>
      <div className="button-container">
        <Link to={`/`}>
          <Button>Finalizar pedido</Button>
        </Link>
      </div>
    </div>
  );
};

export default Area;
