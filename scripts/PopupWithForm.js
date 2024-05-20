import Popup from "./Popup.js";

class PopupWithForm extends Popup {

    constructor(formData, selectorForm) {
        this._formData = formData;
        this._selectForm = selectorForm;
    }

    _getInputValues(){
        return {

        }
    }

    setEventListeners(){
        super.setEventListeners();
        document.querySelector(this._selectForm).addEventListener('submit', (e) => {
            
        })
    }

}