import { connect } from 'react-redux';
import AsyncStorage from "@react-native-community/async-storage";
import { actionCreator, ActionTypes } from '../../AppActions';
import { Alert } from "react-native";
import Dashboard from '.';
import { DashboardActionTypes } from './actions';

const mapStateToProps = (state) => ({
    dashboardState: state.dashboardState,
    appState: state.appState
})

const mapDispatchToProps = (dispatch, _) => ({
    doLogout() {

        Alert.alert(
            'Confirm Action',
            'You are about to logout from this device, continue with action?',
            [


                {
                    text: 'Logout', onPress: () =>
                        AsyncStorage.removeItem('token')
                            .then(() => dispatch(actionCreator(ActionTypes.LOGOUT)))

                },
            ],
            { cancelable: true },
        );


    },
    async loadData() {
        const response = await fetch('https://ctosdata.com/persona/persona.json');

        if (response.ok && response.status == 200) {
            const responseJSON = await response.json();
            dispatch(actionCreator(DashboardActionTypes.DATA_LOADED, responseJSON))
        } else {
            dispatch(actionCreator(DashboardActionTypes.DATA_LOAD_FAILED))
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
