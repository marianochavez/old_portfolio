import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola, soy <span className="purple">Mariano Chavez </span>
            de <span className="purple"> Mendoza, Argentina.</span>
            <br />
            Soy estudiante de Ingeniería en Sistemas de Información en
            la Universidad Tecnologica Nacional (UTN-FRM).
            <br />
            <br />
            Aparte de codear, realizo otras actividades como:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Tocar la batería
            </li>
            <li className="about-activity">
              <ImPointRight /> Leer libros sobre tecnología
            </li>
            <li className="about-activity">
              <ImPointRight /> Ir a la montaña
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
