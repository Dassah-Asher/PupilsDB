import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditStudent extends Component {

  constructor(props) {
    super(props)

    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentClass = this.onChangeStudentClass.bind(this);
    this.onChangeStudentDoa = this.onChangeStudentDoa.bind(this);
    this.onChangeStudentDob = this.onChangeStudentDob.bind(this);
    this.onChangeStudentFax = this.onChangeStudentFax.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      class: '',
      doa: '',
      dob: '',
      fax: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/students/edit-student/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          class: res.data.class,
          doa: res.data.doa,
          dob: res.data.dob,
          fax: res.data.fax
        });
      })
      .catch((error) => {
        console.log(error);
      })
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
      fax: this.state.fax,
    };

    axios.put('http://localhost:5000/students/update-student/' + this.props.match.params.id, studentObject)
      .then((res) => {
        console.log(res.data)
        console.log('Student successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/student-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Class To be Enrolled To</Form.Label>
          <Form.Control type="text" value={this.state.class} onChange={this.onChangeStudentClass} />
        </Form.Group>

        <Form.Group controlId="Date">
          <Form.Label>Date of Admission</Form.Label>
          <Form.Control type="date" value={this.state.doa} onChange={this.onChangeStudentDoa} />
        </Form.Group>
        <Form.Group controlId="Date">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" value={this.state.dob} onChange={this.onChangeStudentDob} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Student
        </Button>
      </Form>
    </div>);
  }
}
