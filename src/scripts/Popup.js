export default class Popup {

    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
        this.open = this.open.bind(this)
    }

    open(){
        this._popup.classList.add('popup_opened');
    }

    close(){
        this._popup.classList.remove('popup_opened');
    }

    _handleEscClose(evt){
        if(evt.key === 'Escape' && this._popup.classList.contains('popup_opened')){
            this.close();
        }
    }
    
    setEventListeners(){

        window.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        })

        this._popup.querySelector('.button_action_close').addEventListener('click', (evt) => {
            this.close();
        })

        window.addEventListener('click', (evt) => {
            if(evt.target.classList.contains('popup_opened')){
                this.close();
            }
            
        })

    }

}