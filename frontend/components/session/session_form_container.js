import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login,signup} from '../../actions/session_actions';

const mapStateToProps = (state,ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  formType: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch,ownProps) => ({
  processForm: (user) => {
    return ownProps.formType==='/login' ?
      dispatch(login(user)) :
      dispatch(signup(user));
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);
