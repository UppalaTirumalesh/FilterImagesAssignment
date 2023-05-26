const brandCheckboxes = document.querySelectorAll('.checkbox-value');
const colorCheckboxes = document.querySelectorAll('.SelectedColor');
const priceCheckboxes = document.querySelectorAll('.SelectedPrice');
const images = document.querySelectorAll('.images');

brandCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', filterImages);
});

colorCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', filterImages);
});

priceCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', filterImages);
});

function filterImages() {
  const selectedBrands = Array.from(brandCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.id);

  const selectedColors = Array.from(colorCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.id);

  const selectedPriceRanges = Array.from(priceCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.id);

  images.forEach((image) => {
    const brand = image.id;
    const color = image.getAttribute('data-color');
    const priceRange = image.getAttribute('data-price');

    const brandFilter = selectedBrands.length === 0 || selectedBrands.includes(brand);
    const colorFilter = selectedColors.length === 0 || selectedColors.includes(color);
    const priceFilter = selectedPriceRanges.length === 0 || selectedPriceRanges.includes(priceRange);

    if (brandFilter && colorFilter && priceFilter) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}
