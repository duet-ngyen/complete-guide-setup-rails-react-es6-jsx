import React, {Component} from 'react'

class PeopleSearch extends Component {
    submitSearch(e){
        e.preventDefault();
        var searchValue = $("#search-user").val();
        this.props.onFormSubmit(searchValue);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitSearch.bind(this)}>
                    <input placeholder="Search user by firstname for demo..." type="text" id="search-user"/>
                </form>
            </div>
        );
    }
}

export default PeopleSearch;