import {
    NEW_TODO, 
    TOGGLE_COMPLETE, 
    // DELETE_COMPLETE
} from '../actions';

const initialState ={
    todos: [
        
    ]
}

function todosReducer(state = initialState, action) {
    switch (action.type) {
        case NEW_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { text: action.payload, complete: false, id: Date.now() }
                ]
            };

        case TOGGLE_COMPLETE:
        console.log(state.todos);
            return {
                ...state,
                todos: state.todos.map(todo => {
                    console.log(todo);
                    if(todo.id === action.payload) {
                        return {
                            ...todo,
                            complete: !todo.complete
                        };
                    };
                    return todo;
                })
            }

        
        default:
        return state;
    }
}

export default todosReducer;




