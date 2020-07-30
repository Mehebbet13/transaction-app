import {images} from "../utils/images";

export const MODULE_NAME = "users";

export const allUsers = (state) => state[MODULE_NAME].users;

const SET_APP_USERS = 'SET_APP_USERS';

const initialState = {
    users: [
        {
            id: Math.random(),
            name: 'Ada',
            surname: 'Lovelace',
            transactionPrice: '$1300.50',
            paymentDetail: '24 May 20',
            type: 'Debt',
            payWith: 'Credit Account',
            avatar: images.female
        },
        {
            id: Math.random(),
            name: 'Mark',
            surname: 'Hopper',
            transactionPrice: '$1680.50',
            paymentDetail: '28 May 20',
            type: 'Debt',
            payWith: 'Credit Account',
            avatar: images.male
        },
 {
            id: Math.random(),
            name: 'Mark',
            surname: 'Hopper',
            transactionPrice: '$1680.50',
            paymentDetail: '28 May 20',
            type: 'Debt',
            payWith: 'Credit Account',
            avatar: images.male
        },
        {
            id: Math.random(),
            name: 'Mark',
            surname: 'Hopper',
            transactionPrice: '$1680.50',
            paymentDetail: '28 May 20',
            type: 'Debt',
            payWith: 'Credit Account',
            avatar: images.male
        },

    ],
};

export function usersReducer(state = initialState, {type, payload}) {
    switch (type) {
        case SET_APP_USERS:
            return {
                ...state,
                users: [...state.users, payload],
            };

        default:
            return state;
    }
}

export const setAppUsers = (payload) => ({
    type: SET_APP_USERS,
    payload,
});


