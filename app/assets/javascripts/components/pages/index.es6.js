import React from 'react';

class IndexComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: props.message,
		};
	}

	render() {
    return(
      <div>
        Echo: {this.state.message}
      </div>
    );
  }
}

// module.exports = IndexComponent;

export default IndexComponent;
