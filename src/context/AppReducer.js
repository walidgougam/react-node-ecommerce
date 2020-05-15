export default (state, action) => {
	switch (action.type) {
		case 'CHANGE_EMAIL':
			return {
				...state,
				email: action.payload
			};

		default:
			return state;
	}
};
