import * as actionTypes from "../actions/actionTypes";

const initialState = {
    showLogin : false
}

export const home = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SET_LOGIN:
        return {
            ...state,
            showLogin:false
        }
      case actionTypes.LOAD_LOGIN :
      console.log("load login called: ", state);
        return {
          ...state,
          showLogin : true
        }
      default:
      //console.log("defaultee");
        return state
    }
  }