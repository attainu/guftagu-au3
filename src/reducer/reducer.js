module.exports = (state={search:"not searched", selectedChat:null}, action) => {
    console.log("inside reducer: ", action.type, action.value)
    switch(action.type){
        // case 'login details':
        //     return Object.assign({}, state, {login: action.value})
        case 'searched users':
                return Object.assign({}, state, {search: action.value})
        case "get-chat-content-for-selected-chat":
                return Object.assign({}, state, {selectedChat: action.value})
        default:
            return state

    }
}