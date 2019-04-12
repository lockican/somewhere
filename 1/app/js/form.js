function showError(){
    let form = document.querySelector('form'),
        inpName = form.querySelector('.form__input-name'),
        inpWeight = form.querySelector('.form__input-weight'),
        inpMail = form.querySelector('.form__mail'),
        inpPhone = form.querySelector('.form__phone'),
        popup = [inpName,inpWeight,inpMail,inpPhone];

    form.addEventListener('submit' , function (evt){
        if (!inpName.value || !inpWeight.value || !inpMail.value || !inpPhone.value){
            evt.preventDefault();
            for (i = 0 ; i < popup.length; i++){
                popup[i].classList.add("form__input--error");
            }
        }
    }); 
}

showError();