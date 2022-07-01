export const addProduct = (state, setState) => {
  console.log("Producto anadido");
  state.items += 1;
};

export const removeProduct = (state, setState) => {
  console.log("Producto removido");
  state.items -= 1;
};

export const resetCart = (state) => {
  console.log("Carrito reiniciado");
  state.items = 0;
};
