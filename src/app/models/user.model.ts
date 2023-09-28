class User  {
    name?: string;
    number?: string;
    userName?: string;
    email: string;
    password: string;
    rePassword?: string;
    id?: string | number;
    token?: string;
    isGuest?: boolean;
    userType?: "FaceBook" | "Google" | "Guest" | "Mobile";
    refreshToken?: string;
    isMobileNumberVerified?: boolean
    constructor(obj?: any) {
        obj = obj || {};
        this.name = obj.name || '';
        this.userName = obj.userName || '';
        this.number = obj.number || '';
        this.rePassword = obj.rePassword || '';
        this.password = obj.password || '';
        this.email = obj.email || '';
        this.token = obj.token || '';
        this.id = obj.id || undefined;
        this.isGuest = obj.isGuest || false;
        this.refreshToken = '';
        this.isMobileNumberVerified = obj.isMobileNumberVerified || false;
    }
}

class UserFactory {
    public static createUser(data: any) {
        let type = data.type;
        switch (type) {
            default:
                return new User(data);
        }
    }
 }

export { User, UserFactory }
