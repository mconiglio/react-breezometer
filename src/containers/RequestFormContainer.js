import { connect } from 'react-redux';
import RequestForm from '../components/RequestForm';
import { fetchResults } from '../actions'

const mapStateToProps = state => {
  return {
    requestState: state.requestState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: location => {
      dispatch(fetchResults(location));
    }
  };
};

const RequestFormContainer = connect(mapStateToProps, mapDispatchToProps)(RequestForm);

export default RequestFormContainer;
