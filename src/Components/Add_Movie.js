import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Movies, { Add_Movie_ } from './Movie';


function Add_Movie({ setMovie }) {    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [rating, setRating] = useState('');

    

    const handleSubmit = () => {          
        Add_Movie_(title, description, imgUrl, rating, setMovie);
        handleClose(); 
    };

    
  return (
    <div className='container add-movie'><Button variant="primary" onClick={handleShow}>
    Add Movie
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Add Movie</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a Title"
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            required
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Descrption</Form.Label>
          <Form.Control 
            type="text"
            placeholder="Enter a Descrption"
            onChange={(e) => setDescription(e.target.value)}
            autoFocus
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Img URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a URL"
            onChange={(e) => setImgUrl(e.target.value)}
            autoFocus
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a Rating"
            onChange={(e) => setRating(e.target.value)}
            autoFocus
            required
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleSubmit}>
        Add Movie
      </Button>
    </Modal.Footer>
  </Modal></div>
  );
}

export default Add_Movie