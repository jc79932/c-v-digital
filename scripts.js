
const descriptions = document.querySelectorAll('.product');
const serviceItems = document.querySelectorAll('.service-item');
  
const burgerMenu = document.querySelector('.burger-menu');
const primaryHeader = document.querySelector('.primary-header');
const mobileDisplay = document.querySelector('.mobile-display');


burgerMenu.addEventListener('click', () => {
  // Toggle the class to show/hide the mobile display
  mobileDisplay.classList.toggle('hide-mobile');

  // Toggle the class to animate the primary header
  primaryHeader.classList.toggle('show-header');
  document.querySelector('.pricing-main').style.marginTop = '198px';
});

primaryHeader.addEventListener('click', () => {
  // Toggle the class to show/hide the mobile display
  mobileDisplay.classList.toggle('hide-mobile');

  // Toggle the class to animate the primary header
  primaryHeader.classList.toggle('show-header');
  document.querySelector('.pricing-main').style.marginTop = '128px';
});





  // SERVICE DESCRIPTIONS
  serviceItems.forEach((serviceItem, index) => {
    serviceItem.addEventListener('click', () => {
      serviceItems.forEach((item) => {
        item.classList.remove('service-small-description-bg');
      });
      serviceItem.classList.add('service-small-description-bg');

      // Handle class changes for the left div (descriptions)
      descriptions.forEach((description) => {
        description.classList.remove('selected-service');
        description.classList.add('non-selected-service');
      });
      descriptions[index].classList.add('selected-service');
      descriptions[index].classList.remove('non-selected-service');
    });
  });
    //END SERVICE DESCRIPTIONS