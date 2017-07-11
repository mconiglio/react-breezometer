import { connect } from 'react-redux';
import ResultList from '../components/ResultList';

const mapStateToProps = ({ results }) => ({ results });

const ResultListContainer = connect(mapStateToProps)(ResultList);

export default ResultListContainer;
