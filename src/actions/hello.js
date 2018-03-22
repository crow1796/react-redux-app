import * as Types from '@/actions/types/hello'

const setName = (name) => {
    return {
        type: Types.SET_NAME,
        payload: name
    }
}

export {
    setName
}