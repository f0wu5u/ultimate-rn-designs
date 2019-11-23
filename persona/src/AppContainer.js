import AppContainer from './App';
import AsyncStorage from "@react-native-community/async-storage";
import { ActionTypes, actionCreator } from './AppActions';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
    appState: state.appState
});

const mapDispatchToProps = (dispatch, _) => ({

    //Login and Validate API_TOKENS if necessary
    checkLogin: () => {
        AsyncStorage.getItem('token')
            .then(authStateResult => {
                authStateResult != null ? dispatch(actionCreator(ActionTypes.LOGIN)) : null;
            })
            .catch(error => console.debug(error))
            .finally(() => dispatch(actionCreator(ActionTypes.AUTH_CHECKED)));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);