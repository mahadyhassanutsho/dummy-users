import { useState, useContext } from "react";

import ProductRequestContext from "../../contexts/ProductRequestContext";

export default function ProductRequestList() {
  const [openId, setOpenId] = useState(null);

  const { requests } = useContext(ProductRequestContext);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      {requests.map((req) => (
        <div
          key={req.id}
          className="bg-white/70 backdrop-blur-sm rounded-2xl shadow ring-1 ring-slate-900/5 overflow-hidden"
        >
          {/* Summary Header */}
          <button
            onClick={() => toggleItem(req.id)}
            className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
          >
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                {req.productName}
              </h3>
              <p className="text-sm text-slate-500">Quantity: {req.quantity}</p>
            </div>
            <span className="text-indigo-600 font-bold">
              {openId === req.id ? "−" : "+"}
            </span>
          </button>

          {/* Expanded Details */}
          {openId === req.id && (
            <div className="px-6 py-4 border-t border-slate-200 text-sm text-slate-700 space-y-2">
              <p>
                <span className="font-medium">Delivery Address:</span>{" "}
                {req.address}
              </p>
              {req.notes && (
                <p>
                  <span className="font-medium">Notes:</span> {req.notes}
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
