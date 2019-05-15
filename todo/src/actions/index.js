export const NEW_TODO = 'NEW_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
// export const DELETE_COMPLETE = 'DELETE_COMPLETE';

export const addTodo = todo => {
    return {
        type: NEW_TODO,
        payload: todo
    };
};

export const toggleComplete = id => {
    return {
        type: TOGGLE_COMPLETE,
        payload: id
    };
};

// export const deleteComplete = id => {
//     return {
//         type: DELETE_COMPLETE,
//         payload: id
//     };
// };