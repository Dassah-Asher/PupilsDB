import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { FiDatabase,FiPhone,FiCalendar} from "react-icons/fi";
import {FaSchool} from "react-icons/fa";
import {AiOutlineUserAdd} from "react-icons/ai"
import { Carousel } from "react-bootstrap";

export default class CreateStudent extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentClass = this.onChangeStudentClass.bind(this);
    this.onChangeStudentDoa = this.onChangeStudentDoa.bind(this);
    this.onChangeStudentDob = this.onChangeStudentDob.bind(this);
    this.onChangeStudentFax = this.onChangeStudentFax.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      class: '',
      doa: '',
      dob: '',
      fax: ''
    }
  }

  onChangeStudentName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeStudentClass(e) {
    this.setState({ class: e.target.value })
  }

  onChangeStudentDoa(e) {
    this.setState({ doa: e.target.value })
  }
  onChangeStudentDob(e) {
    this.setState({ dob: e.target.value })
  }
  onChangeStudentFax(e) {
    this.setState({ fax: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      name: this.state.name,
      class: this.state.class,
      doa: this.state.doa,
      dob: this.state.dob,
      fax: this.state.fax
    };

    axios.post('http://localhost:5000/students/create-student', studentObject)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      class: '',
      doa: '',
      dob: '',
      fax: '',
      completed: false
    });
  }

  render() {
    
    return (<div className="form-wrapper">
       <div>
      <h4>ENTER STUDENT DETAILS HERE!!!</h4>
    </div>
      
            

      <Form onSubmit={this.onSubmit}
      className="form">
        <Form.Group controlId="Name">
          <Form.Label> <AiOutlineUserAdd/>Name</Form.Label>
          <Form.Control type="text" required value={this.state.name} onChange={this.onChangeStudentName} placeholder="Enter name of student" />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label><FaSchool/>Class To Be Enrolled</Form.Label>
          <Form.Control type="class" value={this.state.class} onChange={this.onChangeStudentClass} placeholder="Enter  current class of student"/>
        </Form.Group>

        <Form.Group controlId="Date">
          <Form.Label><FiCalendar/>Date of  Admission</Form.Label>
          <Form.Control type="date" required value={this.state.doa} onChange={this.onChangeStudentDoa} />
        </Form.Group>
        <Form.Group controlId="Date">
          <Form.Label><FiCalendar/>Date of  Birth</Form.Label>
          <Form.Control type="date" value={this.state.dob} onChange={this.onChangeStudentDob} />
        </Form.Group>
        <Form.Group controlId="Contact">
          <Form.Label><FiPhone/>Parent Contact</Form.Label>
          <Form.Control type="contact" required value={this.state.fax} onChange={this.onChangeStudentFax} placeholder="Enter contact of parent" />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
         <FiDatabase/> Add Student
        </Button>
      </Form>
    </div>);
  }
}
