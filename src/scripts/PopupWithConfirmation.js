import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {

    constructor(selectorPopup){
        super(selectorPopup)
    }

    open(){

        super.open();

    }

    setEventListeners(){

        super.setEventListeners();

        this._popup.addEventListener('click', e => {
            
            if(e.target.value){
                console.log('borra')
            }
            
        })

    }

}