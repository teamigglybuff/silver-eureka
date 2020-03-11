import * as types from '../constants/action-types';

export const login = (username, userID) => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({userID, username}),
    };

    return (dispatch) => {
        fetch('/login', config)
        .then((res) => res.json())
        .then((data) => {
          dispatch({
           type: types.LOGIN,
           payload: {
           username,
           userID
          }
         })   
        })
    };
};


export const register = (username, userID) => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({userID, username}),
    };

    return (dispatch) => {
        fetch('/register', config)
        .then((res) => res.json())
        .then((data) => {
          dispatch({
           type: types.REGISTER,
           payload: {
           username,
           userID
          }
         })   
        })
    };
};

export const logout = () => ({
      type: types.LOGOUT,
})


