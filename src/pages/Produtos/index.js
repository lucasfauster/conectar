import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Table, Button, InputGroup } from "react-bootstrap";
import "./styles.css";

const Produtos = () => {
  const prod = { nome: "", umkg: 0, seiskg: 0 };
  const [prods, setProds] = useState([prod]);

  const addProd = () => {
    setProds([...prods, prod]);
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>1-5kg</th>
            <th>6kg +</th>
          </tr>
        </thead>

        <tbody>
          {prods.map((p) => {
            return (
              <tr>
                <td>
                  <Form.Control placeHolder={p.nome} />
                </td>
                <td>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control placeHolder={p.umkg} />
                    <InputGroup.Append>
                      <InputGroup.Text>.00/kg</InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </td>
                <td>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control placeHolder={p.seiskg} />
                    <InputGroup.Append>
                      <InputGroup.Text>.00/kg</InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </td>
              </tr>
            );
          })}
          <tr>
            <td className="btn-add">
              <Button onClick={addProd}>Adicionar produto</Button>
            </td>
            <td className="btn-finaliza">
              <Link to={"/radar"}>
                <Button>Finalizar</Button>
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Produtos;
