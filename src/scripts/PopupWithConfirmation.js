import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {

    constructor(callbackForm,selectorPopup){
        super(selectorPopup)
        this._callbackForm = callbackForm;
    }

    open(id){

        super.open();
        this._idCard = id;
        
    }
    
    setEventListeners(){
        
        super.setEventListeners();
        
        this._popup.addEventListener('click', evt => {
            
            if(evt.target.value){
                this._callbackForm(this._idCard,evt)
                super.close()
            }
            
        })

    }

}