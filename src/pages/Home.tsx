import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button } from "react-bootstrap";
import "../styles/styles.css";

const Home = () => {
  const [nameHero, setNameHero] = useState<any>();
  const [search, setSearch] = useState<any>();
  const nameStart = search;
  async function updateInput(e) {
    // if (e.key === 'Enter' && canLaunch && e.currentTarget.value != '') {
    if (e.key === "Enter" && e.currentTarget.value != "") {
      setNameHero(e.target.value);
      await resultSearch();
    }
  }
  function resultSearch() {
    window.location.href = `/heroes?name=${nameHero}`;
  }

  console.log(setSearch, "setSearch");
  return (
    <Container
      className="d-flex flex-column justify-content-center text-center align-items-center"
      style={{ width: "100%" }}
    >
      <Form.Label className="home-title">MYSUPERHERO</Form.Label>
      <Form.Group className="d-flex flex-row">
        <Form.Control
          type="text"
          onKeyDown={updateInput}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setNameHero(event.target.value);
          }}
        ></Form.Control>
        <Button
          type="submit"
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            event.preventDefault();
            resultSearch();
          }}
        >
          Pesquisar
        </Button>
      </Form.Group>
    </Container>
  );
};

export default Home;
