import * as Types from '@/actions/types/hello'

const sayHello = (name) => {
    return {
        type: Types.SAY_HELLO,
        payload: name
    }
}

export {
    sayHello
}