export default (state, action) => {
  switch (action.type) {
    case 'SEARCH_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case 'CLEAR_USER':
      return {
        ...state,
        users: [],
        loading: false,
      };
    case 'ALERT_USER':
      return {
        ...state,
        alert: action.payload,
        loading: false,
      };
    case 'GET_USER_REPOS':
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'REMOVE_ALERT':
      return {
        ...state,
        alert: null,
      };
    default:
      return state;
  }
};
