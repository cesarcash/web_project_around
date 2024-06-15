export default class Api {

    constructor({baseUrl,headers}){

        this._headers = headers;
        
    }
    
    getInitialCards(urlCards){

        return fetch(urlCards,{
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': this._headers.type
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status} `) )

    }

    getInfoUser(urlUser){

        return fetch(urlUser, {
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': this._headers.type
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status} `) )        

    }

    editInfoUser({nameProfile,aboutMe},url){
        
        fetch(url, {
            method: 'PATCH',
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': this._headers.type
            },
            body: JSON.stringify({
                name: nameProfile,
                about: aboutMe
            })
        })
        .then(res => res.ok? res.json() : Promise.reject(`Error: ${res.status} `) )

    }

}