import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import { JWT_SECRET } from '../config/keys';
import AppReducer from './AppReducer';

const initialState = {
    crowdsourceInfo: [],
    message: null,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // GET /api/crowdsourcing
    const getCrowdsourcedInfo = async () => {
        const config = {
            headers: {
                'Authorization': `Bearer ${JWT_SECRET}`
            },
        };
        try {
            const res = await axios.get('/api/crowdsourcing/', config);
            dispatch({
                type: 'GET_CROWDSOURCEINFO',
                payload: res.data.data,
            });
        } catch (error) {
            dispatch({
                type: 'ERROR_CROWDSOURCEINFO',
                payload: error.message
            });
        }
    }

    //POST /api/crowdsourcing
    async function submitCrowdsourceInfo(crowdsourceInfo) {
        initialState.message = ''
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${JWT_SECRET}`
            },
        };
        try {
            const res = await axios.post(
                '/api/crowdsourcing',
                crowdsourceInfo,
                config
            );
            dispatch({
                type: 'SUBMIT_CROWDSOURCEINFO',
                payload: res.data.crowdsourceInfo,
            });
        } catch (error) {
            dispatch({
                type: 'ERROR_CROWDSOURCEINFO',
                payload: error.response.data.error,
            });
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                crowdsourceInfo: state.crowdsourceInfo,
                message: state.message,
                getCrowdsourcedInfo,
                submitCrowdsourceInfo,
            }}>
            {children}
        </GlobalContext.Provider>
    );
};
