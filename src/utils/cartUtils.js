export const addProduct = (state, action) => {
  const { product, quantity } = action.payload;
  const productIndex = state.products.findIndex(
    (element) => element.idProduct === product.id
  );
  //Product already exists
  if (productIndex >= 0) {
    if (
      state.products[productIndex].productQuantity + quantity <=
      product.data.stock
    ) {
      state.products[productIndex].productQuantity += quantity;
      state.items = updateTotalItems(state.products);
      state.products[productIndex].onStock -= quantity;
    }
  } else {
    //First time adding the product
    state.products.push({
      idProduct: product.id,
      name: product.data.name,
      sku: product.data.sku,
      image: {
        url: product.data.mainimage.url,
        alt: product.data.mainimage.alt,
      },
      price: product.data.price,
      category: product.data.category.slug,
      productQuantity: quantity,
      onStock: product.data.stock - quantity,
    });
    state.items += quantity;
  }

  return state;
};

export const updateCart = (state, action) => {
  const { product, quantity, operation } = action.payload;
  const productIndex = state.products.findIndex(
    (element) => element.idProduct === product.idProduct
  );

  if (productIndex >= 0) {
    switch (operation) {
      case "increment":
        if (
          state.products[productIndex].productQuantity + quantity <=
          product.onStock
        ) {
          state.products[productIndex].productQuantity += quantity;
          state.items = updateTotalItems(state.products);
          state.products[productIndex].onStock -= quantity;
        }
        break;
      case "decrement":
        if (state.products[productIndex].productQuantity - quantity > 0) {
          state.products[productIndex].productQuantity -= quantity;
          state.items = updateTotalItems(state.products);
          state.products[productIndex].onStock += quantity;
        }
        break;
      case "remove":
        state.products.splice(productIndex, 1);

        break;

      default:
        break;
    }
  }
};

export const removeProduct = (state, setState) => {
  state.items -= 1;
};

export const resetCart = (state) => {
  state.items = 0;
};

const updateTotalItems = (products) => {
  const amounts = products.map((prod) => prod.productQuantity);
  const sum = amounts.reduce((tempSum, a) => tempSum + a, 0);
  return sum;
};
