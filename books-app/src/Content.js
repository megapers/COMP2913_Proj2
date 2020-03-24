import React from 'react';
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import PulseLoader from "react-spinners/PulseLoader";

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            titles: [],
            loading: true
        };
    }

    fetchData =()=> {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.props.searchTitle)
        .then(response => {
            this.setState({titles: response.data.items, loading: false});
            
        })
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

    showCategories = cell => {
        if(cell.categories){
            const data = cell.categories;
            const categories = data.map((categoryName, index) =>
                <li key = {index}>
                    {categoryName}
                </li>
            );
            return <ul>{categories}</ul>;
        }
    }

    showImage = cell =>{
        if(cell.imageLinks){
            return <img src={cell.imageLinks.thumbnail}/>
        }
    }

    onRowClick = id => {
        if(id.volumeInfo.infoLink){
            window.open(id.volumeInfo.infoLink);
        }
    }
    
    render(){
        const response = this.state.titles;
        const options = {
            onRowClick: this.onRowClick
          };

          let table;

          if(response){
            table = 
            <div>
                <BootstrapTable  ref='table' data={ response } options={options } striped hover>
                    <TableHeaderColumn dataField='id' dataSort isKey hidden>Id</TableHeaderColumn>
                    <TableHeaderColumn dataField='volumeInfo' dataFormat={this.showTitle} dataSort>Title</TableHeaderColumn>
                    <TableHeaderColumn dataField='volumeInfo' dataFormat={this.showDescription} dataSort>Description</TableHeaderColumn>
                    <TableHeaderColumn dataField='volumeInfo' dataFormat={this.showCategories} dataSort>Categories</TableHeaderColumn>
                    <TableHeaderColumn dataField='volumeInfo' dataFormat={this.showImage} dataSort>Image</TableHeaderColumn>
                </BootstrapTable>
                <PulseLoader color={"blue"} loading={this.state.loading}/>
            </div> 
          }
          else if(this.state.loading){
            table = <PulseLoader color={"blue"} loading={this.state.loading}/>;
          }
          else{
            table = <h1>No books found for {this.props.searchTitle}</h1>;
          }
        return table;
    }
}

export default Content;