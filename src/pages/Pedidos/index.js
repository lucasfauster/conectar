import React from "react";
import { Link } from "react-router-dom";
import { InputGroup, Form, Card, Button } from "react-bootstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Pedidos = () => {
  const produtos = [
    {
      imagem: "https://feiralivre.com/assets/uploads/produtos/comu-132eec.jpg",
      nome: "alface",
      desc: "bem gostoso",
      classe: "card1",
    },
    {
      imagem:
        "https://cdn.diariodolitoral.com.br/upload/dn_noticia/2016/06/beterraba-copy.png",
      nome: "beterraba",
      desc: "bem crocante",
      classe: "card2",
    },
    {
      imagem:
        "data:image/jpeg;base64,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",
      nome: "gengibre",
      desc: "bem forte",
      classe: "card3",
    },
    {
      imagem:
        "https://onconutri.com.br/wp-content/uploads/2019/11/papaya-3-Exotic-800x400.jpg",
      nome: "mamão",
      desc: "delicioso",
      classe: "card1",
    },
    {
      imagem:
        "https://static.clubeextra.com.br/img/uploads/1/865/637865.png?imtype=imgProductDetail&size=sm",
      nome: "abóbora",
      desc: "bem macia",
      classe: "card2",
    },
    {
      imagem:
        "https://lh4.googleusercontent.com/SSd23aQw-5L28S6xITw16pmcQoJTVK3HfNiYiZAEblDvm_dJY-gFSpZZFKnQdYfCwLdqco7QSFWK4UpUlh6V6ImnWCnsrzDPYe2w1rkxjBI3BYAcrzdQbf56zqYdu6_lxTiXFYnA",
      nome: "bertalha",
      desc: "bem saborosa",
      classe: "card3",
    },
  ];

  return (
    <div className="pedidos-container">
      <div className="pesquisa">
        <InputGroup>
          <InputGroup.Prepend>
            <Button variant="secondary">Pesquise</Button>
          </InputGroup.Prepend>
          <Form.Control type="texto" />
        </InputGroup>
      </div>
      <div className="botão">
        <Link to="/area">
          <Button variant="primary">Pedir</Button>
        </Link>
      </div>
      <div className="card1">
        {produtos.map((prod) => {
          if (prod.classe === "card1") {
            return (
              <Card style={{ alignItems: "center" }} key={prod.nome}>
                <Card.Img
                  variant="top"
                  style={{ width: "200px", height: "200px" }}
                  src={prod.imagem}
                />
                <Card.Body>
                  <Card.Title>{prod.nome}</Card.Title>
                  <Card.Text>{prod.desc}</Card.Text>
                  <Form.Label>Peso(Kg)</Form.Label>
                  <Form.Control
                    type="number"
                    style={{ width: "60px" }}
                  ></Form.Control>
                </Card.Body>
              </Card>
            );
          }
          return <div key={prod.nome}></div>;
        })}
      </div>
      <div className="card2">
        {produtos.map((prod) => {
          if (prod.classe === "card2") {
            return (
              <Card style={{ alignItems: "center" }} key={prod.nome}>
                <Card.Img
                  variant="top"
                  style={{ width: "200px", height: "200px" }}
                  src={prod.imagem}
                />
                <Card.Body>
                  <Card.Title>{prod.nome}</Card.Title>
                  <Card.Text>{prod.desc}</Card.Text>
                  <Form.Label>Peso(kg)</Form.Label>
                  <Form.Control
                    type="number"
                    style={{ width: "60px" }}
                  ></Form.Control>
                </Card.Body>
              </Card>
            );
          }
          return <div key={prod.nome}></div>;
        })}
      </div>
      <div className="card3">
        {produtos.map((prod) => {
          if (prod.classe === "card3") {
            return (
              <Card style={{ alignItems: "center" }} key={prod.nome}>
                <Card.Img
                  variant="top"
                  style={{ width: "200px", height: "200px" }}
                  src={prod.imagem}
                />
                <Card.Body>
                  <Card.Title>{prod.nome}</Card.Title>
                  <Card.Text>{prod.desc}</Card.Text>
                  <Form.Label>Peso(kg)</Form.Label>
                  <Form.Control
                    type="number"
                    style={{ width: "60px" }}
                  ></Form.Control>
                </Card.Body>
              </Card>
            );
          }
          return <div key={prod.nome}></div>;
        })}
      </div>
    </div>
  );
};

export default Pedidos;
