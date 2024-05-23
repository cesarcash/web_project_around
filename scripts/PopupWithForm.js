import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

    constructor(callbackForm, selectorPopup) {
        super(selectorPopup);
        this._callbackForm = callbackForm;
    }

    _getInputValues(){

        const inputForm = this._popup.querySelectorAll('.form__input')
        const data = {};

        for(const inputText of inputForm){
            data[inputText.name] = inputText.value;
        }

        return data;
        
    }

    close(){
        super.close();
        // document.querySelector(this._selectForm).reset();
    }

    setEventListeners(){
        
        super.setEventListeners();
        this._popup.addEventListener('submit', () => {
            this._close();
        })
        
    }

}