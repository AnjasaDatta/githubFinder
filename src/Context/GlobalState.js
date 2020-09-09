import React, { useReducer } from 'react';
import { createContext } from 'react';
import AppReducer from './AppReducer';

//initialState
const initialState = {
  users: [],
  user: {},
  alert: null,
  repos: [],
  loading: false,
};

//createContext
export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  const searchUser = text => {
    setLoading();
    var URL = 'https://api.github.com/search/users';
    var finalURL = `${URL}?q=${text}&client_id=${process.env.REACT_GITHUB_CLIENTID}&client_secret=${process.env.REACT_GITHUB_CLIENTSECRET}`;
    fetch(finalURL)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'SEARCH_USERS',
          payload: data.items,
        });
      })
      .catch(err => console.log(err));
  };

  const clearUser = () => {
    dispatch({
      type: 'CLEAR_USER',
      payload: [],
    });
  };
  const getUser = userName => {
    let URL = `https://api.github.com/users/${userName}`;
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'GET_USER',
          payload: data,
        });
      })
      .catch(err => console.log(err));
  };
  const getUserRepos = userName => {
    let URL = `https://api.github.com/users/${userName}/repos?per_page=5`;
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'GET_USER_REPOS',
          payload: data,
        });
      })
      .catch(err => console.log(err));
  };
  const alertSearch = msg => {
    //  setTimeout(() => initialState.alert, 3000);
    dispatch({
      type: 'ALERT_USER',
      payload: msg,
    });
    setTimeout(
      () =>
        dispatch({
          type: 'REMOVE_ALERT',
          payload: '',
        }),
      3000
    );
  };
  const setLoading = () => dispatch({ type: 'SET_LOADING' });
  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        alert: state.alert,
        loading: state.loading,
        searchUser,
        alertSearch,
        getUserRepos,
        getUser,
        clearUser,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
