export const initialState = {
    students: []
}

export function studentReducer(state, action) {
    switch (action.type) {
        case 'ADD_STUDENT':
            return {
                ...state,
                students: [...state.students, action.payload]
            }

        case 'DELETE_STUDENT':
            return {
                ...state,
                students: state.students.filter(student => student.id !== action.payload)
            }

        case 'SET_API_DATA':
            return {
                ...state,
                students: action.payload
            }

        default:
            return state
    }
}