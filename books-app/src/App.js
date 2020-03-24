import React from 'react';
import './App.css';
import EntryForm from './EntryForm';
import Content from './Content';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchItem: 'pandemic'
    }
  }

  addRecord = (newItem) =>{
    this.setState({searchItem: newItem});
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <EntryForm addRecord = {this.addRecord} defaultValue = {this.state.searchItem}/>
          <Content searchTitle = {this.state.searchItem}/>
        </header>
      </div>
    );

  }

  
}

export default App;
