export default class UserInfo {
    
    constructor({user,description}){
        this._selectUser = document.querySelector(user);
        this._selectWork = document.querySelector(description);
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