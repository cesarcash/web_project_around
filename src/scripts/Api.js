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
        // .then(data => {
        //     console.log("🚀 ~ Api ~ getInfoUser ~ data:", data)
        // })

    }

}