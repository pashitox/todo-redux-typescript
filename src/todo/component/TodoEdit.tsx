import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { showEditActions } from "../redux/EditSlicer";
import { todosActions } from "../redux/todoSlicer";
//import { Component, CSSProperties } from 'react';
import { Button,Modal, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";



const EditTodo: React.FC = (props) => {
  const dispatch = useAppDispatch();

   

 const todoToEdit = useAppSelector((state) => state.showEdit.value);
 const [titleToEdit, setTitleToEdit] = useState<string>(todoToEdit.titleTodo);
const confirmHandler = () => {
   dispatch(
     todosActions.edit({ id: todoToEdit.idTodo, text: titleToEdit })
   );
   dispatch(showEditActions.setCloseEdit());
 };

 const cancelHandler = () => {
  dispatch(showEditActions.setCloseEdit());
 };

  return (
    <>
  

      <Modal show={todoToEdit.isShow} onHide={cancelHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3}
               value={titleToEdit}
               onChange={(event) => setTitleToEdit(event.target.value)}
               type="text" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelHandler}>
            Close
          </Button>
          <Button variant="primary" onClick={confirmHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTodo;

    //<Button variant="primary" onClick={handleShow}>
      //  Launch demo modal
      //</Button>