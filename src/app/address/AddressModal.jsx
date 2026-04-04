'use client';

import AddressCard from './AddressCard';

export default function AddressModal({
  isOpen,
  onClose,
  addresses,
  onAddNew,
  onSelect,
  onEdit,
  onDelete,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white w-[90%] max-w-3xl rounded-2xl p-6 relative">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Select Delivery Address</h2>
          <button onClick={onClose} className="text-lg">✕</button>
        </div>

        {/* Actions */}
        <div className="flex justify-between mb-4">
          <button className="text-blue-500 text-sm">
            Use current location
          </button>

          <button
            onClick={onAddNew}
            className="border border-pink-400 text-pink-500 px-3 py-1 rounded hover:bg-pink-50"
          >
            + Add New Address
          </button>
        </div>

        {/* Address List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {addresses.length > 0 ? (
            addresses.map((addr) => (
              <AddressCard
                key={addr._id}
                address={addr}
                onSelect={onSelect}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          ) : (
            <div className="col-span-2 text-center text-gray-400 py-10">
              No addresses found
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
