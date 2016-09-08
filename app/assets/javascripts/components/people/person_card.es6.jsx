import React, {Component} from 'react'

class PersonCard extends Component{
    constructor(props){
        super(props);
        // this.state=({
        //     person: props.person
        // });
    }

    render(){
        return(
            <div>
                {this.props.data.first_name}
            </div>
        );
    }
}

export default PersonCard;