import Popup from "./Popup.js";

class PopupWithForm extends Popup {

    constructor(form, selectorForm) {
        this._form = form;
        this._selectForm = selectorForm;
    }

    _getInputValues(){

    }

    setEventListeners(){
        super.setEventListeners();
        this._selectForm.querySelector(this._form).addEventListener('submit', (e) => {
            
        })
    }

}