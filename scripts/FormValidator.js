export default class FormValidator {

    constructor(config,form){

        this._config = config;
        this._form = form;

    }

    _showInputError(formElement, inputElement, errorMessage, objConfig){
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(objConfig.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(objConfig.errorClass);
    }

    _hideInputError(formElement, inputElement, objConfig){
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(objConfig.inputErrorClass);
        errorElement.classList.remove(objConfig.errorClass);
        errorElement.textContent = "";
    }

    _checkInputValidity(formElement, inputElement, objConfig){
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement, inputElement.validationMessage, objConfig);
        } else {
            this._hideInputError(formElement, inputElement, objConfig);
        }
    }

    _hasInvalidInput(inputList){
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _toggleButtonState(inputList, buttonElement, objConfig){
        if(this._hasInvalidInput(inputList)){
            buttonElement.classList.add(objConfig.inactiveButtonClass);
        }else{
            buttonElement.classList.remove(objConfig.inactiveButtonClass);
        }
    }

    _setEventListeners(formElement,objConfig){
        const inputList = Array.from(formElement.querySelectorAll(objConfig.inputSelector));
        const buttonElement = formElement.querySelector(objConfig.submitButtonSelector);
        this._toggleButtonState(inputList,buttonElement,objConfig);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", function () {
                this._toggleButtonState(inputList,buttonElement,objConfig);
                this._checkInputValidity(formElement, inputElement, objConfig);
            });
        });
    }

    _sendForm(e){
        evt.preventDefault();
    }

    enableValidation(){

        // this._form.addEventListener('submit', this._sendForm)
        this._setEventListeners(this._form,this._config);

    }

}