export default class FormValidator {

    constructor(config,form){

        // this._inputSelector = config.inputSelector;
        // this._submitButtonSelector = config.submitButtonSelector;
        // this._inactiveButtonClass = config.inactiveButtonClass;
        // this._inputErrorClass = config.inputErrorClass;
        // this._errorClass = config.errorClass;

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
        _toggleButtonState(inputList,buttonElement,objConfig);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", function () {
                _toggleButtonState(inputList,buttonElement,objConfig);
                _checkInputValidity(formElement, inputElement, objConfig);
            });
        });
    }

    _sendForn(e){
        evt.preventDefault();
    }

    enableValidation(objConfig){

        const formList = Array.from(document.querySelectorAll(objConfig.formSelector));
        formList.forEach((formElement) => {
            formElement.addEventListener("submit", sendForm);
            _setEventListeners(formElement,objConfig);
        });

    }

}