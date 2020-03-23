import React from 'react';
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            titles: []
        };
    }

    fetchData =()=> {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.props.searchTitle)
        .then(response => {
            this.setState({titles: response.data.items});
            //console.log(this.state.titles);
        });
    }

    componentDidMount(){
        this.fetchData();
    }

    componentDidUpdate(prevProps){
        if(prevProps.searchTitle !==  this.props.searchTitle){
            this.fetchData();
        }
    }


    showDescription = cell => {
        return cell.description;
    }

    showTitle = cell => {
        return cell.title;
    }

    showImage = cell =>{
        return <img src={cell.imageLinks.thumbnail}/>
    }

    render(){
        let response = this.state.titles;
        console.log(response);
        
        return(
            <div>
            <BootstrapTable  ref='table' data={ response } striped hover>
                <TableHeaderColumn dataField='id' dataSort isKey hidden>Id</TableHeaderColumn>
                <TableHeaderColumn dataField='volumeInfo' dataFormat={this.showTitle} dataSort={ true }>Title</TableHeaderColumn>
                <TableHeaderColumn dataField='volumeInfo' dataFormat={this.showDescription} dataSort={ true }>Description</TableHeaderColumn>
                <TableHeaderColumn dataField='volumeInfo' dataFormat={this.showImage} dataSort={ true }>Image</TableHeaderColumn>
            </BootstrapTable>
        </div>
      );
    }


}


  


export default Content;