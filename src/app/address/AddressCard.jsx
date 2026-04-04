'use client';

export default function AddressCard({ address, onSelect, onEdit, onDelete }) {
  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white">
      
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-sm">{address.fullName}</h3>
        <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">
          {address.type?.toUpperCase()}
        </span>
      </div>

      <p className="text-xs text-gray-500">
        {address.addressLine}, {address.locality}, {address.city} - {address.pincode}
      </p>

      <p className="text-xs text-gray-500 mt-1">
        Mobile: {address.mobile}
      </p>

      <button
        onClick={() => onSelect(address)}
        className="mt-3 w-full bg-[#FF758C] text-white py-2 rounded-lg text-sm font-semibold hover:bg-[#ff5e7a] cursor-pointer"
      >
        Deliver Here
      </button>

       <div className="flex gap-3 mt-3 text-sm">
        <button
          onClick={() => onEdit(address)}
          className="text-blue-500 cursor-pointer"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(address)}
          className="text-red-500 cursor-pointer"
        >
          Remove
        </button>
      </div>

    </div>
  );
}
