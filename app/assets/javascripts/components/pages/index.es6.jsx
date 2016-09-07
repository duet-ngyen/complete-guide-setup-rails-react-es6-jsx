import React, {Component, PropTypes} from 'react';
import Message from 'components/pages/message.es6.jsx'

class IndexComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: props.message,
            clicked: false,
		};
	}

  click_button(e) {
    console.log(e.target.value);
    this.setState({ message: `button ${e.target.value} clicked` });
    this.setState({ clicked: true})
  }

	render() {
    var message=(<span>{this.state.message} from index</span>);
    var div_clicked;
    if(this.state.clicked){
      div_clicked=(<span>You was clicked</span>)
    }else{
      div_clicked=(
      <input
        type    = "button"
        onClick = { this.click_button.bind(this) }
        value   = "Click me!"
      />)
    }

    return(
      <div>
        <span>{this.state.message}</span>
        <Message message={message}/>
        {div_clicked}
      </div>
    );
  }
}

IndexComponent.propTypes = {
  message: PropTypes.string
};

IndexComponent.defaultProps = {
  message: "Hello Vietnam"
};

export default IndexComponent;
