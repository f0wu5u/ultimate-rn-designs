import { connect } from 'react-redux';
import AsyncStorage from "@react-native-community/async-storage";
import { actionCreator, ActionTypes } from '../../AppActions';
import Login from '.';
import { DashboardActionTypes } from '../dashboard/actions';

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch, _) => ({
    async doLogin(credentials, onError) {

        try {
            const authResponse = await fetch(`https://ctosdata.com/persona/login?username=${credentials.username}&password=${credentials.password}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const responseJSON = await authResponse.json();
            if (authResponse.ok && authResponse.status == 200) {

                AsyncStorage.setItem('token', responseJSON.token)
                    .then(() => dispatch(actionCreator(DashboardActionTypes.LOAD_DATA)))
                    .catch(error => console.debug(error))
                    .finally(_ => dispatch(actionCreator(ActionTypes.LOGIN)));
            }

            else {
                throw (authResponse.status);
            }
        } catch (error) {
            onError(error)
        }


    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
