import { handleOpenModal, closeModal } from './utils.js';

export default class Popup {

    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
    }

    open(modal){
        handleOpenModal(modal)
    }

    close(){
        closeModal();
    }

    _handleEscClose(evt){
        if(evt.target === 'Escape' && document.querySelector('#popup').classList.contains('popup_opened')){
            this.close();
            evt.target.removeEventListener('keydown',this._handleEscClose)
        }
    }

    setEventListeners(){

        document.addEventListener('keydown', (evt) => {
            console.log("🚀 ~ Popup ~ document.addEventListener ~ evt:", evt.target)
            // this._handleEscClose(evt);
        })

        this._popup.addEventListener('click', (evt) => {
            if(evt.target.classList.contains('button_action_close') || evt.target.classList.contains('popup_opened')){
                this.close();
            }
        })

    }

}