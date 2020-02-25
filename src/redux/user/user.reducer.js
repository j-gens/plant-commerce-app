

const userReducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return Object.assign({}, state, {
        currentUser: action.payload
      })
    default:
      return state
  }
};
