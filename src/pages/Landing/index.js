import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const Landing = () => {
  return (
    <div className="form-selecao">
      <div className="title-container">
        <h1 className="title">Selecione o APP</h1>
      </div>
      <Link to="/cadastroloja" className="btn1">
        <Button variant="primary">Loja</Button>
      </Link>
      <Link to="/cadastrodist" className="btn2">
        <Button variant="primary">Distribuidora</Button>
      </Link>
    </div>
  );
};
export default Landing;
