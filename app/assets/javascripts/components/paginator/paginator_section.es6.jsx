import React, {Component} from 'react';
import PaginatorItem from 'components/paginator/paginator_item.es6.jsx';

class PaginatorSection extends Component{
    handleOnClick(pageNumber){
        this.props.onPaginate(pageNumber);
    }

    render(){
        var result;
        var items=[];
        var total_pages = this.props.totalPages;

        for(var i=0; i < total_pages; i++){
            items[i] = (<PaginatorItem key={i + 1} value={i + 1} current_page={this.props.currentPage}
                 onPaginatorItemClick={this.handleOnClick.bind(this)} pageNumber={this.props.value}></PaginatorItem>);
        }

        if(this.props.totalPages > 1){
            result = (<ul className="pagination">
                { items }
            </ul>);

        }

        return(
            <div>
                {result}
            </div>
        );
    }
}

export default PaginatorSection;