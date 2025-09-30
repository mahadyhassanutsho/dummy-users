import { createContext } from "react";

const ProductRequestContext = createContext({
  requests: [],
  addRequest: () => {},
  removeRequest: () => {},
});

export default ProductRequestContext;
