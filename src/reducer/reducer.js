module.exports = (state={login:null, search:null}, action) => {
    console.log("inside reducer: ", action.type, action.value, state)
    switch(action.type){
        case 'login details':
            return Object.assign({}, state, {login: action.value})
        case 'searched users':
                return Object.assign({}, state, {search: action.value})
        default:
            return state

    }
}