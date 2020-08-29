import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Landing = () => {
  return (
    <div className="form-login">
      <div className="title-container">
        <h1 className="title">Cadastro da Distribuidora</h1>
      </div>
      <div className="form-container">
        <Form className="form">
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control type="nome" placeholder="Digite seu nome" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control type="email" placeholder="Digite seu email" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" className="cel">
              <Form.Control
                type="cel"
                placeholder="Digite seu número de celular"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" className="endereco">
              <Form.Control type="endereco" placeholder="Digite seu endereço" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control
                type="nome-dist"
                placeholder="Digite o nome da sua distribuidora"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control
                type="cpf-cnpj"
                placeholder="Digite seu cpf ou cnpj"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control type="senha" placeholder="Digite sua senha" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control
                type="conf-senha"
                placeholder="Confirme sua senha"
              />
            </Form.Group>
          </Form.Row>
        </Form>
        <div className="button-container">
          <Link to="/produtos">
            <Button variant="primary">Cadastrar</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Landing;
