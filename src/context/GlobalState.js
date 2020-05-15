import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialState = {
	email: '',
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(AppReducer, initialState);

	function changeEmail(email) {
		dispatch({
			type: 'CHANGE_EMAIL',
			payload: email
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				email: state.email,
				changeEmail,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
