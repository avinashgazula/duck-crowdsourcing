/* eslint-disable import/no-anonymous-default-export */
import * as Constants from '../config/constants';

export default (state, action) => {
    switch (action.type) {
        case 'SUBMIT_CROWDSOURCEINFO':
            return {
                ...state,
                crowdsourceInfo: [...state.crowdsourceInfo, action.payload],
                message: Constants.SUBMIT_SUCESS
            };
        case 'GET_CROWDSOURCEINFO':
            return {
                ...state,
                crowdsourceInfo: action.payload,
            };
        case 'ERROR_CROWDSOURCEINFO':
            return {
                ...state,
                error: action.payload,
                message: Constants.SERVER_ERROR
            };
        default:
            return state;
    }
};
