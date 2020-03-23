import React from 'react';

class Book extends React.Component{
constructor(props){
    super(props);
    this.state = {
    }
}
    render(){
        return this.props.title;
    }

}

export default Book;