import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BsAwardFill } from "react-icons/bs";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              className="bg-primary"
            >
              <BsAwardFill />
              Activities
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ListGroup variant="flush" className="text-dark">
                  {activities.map((a: any) => {
                    return (
                      <ListGroup.Item key={a.id}>{a.title}</ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </header>
    </div>
  );
}

export default App;
