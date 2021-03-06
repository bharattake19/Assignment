import { User } from '../user.model';
import * as AuthActions from './auth.action';

export interface State {
    user: User
}

const initialState: State = {
    user: null
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
    switch (action.type) {
        case AuthActions.LOGIN:
        case AuthActions.LOGOUT:
        default:
            return state;
    }
}