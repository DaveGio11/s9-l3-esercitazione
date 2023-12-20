import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card className="book-cover d-flex flex-column">
        <Card.Img
          variant="top"
          src={this.props.img}
          onClick={(event) => {
            SingleBook.setState(
              selected
                ? event.target.className.add("border border-danger")
                : event.target.className.add("border border-0")
            );
          }}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
