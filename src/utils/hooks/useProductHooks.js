import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useCheckForAvailability = (idProduct) => {
  const { products } = useSelector((state) => state.cart);
  const [disable, setDisable] = useState("");
  const product = products.find((element) => element.idProduct === idProduct);

  useEffect(() => {
    const productIndex = products.findIndex(
      (element) => element.id === idProduct
    );
    productIndex >= 0 &&
      products[productIndex].stock < 1 &&
      setDisable("disabled");
  }, [products, idProduct]);

  return {
    product,
    disable,
  };
};
