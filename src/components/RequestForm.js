import React from 'react';

// const RequestForm = ({ requestState, onSubmit }) => {
class RequestForm extends React.Component {
  constructor() {
    super();
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { value } = this.state;
    const { onSubmit } = this.props;

    if (value) {
      onSubmit(value);
      this.setState({ value: '' });
    }
  }

  render() {
    const { isLoading, error } = this.props.requestState;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Request info" />
        <span>{isLoading ? 'loading' : ''}</span>
        <p>{error}</p>
      </form>
    )
  }
};

export default RequestForm;
