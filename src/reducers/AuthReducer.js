import { EMAIL_CHANGED } from '../actions/types';
import { ACTION_MANAGE_ALL_APPLICATIONS_SETTINGS } from 'expo/build/IntentLauncherAndroid/IntentLauncherAndroid';
const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload};

        default:
            return state;
    }
};