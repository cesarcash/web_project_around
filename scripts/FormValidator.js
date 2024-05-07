export default class FormValidator {

    constructor(config,form){

        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._form = form;

    }

    _showInputError(errorMessage){

        this._errorElement = this._form.querySelector(`.${this._inputSelector.id}-error`);
        this._inputSelector.classList.add(this._inputErrorClass);
        this._errorElement.textContent = this._inputSelector.validationMessage;
        this._errorElement.classList.add(this._errorClass);


    }

    _hideInputError(){
        this._errorElement = this._form.querySelector(`.${this._inputSelector.id}-error`);
        this._inputSelector.classList.remove(this._inputErrorClass);
        this._errorElement.classList.remove(this._errorClass);
        this._errorElement.textContent = "";
    }

    _checkInputValidity(){
        if (!this._inputSelector.validity.valid) {
            this._showInputError();
        } else {
            this._hideInputError();
        }
    }

    _hasInvalidInput(inputList){
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _toggleButtonState(inputList, buttonElement){
        if(this._hasInvalidInput(inputList)){
            buttonElement.classList.add(this._inactiveButtonClass);
        }else{
            buttonElement.classList.remove(this._inactiveButtonClass);
        }
    }

    _setEventListeners(){
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._buttonElement = 
    }

    enableValidation(){

    }

}