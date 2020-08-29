import React from "react";
import GoogleMapReact from "google-map-react";
import { Link } from "react-router-dom";
import { Form, InputGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const Radar = () => {
  const defaultProps = {
    center: {
      lat: -22.9532872,
      lng: -43.1894738,
    },
    zoom: 15.25,
  };

  return (
    <div className="map-container">
      <h1 className="header">Áreas de pedidos</h1>
      <div style={{ height: "400px", width: "100%" }} className="map">
        <GoogleMapReact
          bootstrapURLKeys="AIzaSyBCLHzDvbIr1PNCtc6y23M3spdIz_RAwC8"
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        ></GoogleMapReact>
      </div>
      <div className="form-valor">
        <Form.Group>
          <Form.Label>Valor total dos pedidos da área selecionada</Form.Label>
          <div className="input-valor col-md-6">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                aria-label="Amount (to the nearest dollar)"
                placeHolder="476"
              />
              <InputGroup.Append>
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <Link to="/">
              <Button>Finalizar</Button>
            </Link>
          </div>
        </Form.Group>
      </div>
    </div>
  );
};

export default Radar;
