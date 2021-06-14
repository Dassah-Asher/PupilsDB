import React, { Component } from "react"
import Table from 'react-bootstrap/Table';
import { FiSearch} from "react-icons/fi";

export default class StudentList extends Component {
    state = {
      query: "",
      data: [],
      filteredData: []
    };
  
    handleInputChange = event => {
      const query = event.target.value;
  
      this.setState(prevState => {
        const filteredData = prevState.data.filter(element => {
          return element.name.toLowerCase().includes(query.toLowerCase());
        });
  
        return {
          query,
          filteredData
        };
      });
    };
  
    getData = () => {
      fetch(`http://localhost:5000/students`)
        .then(response => response.json())
        .then(data => {
          const { query } = this.state;
          const filteredData = data.filter(element => {
            return element.name.toLowerCase().includes(query.toLowerCase());
          });
  
          this.setState({
            data,
            filteredData
          });
        });
    };
  
    componentWillMount() {
      this.getData();
    }
  
    render() {
      return (
        <div className="searchForm">
           
              
         <form>
         <FiSearch/> <input
        
              placeholder="Enter student name to search"
              value={this.state.query}
              onChange={this.handleInputChange}

              style={{
                width:"60%",
                borderColor: "blueblack",
                marginBottom: "3%",
                borderRadius: "10px 10px",
                background: "ffff"
              
              }}
            />
          </form>
           <Table striped bordered hover>
             
        <thead>
          <tr>
          <th>Name</th>
            <th>Class To Be Enrolled To</th>
            <th>Date of Admission</th>
            <th>Date of Birth</th>
            <th>Parent Contact</th>
         
          </tr>
        </thead>
        <tbody>
         <tr>
           <td>{this.state.filteredData.map(i => <p>{i.name}</p>)}</td>
           <td>{this.state.filteredData.map(i => <p>{i.class}</p>)}</td>
           <td>{this.state.filteredData.map(i => <p>{i.dob}</p>)}</td>
           <td>{this.state.filteredData.map(i => <p>{i.doa}</p>)}</td>
           <td>{this.state.filteredData.map(i => <p>{i.fax}</p>)}</td>
           
         </tr>
        </tbody>
      </Table>
        </div>
      );
    }
  }
  //{this.state.filteredData.map(i => <p>{i.name}