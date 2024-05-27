const showInputError = (formElement, inputElement, errorMessage, objConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(objConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(objConfig.errorClass);
};

const hideInputError = (formElement, inputElement, objConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(objConfig.inputErrorClass);
    errorElement.classList.remove(objConfig.errorClass);
    errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, objConfig) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, objConfig);
    } else {
        hideInputError(formElement, inputElement, objConfig);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButtonState = (inputList, buttonElement, objConfig) => { 
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(objConfig.inactiveButtonClass);
    } else {
        buttonElement.classList.remove(objConfig.inactiveButtonClass);
    }
};

const setEventListeners = (formElement,objConfig) => { 
    const inputList = Array.from(formElement.querySelectorAll(objConfig.inputSelector));
    const buttonElement = formElement.querySelector(objConfig.submitButtonSelector);
    toggleButtonState(inputList,buttonElement,objConfig);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
            toggleButtonState(inputList,buttonElement,objConfig);
            checkInputValidity(formElement, inputElement,objConfig);
        });
    });
};

const sendForm = (evt) => {
    evt.preventDefault();
}

export default function enableValidation(objConfig){

    const formList = Array.from(document.querySelectorAll(objConfig.formSelector));
    formList.forEach((formElement) => {

        formElement.addEventListener("submit", sendForm);
        setEventListeners(formElement,objConfig);

    });

}