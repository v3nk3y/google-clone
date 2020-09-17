export const initialState = {
  term: null, // What the app looks like on load
};

// To handle the Dispatched actions by the user like "User enters something and hits search on google search bar"
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

// state: state of the DataLyer
// action: action dispatached/performed by the user
// reducer: Listens to any dispatached actions and returns the {state & dispatched action term}
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };
    default:
      return state;
  }
};

export default reducer;
