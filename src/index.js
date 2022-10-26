import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import index from './index.css';
import 'bootstrap/dist/css/bootstrap.css';

// test 

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
    	username: '',
    	age: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    

  	var key = event.target.name;
  	var val = event.target.value; 

  	this.setState({[key] : val});  
  }
  
  handleSubmit(event) {
    alert('Nama : '+this.state.username+' Umur : '+this.state.age+' Tahun');  
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}> 

      	<label>
      		Name:<input type="text" className="form-control" name="username"  value={this.state.username} onChange={this.handleChange} />        
      	</label>

      	<label>
      		umur:<input type="text" className="form-control" name="age" value={this.state.age} onChange={this.handleChange} />        
      	</label>
      	<input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
   		<App />
   	</React.StrictMode>
);

