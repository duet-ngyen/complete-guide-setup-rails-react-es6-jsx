import React, {Component, ProTypes} from 'react';
import PersonCard from 'components/people/person_card.es6.jsx';
import PeopleSearch from 'components/people/people_search.es6.jsx';
import PaginatorSection from 'components/paginator/paginator_section.es6.jsx';

class PeopleSection extends Component{
    constructor(){
        super();
        this.state={
            people: [],
            didFetchData: false,
            page: 1,
            meta: {
                total_pages: 0,
                current_page: 1,
                total_count: 0,
            }
        }
    }

    componentDidMount(){
        $.ajax({
            url: "/people",
            dataType: 'json',
            data: {meta: this.state.meta, page: this.state.page},
            error: function(xhr, status, error) {
                console.log('AJAX Error: ' + status + error);
            },
            success: function(response) {
                // $(div_class_results).html(response);
                this.setState({people: response["people"]});
                this.setState({meta: response["meta"]});
                this.setState({page: 1});
            }.bind(this)
        });
    }

    handleOnSubmitSearch(search_value){
        $.ajax({
            url: "/people",
            dataType: 'json',
            data: {search: search_value},
            error: function(xhr, status, error) {
                console.log('AJAX Error: ' + status + error);
            },
            success: function(response) {
                // $(div_class_results).html(response);
                this.setState({people: response});
                this.setState({meta: response["meta"]});
            }.bind(this)
        });
    }

    handleOnPaginate(pageNumber){
        $.ajax({
            url: "/people",
            dataType: 'json',
            data: {meta: this.state.meta, page: pageNumber},
            error: function(xhr, status, error) {
                console.log('AJAX Error: ' + status + error);
            },
            success: function(response) {
                // $(div_class_results).html(response);
                this.setState({people: response["people"]});
                this.setState({meta: response["meta"]});
                this.setState({page: pageNumber});
            }.bind(this)
        });
    }

    render(){
        var cardsNode = this.state.people.map((person)=>{
            return <PersonCard key={person.id} data={person}/>
        });

        var noDataNode =
            <div>
                No data
            </div>

        var people_section = [];

        if(this.state.people.length > 0){
            people_section = cardsNode;
        }else{
            people_section = noDataNode;
        }

        return(
            <div>
                <PeopleSearch onFormSubmit={this.handleOnSubmitSearch.bind(this)}/>
                {people_section}
                <div className="clear-both"></div>
                <PaginatorSection totalPages={this.state.meta.total_pages} currentPage={this.state.meta.current_page}
                    onPaginate={this.handleOnPaginate.bind(this)} pageNumber={this.props.value} ></PaginatorSection>
            </div>
        );
    }
}

export default PeopleSection;