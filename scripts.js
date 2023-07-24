
  const descriptions = document.querySelectorAll('.product');
  const serviceItems = document.querySelectorAll('.service-item');

  // Add event listeners to each service item
  serviceItems.forEach((serviceItem, index) => {
    serviceItem.addEventListener('click', () => {
      // Handle class changes for the right div (service items)
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