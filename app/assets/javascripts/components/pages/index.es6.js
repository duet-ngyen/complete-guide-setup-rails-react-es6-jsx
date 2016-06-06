import React from 'react';

class IndexComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: props.message,
		};
	}

	render() {
		return <h2>Echo: {this.state.message}</h2>;
	}
}

// module.exports = IndexComponent;

export default IndexComponent;
