export const getFormattedPrices = (price) => {
  const upPrice = Math.random() * 500;
  const originalPrice = (price + upPrice)
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const priceOnDiscount = (price - upPrice)
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return {
    originalPrice,
    priceOnDiscount,
    save: upPrice
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  };
};

export const setCamelCase = (word) => {
  return word.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
    return str.toUpperCase();
  });
};
