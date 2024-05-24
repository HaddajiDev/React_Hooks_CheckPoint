import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function List_Card(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.name.img_Path} />
      <Card.Body>
        <Card.Title>{props.name.title}</Card.Title>
        <Card.Text>{props.name.desc}</Card.Text>
        <Card.Text>{props.name.rating}</Card.Text>
        <Button variant="primary">Watch Now!</Button>
      </Card.Body>
    </Card>
  )
}

export default List_Card