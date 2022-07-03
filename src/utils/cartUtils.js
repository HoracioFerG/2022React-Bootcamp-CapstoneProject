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
    });
    state.items += quantity;
  }

  return state;
};

export const removeProduct = (state, setState) => {
  console.log("Producto removido");
  state.items -= 1;
};

export const resetCart = (state) => {
  console.log("Carrito reiniciado");
  state.items = 0;
};

const updateTotalItems = (products) => {
  const amounts = products.map((prod) => prod.productQuantity);
  const sum = amounts.reduce((tempSum, a) => tempSum + a, 0);
  return sum;
};

export const checkForAvailability = (products) => {};
