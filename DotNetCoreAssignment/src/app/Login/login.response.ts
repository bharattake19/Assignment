export class LoginResponse {
    isLoginSuccess: boolean;
    token: string;
    message?: string;
    userRole: string;
    isFirstTimeLogin: boolean;
    user?: CurretUser;
}

export class CurretUser {
    userID: number;
    fullName: string;
    currentRole: string;
}
