export default class Popup {

    constructor(containerSelector){
        this._container = containerSelector;
    }

    open(){

    }

    close(){

    }

    _handleEscClose(){
        
    }

    setEventListeners(){
        document.querySelector('.popup').addEventListener('click', (evt) => {
            if(evt.target.classList.contains('button_action_close')){
                
            }
        })
    }

}