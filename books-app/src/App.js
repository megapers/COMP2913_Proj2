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

  // componentDidMount(){

  //   axios.get('https://www.googleapis.com/books/v1/volumes?q=harrypotter')
  //   .then(response => {
  //     console.log('Promise resolved', response.data.items);
  //   });

  // }


  render(){

    //*************test passing array to multiple components. Add keys here****************
    // let titles = ['West of Eden', 'Time Machine', 'Hollow Man'];
    // var titleList = titles.map(function(title){
    //     return <Book title = {title}/>;
    // })
    //*************test passing array to multiple components. Add keys here****************

    return (
      <div className="App">
        <header className="App-header">
          
          <EntryForm addRecord = {this.addRecord} defaultValue = {this.state.searchItem}/>
          <Content searchTitle = {this.state.searchItem}/>
        {/* <ul>{titleList}</ul> */}

        </header>
      </div>
    );

  }

  
}

export default App;
