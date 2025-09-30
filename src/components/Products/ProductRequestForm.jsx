import { useReducer, useContext } from "react";

import ProductRequestContext from "../../contexts/ProductRequestContext";

const initialState = {
  productName: "",
  quantity: 1,
  address: "",
  notes: "",
  errors: {},
};

function formReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: "" },
      };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default function ProductRequestForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const { addRequest } = useContext(ProductRequestContext);

  const validate = () => {
    const errors = {};
    if (!state.productName.trim())
      errors.productName = "Product name is required";
    if (!state.quantity || state.quantity < 1)
      errors.quantity = "Quantity must be at least 1";
    if (!state.address.trim()) errors.address = "Address is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      dispatch({ type: "SET_ERRORS", errors });
      return;
    }

    const newRequest = {
      ...state,
      id: Date.now(),
    };
    addRequest(newRequest);

    dispatch({ type: "RESET" });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <section className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl ring-1 ring-slate-900/5 overflow-hidden">
        {/* Header */}
        <div className="px-8 py-6 border-b border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900">
            Send Product Request
          </h2>
          <p className="text-sm text-slate-500">
            Fill in the details below to request a product from this user.
          </p>
        </div>

        {/* Form */}
        <form className="px-8 py-6 space-y-6" onSubmit={handleSubmit}>
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Product Name
            </label>
            <input
              type="text"
              value={state.productName}
              onChange={(e) =>
                dispatch({
                  type: "SET_FIELD",
                  field: "productName",
                  value: e.target.value,
                })
              }
              className={`p-4 w-full rounded-xl border shadow-sm sm:text-sm ${
                state.errors.productName ? "border-red-500" : "border-slate-300"
              }`}
            />
            {state.errors.productName && (
              <p className="text-red-600 text-sm mt-1">
                {state.errors.productName}
              </p>
            )}
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium mb-1">Quantity</label>
            <input
              type="number"
              value={state.quantity}
              onChange={(e) =>
                dispatch({
                  type: "SET_FIELD",
                  field: "quantity",
                  value: Number(e.target.value),
                })
              }
              className={`p-4 w-full rounded-xl border shadow-sm sm:text-sm ${
                state.errors.quantity ? "border-red-500" : "border-slate-300"
              }`}
            />
            {state.errors.quantity && (
              <p className="text-red-600 text-sm mt-1">
                {state.errors.quantity}
              </p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Delivery Address
            </label>
            <textarea
              value={state.address}
              onChange={(e) =>
                dispatch({
                  type: "SET_FIELD",
                  field: "address",
                  value: e.target.value,
                })
              }
              rows={3}
              className={`p-4 w-full rounded-xl border shadow-sm sm:text-sm ${
                state.errors.address ? "border-red-500" : "border-slate-300"
              }`}
            />
            {state.errors.address && (
              <p className="text-red-600 text-sm mt-1">
                {state.errors.address}
              </p>
            )}
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium mb-1">Notes</label>
            <textarea
              value={state.notes}
              onChange={(e) =>
                dispatch({
                  type: "SET_FIELD",
                  field: "notes",
                  value: e.target.value,
                })
              }
              rows={3}
              className="p-4 w-full rounded-xl border-slate-300 shadow-sm sm:text-sm"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium shadow hover:bg-indigo-700"
            >
              Send Request
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
