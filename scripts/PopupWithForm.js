import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

    constructor(formData, selectorForm) {
        this._formData = formData;
        this._selectForm = selectorForm;
    }

    _getInputValues(){
        return {
            inputTitle: this._formData.title,
            inputUrl: this._formData.url
        }
    }

    close(){
        super.close();
        document.querySelector(this._selectForm).reset();
    }

    setEventListeners(){
        super.setEventListeners();
        document.querySelector(this._selectForm).addEventListener('submit', (e) => {
            this.close();
        })
    }

}