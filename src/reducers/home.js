const initialState = {
    showLogin : true
}

export default home = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LOGGED':
        return {
            ...state,
            showLogin:false
        } 
      default:
        return state
    }
  }