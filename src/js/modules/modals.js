const modals = () => {
    function bindModal(trigger, modal, close) {
        trigger.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    const callEngeneerBtn = document.querySelector('.popup_engineer_btn'),
          modalEngeneer = document.querySelector('.popup_engineer'),
          modalEngeneerClose = document.querySelector('.popup_engineer .popup_close');

    bindModal(callEngeneerBtn, modalEngeneer, modalEngeneerClose);
};

export default modals;