class UserInfo {
    
    constructor({selectUser,selectWork}){
        this._selectUser = document.querySelector(selectUser);
        this._selectWork = document.querySelector(selectWork);
    }

    getUserInfo(){
        return {
            user: this._selectUser.textContent,
            work: this._selectWork.textContent
        }
    }

    setUserInfo(user,work){
        this._selectUser.textContent = user;
        this._selectWork.textContent = work;
    }

}