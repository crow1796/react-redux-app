import { SAY_HELLO } from '@/actions/types/hello'
const initialState = {}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SAY_HELLO:
            console.log(`Hello, ${action.payload}`)
            return state
        default:
            return state
    }
}

export default reducer