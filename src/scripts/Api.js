export default class Api {

    constructor({headers}){
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
        
        return fetch(url, {
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

    setNewCard({title,url}, urlCards){
        
        return fetch(urlCards,{
            method: 'POST',
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': this._headers.type
            },
            body: JSON.stringify({
                name: title,
                link: url
            })
            
        })
        .then(res => res.ok? res.json() : Promise.reject(`Error: ${res.status} `) )

    }

    deleteCard(url){
        
        return fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': this._headers.type
            }
        })
       .then(res => res.ok? res.json() : Promise.reject(`Error: ${res.status} `) )

    }

    addLikeCard(url){

        return fetch(url,{
            method: 'PUT',
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': this._headers.type
            }
        })
       .then(res => res.ok? res.json() : Promise.reject(`Error: ${res.status} `) )

    }

    removeLikeCard(url){

        return fetch(url,{
            method: 'DELETE',
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': this._headers.type
            }
        })
       .then(res => res.ok? res.json() : Promise.reject(`Error: ${res.status} `) )

    }

}