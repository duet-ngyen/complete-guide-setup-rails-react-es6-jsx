import React, {Component, ProTypes} from 'react';
import PersonCard from 'components/people/person_card.es6.jsx'

class PeopleSection extends Component{
    constructor(){
        super();
        this.state={
            people: [],
            didFetchData: false
        }
    }

    componentDidMount(){
        $.ajax({
            url: "/people",
            dataType: 'json',
            data: "duet",
            error: function(xhr, status, error) {
                console.log('AJAX Error: ' + status + error);
            },
            success: function(response) {
                // $(div_class_results).html(response);
                this.setState({people: response});
                // console.log(this.state.people);
            }.bind(this)
        });
    }

    render(){
        var cardsNode = this.state.people.map((person)=>{
            return <PersonCard key={person.id} data={person}/>
        });

        return(
            <div>
                {cardsNode}
            </div>
        );
    }
}

export default PeopleSection;