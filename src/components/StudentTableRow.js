import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class StudentTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
        this.sayHello = this.sayHello.bind(this);
    }

   
  

    deleteStudent() {
        axios.delete('http://localhost:5000/students/delete-student/' + this.props.obj._id)
            .then((res) => {
                console.log('Student successfully deleted!')
            }).catch((error) => {
                console.log(error);

            })
             
            
            
    }

    sayHello() {
        alert('Student has been removed from the Database');
      }

    render() {
        return (
            <tr>
                
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.class}</td>
                <td>{this.props.obj.doa}</td>
                <td>{this.props.obj.dob}</td>
                <td>{this.props.obj.fax}</td>
                <td>
                    <Link className="edit-link" to={"/edit-student/" + this.props.obj._id}>
                        Edit
                    </Link>
                    
                    <Button onClick={()=>{this.deleteStudent(); this.sayHello();  }} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}