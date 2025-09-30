import { useReducer } from "react";
import ProductRequestContext from "./ProductRequestContext";

const initialState = {
  requests: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_REQUEST":
      return { ...state, requests: [...state.requests, action.payload] };
    case "REMOVE_REQUEST":
      return {
        ...state,
        requests: state.requests.filter((req) => req.id !== action.payload),
      };
    default:
      return state;
  }
}

export default function ProductRequestProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addRequest = (request) =>
    dispatch({ type: "ADD_REQUEST", payload: request });
  const removeRequest = (id) =>
    dispatch({ type: "REMOVE_REQUEST", payload: id });

  return (
    <ProductRequestContext.Provider
      value={{ requests: state.requests, addRequest, removeRequest }}
    >
      {children}
    </ProductRequestContext.Provider>
  );
}
