import React from 'react';

const RequestForm = ({ requestState, onSubmit }) => {
  let input;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (input.value) {
          onSubmit(input.value);
          input.value = '';
        }
      }}
    >
      <input ref={node => { input = node }} />
      <button type="submit">Request info</button>
      <span>{requestState.isLoading ? 'loading' : ''}</span>
      <p>{requestState.error}</p>
    </form>
  )
};

export default RequestForm;
