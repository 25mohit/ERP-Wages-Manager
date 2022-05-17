import { createStore } from "redux";

const intialState = {
    users: [],
    loggedInUser: null,
    userProfile: '',
    wages:[]
}
const reducer = (state = intialState, action) => {
    switch(action.type){
        case "REGISTRATION" :
            return{
                ...state,
                users:[...state.users, action.payload]
            }
        case "LOGIN_USER":
            return{
                ...state,
                loggedInUser: action.payload
            }
        case "ADD_PROFILE":
            return{
                ...state,
                userProfile:action.payload
            }
        case "ADD_WAGES":
            return{
                ...state,
                wages:[...state.wages, action.payload]
            }
        case "DELETE_WAGES":
            return{
                ...state,
                wages: state.wages.filter(wage => wage.id!== action.payload)
            }
        case "LOGOUT_USER":
            return{
                ...state,
                loggedInUser: null
            }
            default :
            return state;
    }
}
export default createStore( reducer )