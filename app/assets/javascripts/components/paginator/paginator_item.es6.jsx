import React, {Component} from 'react';
import PaginatorLink from 'components/paginator/paginator_link.es6.jsx'

class PaginatorItem extends Component{
    onPaginate(pageNumber){
        this.props.onPaginatorItemClick(pageNumber)
    }

    render(){
        var item;
        if(this.props.current_page == this.props.value){
            item = <span>Page {this.props.value}</span>
        }else{
            item = <PaginatorLink value={this.props.value} onPaginatorLinkClick={this.onPaginate.bind(this)} pageNumber={this.props.value}></PaginatorLink>

        }

        return(
            <li>
                {item}
            </li>
        );
    }
}

export default PaginatorItem;