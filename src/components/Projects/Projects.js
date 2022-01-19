import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import jaguarete from "../../Assets/Projects/jaguarete.png";
import progrademia from "../../Assets/Projects/progrademia.png";
import vaieretti from "../../Assets/Projects/vaieretti.png";
import newsArg from "../../Assets/Projects/news_arg.png";
import openfaas from "../../Assets/Projects/openfaas.png";




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Proyectos </strong> recientes
        </h1>
        <p style={{ color: "white" }}>
          Aquí hay algunos de mis ultimos proyectos.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jaguarete}
              isBlog={false}
              title="Jaguarete"
              description="E-commerce de tecnología creado
              para un curso Fullstack de Django, algunas de sus
              funcionalidades son la gestión de productos como
              tambien de categorias para administradores del sitio, 
              login y registro de usuarios con
              recuperacion de contraseña, filtros de busqueda y
               carrito de compras."
              link="https://jaguaretekaaecommerce.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={progrademia}
              isBlog={false}
              title="Progrademia"
              description="Plataforma de educación creada para
              curso de Fullstack Java, con Spring Boot y Spring Security,
              algunas de sus funcionalidades son las de gestión de cursos
              y alumnos/usuarios, login y registro de usuarios."
              link="https://spring-boot-codo.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vaieretti}
              isBlog={false}
              title="IMV"
              description="Pagina web creada para empresa de 
              metalurgia, con filtro para productos, entre otras
              funcionalidades, rediseño de página completa con
              responsive."
              link="http://imv.x10.mx/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsArg}
              isBlog={false}
              title="Noticias Argentina"
              description="Pagina web creada con Node.js, Express,
              EJS y Docker, para consumo de 4 APIs 
              (Clima, cotizaciones de monedas, COVID-19 y noticias sobre Argentina)"
              link="https://github.com/marianochavez/docker_argentina_news_node"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={openfaas}
              isBlog={false}
              title="OpenFaaS"
              description="Aplicación creada con el objetivo de escribir 
              y hacer deployment de una función en openfaas que reciba un 
              objeto en formato JSON desde minio y lo guarde en una 
              colección en mongodb."
              link="https://github.com/marianochavez/openfaas_minio_k8s"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
