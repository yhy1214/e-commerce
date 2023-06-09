import React from "react";

export default function CartPrice({ totalPrice }) {
  return (
    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
      <div className="flex justify-between text-base font-medium text-gray-900">
        <p>합계</p>
        <p>{totalPrice}</p>
      </div>
      <div className="mt-6 flex justify-center">
        <button className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700">
          구매하기
        </button>
      </div>
    </div>
  );
}
