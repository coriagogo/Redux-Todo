import {
    NEW_TODO, 
    TOGGLE_COMPLETE
} from '../actions';

const initialState ={
    todos: [
        { text: 'todo', complete: false, id: 1 }
    ]
}

function todosReducer(state = initialState, action) {
    switch (action.type) {
        case NEW_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { text: action.payload, complete: false }
                ]
            };

        case TOGGLE_COMPLETE:
            return {
                ...state,
                todos: state.todos.map(todo => {
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

// export default (todos = [], action) => {
//     switch(action.type) {
//         case NEW_TODO:
//             return todos.concat(action.payload);
//         case TOGGLE_COMPLETE:
//             todos[action.payload].complete = !todos[action.payload].complete;
//         default:
//         return todos;
//     }
// }


