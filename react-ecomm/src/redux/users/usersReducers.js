import { SetUser } from "./usersType";

const initialUser = {};

const usersReducers = (user = initialUser, action) => {
	switch (action.type) {
		case SetUser:
			return action.payload;
		default:
			return user;
	}
};

export default usersReducers;
