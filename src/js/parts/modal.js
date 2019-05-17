export let modal = () => {
    let container = document.querySelector('body'),
        overlay = document.querySelector('.overlay'),
        targetObj;

    let setParameters = (overlayShown, overflowShown, classListMethod, fourthArg) => {
        if (classListMethod == 'add') targetObj = fourthArg;
        if (!fourthArg) fourthArg = targetObj;
        overlay.style.display = overlayShown;
        document.body.style.overflow = overflowShown;
        fourthArg.classList[classListMethod]('more-splash');
    };

    container.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('description-btn') || target.classList.contains('more')) {
            setParameters('block', 'hidden', 'add', target);
        } else if (target.classList.contains('popup-close')) {
            setParameters('none', '', 'remove');
        }
    });
};