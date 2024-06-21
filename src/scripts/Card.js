export default class Card {

    static _idUser ;

    constructor(data,cardSelector,handleCardClick,handleOpenPopup,handleLikeCard){
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._idUser = data.owner._id;
        this._idCard = data._id;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleOpenPopup = handleOpenPopup;
        this._handleLikeCard = handleLikeCard;
    }

    _getTemplate(){
        return document.querySelector(this._cardSelector).content.querySelector('.post__item').cloneNode(true);
    }

    _setEventListeners(){

        this._element.querySelector('.button_action_like').addEventListener('click', (e) => {
            this._handleLikeClick();
            this._handleLikeCard(e,this._idCard)
        })

        this._element.querySelector('.button_action_delete').addEventListener('click', (e) => {
            this._handleOpenPopup(this._idCard)
        })

        this._element.querySelector('.post__image').addEventListener('click', (e) => {
            this._handleCardClick(this._link,this._name)
        })

    }
    
    _handleLikeClick(){
        this._element.querySelector('.button_action_like').classList.toggle('button_is_active');
    }

    generateCard(){

        this._element = this._getTemplate();
        console.log("🚀 ~ Card ~ generateCard ~ this:", this)
        
        if(this._idUser != Card._idUser){
            const buttonDelete = this._element.querySelector('.button_action_delete')
            buttonDelete.style.display = 'none';
        }

        this._likes.forEach(likeItem => {

            if(likeItem._id === Card._idUser){
                this._element.querySelector('.button_action_like').classList.add('button_is_active');
            }

        })

        this._setEventListeners();
        this._element.setAttribute('idCard',this._idCard);
        this._element.querySelector('.post__image').setAttribute('src',this._link);
        this._element.querySelector('.post__image').setAttribute('alt',this._name);
        this._element.querySelector('.post__name').textContent = this._name;
        this._element.querySelector('.post__likes').textContent = this._likes.length;
        return this._element;

    }

}