import React from 'react';
import logo from './logo.svg';
import './App.css';
import EntryForm from './EntryForm';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchItem: ''
    }
  }

  addRecord = (newItem) =>{
    this.setState({searchItem: newItem});
  }

  render(){
  console.log(this.state.searchItem);
    return (
      <div className="App">
        <header className="App-header">
          <EntryForm addRecord = {this.addRecord}/>
        </header>
      </div>
    );

  }

  
}

export default App;
