const toggleAccordion = ({target}) => {
    const accordionClasses = target.nextElementSibling.classList;

    accordionClasses.contains('--open')
        ? accordionClasses.remove('--open')
        : accordionClasses.add('--open');

    target.classList.contains('--active')
        ? target.classList.remove('--active')
        : target.classList.add('--active');
}

export default toggleAccordion;
