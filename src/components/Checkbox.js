import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isChecked: false }
  }

  handleClick = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked
    }))
  }

  render() {
    return (
      <input
        type="checkbox"
        checked={this.state.isChecked ? true : false}
        onClick={this.handleClick}
      />
    )
  }
}

export default Checkbox