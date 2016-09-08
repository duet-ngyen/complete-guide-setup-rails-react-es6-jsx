import React, {Component} from 'react'

class PaginatorLink extends Component {
    handerOnClick(e){
        e.preventDefault();
        this.props.onPaginatorLinkClick(this.props.pageNumber)
    }

    render(){
        return(

                <a href="#" onClick={this.handerOnClick.bind(this)} >Page {this.props.value}</a>

        );
    }
}

export default PaginatorLink;