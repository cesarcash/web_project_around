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
        if(evt.key === 'Escape' && document.querySelector('#popup').classList.contains('popup_opened')){
            this.close();
        }
    }
    
    setEventListeners(){
        
        window.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        })

        this._popup.addEventListener('click', (evt) => {
            if(evt.target.classList.contains('button_action_close') || evt.target.classList.contains('popup_opened')){
                this.close();
            }
        })

    }

}