import React, { useState, ChangeEvent, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { showEditActions } from "../redux/EditSlicer";
import { todosActions } from "../redux/todoSlicer";
//import { Component, CSSProperties } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Show } from "@chakra-ui/react";



const EditTodo: React.FC = (props) => {
  const dispatch = useAppDispatch();

 const todoToEdit = useAppSelector((state) => state.showEdit.value);

 console.log("modal", todoToEdit)

        
   

 
 const [titleToEdit, setTitleToEdit] = useState<string>(todoToEdit.titleTodo);
 const [timeToEdit, settimeToEdit] = useState<string>(todoToEdit.timeTodo);
 

const confirmHandler = () => {
  
  
  dispatch(
     todosActions.edit({ id: todoToEdit.idTodo, text: titleToEdit, time:timeToEdit, completed: true  })     
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
          <Modal.Title>Modal Update  🦉</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Time:</Form.Label>
                 <input               
                placeholder="Date"
                autoFocus
                value={timeToEdit}
                onChange={(event) => settimeToEdit(event.target.value)}
                type="date"
                
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>into your text:</Form.Label>
              <Form.Control as="textarea" rows={3} 
               value={titleToEdit}
               onChange={(event) => setTitleToEdit(event.target.value)}
               type="text"       />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={cancelHandler}>
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