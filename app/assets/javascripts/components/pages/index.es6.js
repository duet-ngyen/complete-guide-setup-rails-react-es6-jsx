import React, {Component, PropTypes} from 'react';
import Message from 'components/pages/message.es6'

class IndexComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: props.message
		};
	}

  click_button(e) {
    console.log(e.target.value);
    this.setState({ message: `button ${e.target.value} clicked` });
  }

	render() {
    return(
      <div>
        Echo: {this.state.message}
        <Message/>
        <input
          type    = "button"
          onClick = { this.click_button.bind(this) }
          value   = "Click me!"
        />
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
