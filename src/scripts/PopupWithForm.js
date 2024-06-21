import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

    constructor(callbackForm,selectorPopup) {
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

    open(){
        super.open();
    }

    close(){
        super.close();
        this._popup.querySelectorAll('.form').forEach(formItem => {
            formItem.reset();
        })
    }

    setEventListeners(){

        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const formData = this._getInputValues();
            this._callbackForm(evt.target,formData);
            this.close();
        })
        
    }

}