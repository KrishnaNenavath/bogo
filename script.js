function toggleDetails(detailsId) {

  const cards = document.querySelectorAll('.card');

  const detailsSections = document.querySelectorAll('.details');
  detailsSections.forEach(details => {
    if (details.id === detailsId) {
      details.style.display = details.style.display === 'block' ? 'none' : 'block';
      
      // select the radio button in the details section when card is selected
      const radioInput = details.querySelector('input[type="radio"]');
      if (radioInput) {
        radioInput.checked = true;
      }
    } else {
      details.style.display = 'none';
    }
  });

  // Toggle visibility of the clicked card section
  cards.forEach(card => {
    if (card.id === detailsId.replace('Details', '')) {
      card.style.display = card.style.display === 'none' ? 'flex' : 'none';
    } else {
      card.style.display = 'flex';
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const radioButtons = document.querySelectorAll('input[name="bogo"]');
  const addToCartButton = document.querySelector('.add-to-cart');
  const totalPriceElement = document.getElementById('totalPrice');

  //calculate total
  let total = 0;
  function updateTotalPrice() {
    let selectedPrice = 0;

    // Find the selected price by value
    radioButtons.forEach((radio) => {
      if (radio.checked) {
        selectedPrice = parseFloat(radio.value);
      }
    });

    total += selectedPrice;

    // total price
    totalPriceElement.textContent = total.toFixed(2);
  }

  // Event listener for Add to Cart button
  addToCartButton.addEventListener('click', updateTotalPrice);
});
