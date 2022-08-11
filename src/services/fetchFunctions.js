import { getUser } from "../redux/reducers/userReducer"
import { setMessage } from "../redux/reducers/messageReducer"
import { logOut } from "../redux/reducers/userReducer"
import { getChargers } from "../redux/reducers/chargerReducer"

export const loadUser = async (id, token, dispatch) => {
    dispatch(getUser({ id, token }))
        .unwrap()
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
            if (error === 'TokenExpiredError')
                dispatch(setMessage({
                    message: 'Sesión caducada',
                    type: 'info'
                }))
            dispatch(logOut())
        })
}

export const loadChargers = async (token, dispatch) => {
    dispatch(getChargers({token}))
    .unwrap()
    .then(res=>{
        console.log(res)
    })
    .catch(error=>{
        console.log(error)
        dispatch(setMessage({
            message: error,
            type: 'info'
        }))

    })
}