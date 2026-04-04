"use client";

import { useState } from "react";

import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import AddressModal from "@/app/address/AddressModal";
import AddAddressModal from "@/app/address/AddAddressModal";

import { deleteAddress, getAddresses } from "@/lib/api/address";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const deliveryFee = 15;
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [editingAddress, setEditingAddress] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const fetchAddresses = async () => {
    const data = await getAddresses();

    if (Array.isArray(data)) {
      setAddresses(data);
      return data;
    }

    console.error("Invalid address response:", data);
    setAddresses([]);
    return [];
  };

  const handleUpdateQuantity = (item, delta) => {
    const newQty = item.quantity + delta;
    if (newQty >= 1) {
      updateQuantity(item.id, item.size, item.color, newQty);
    }
  };

  const handleRemoveItem = (item) => {
    removeFromCart(item.id, item.size, item.color);
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const total = subtotal + deliveryFee;

  const handleOpenAddressFlow = async () => {
    const latestAddresses = await fetchAddresses();

    if (latestAddresses.length === 0) {
      setEditingAddress(null);
      setShowAddressModal(false);
      setShowAddModal(true);
      return;
    }

    setShowAddressModal(true);
  };

  const handleDeleteAddress = async (address) => {
    const result = await deleteAddress(address._id);

    if (result?.error) {
      alert(result.error);
      return;
    }

    setAddresses((prev) => prev.filter((item) => item._id !== address._id));

    if (selectedAddress?._id === address._id) {
      setSelectedAddress(null);
    }
  };

  return (
    <div className="bg-[#FCFCFC] min-h-screen p-3 md:p-8 lg:p-12 font-inknut text-[#333]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-xl md:text-3xl font-bold mb-5 md:mb-8 px-1">
          Your Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Left Side: Cart Items List */}
          <div className="lg:w-2/3 space-y-3">
            <div className="border border-gray-100 rounded-xl md:rounded-2xl p-3 md:p-6 shadow-sm bg-white">
              {cart.length > 0 ? (
                cart.map((item, index) => (
                  <div
                    key={`${item.id}-${item.size}-${item.color}`}
                    className={`flex gap-3 sm:gap-6 py-4 md:py-6 ${index !== cart.length - 1 ? "border-b border-gray-50" : ""}`}
                  >
                    {/* Product Image - Smaller for mobile */}
                    <div className="w-20 h-28 sm:w-32 sm:h-40 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info & Controls Container */}
                    <div className="flex flex-col justify-between flex-grow min-w-0">
                      <div className="relative pr-6">
                        {/* Smaller Font Size for Mobile Name */}
                        <h3 className="font-bold text-[13px] sm:text-[16px] leading-tight text-[#1A1A1A] line-clamp-2">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => handleRemoveItem(item)}
                          className="absolute -top-1 -right-1 text-[#FF758C] hover:bg-pink-50 p-1 rounded-full cursor-pointer"
                        >
                          <Trash2 size={16} />
                        </button>

                        <div className="mt-1 flex flex-wrap gap-x-2 text-[11px] sm:text-sm text-gray-400">
                          <p>
                            Size:{" "}
                            <span className="text-gray-600">{item.size}</span>
                          </p>
                          <p>
                            Color:{" "}
                            <span className="text-gray-600">{item.color}</span>
                          </p>
                        </div>
                      </div>

                      {/* Price and Quantity - Optimized spacing */}
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-sm sm:text-lg font-bold italic">
                          Rs {item.price}
                        </p>

                        {/* Smaller Quantity Container */}
                        <div className="flex items-center bg-[#F8F9FA] rounded-full px-1.5 py-0.5 border border-gray-200">
                          <button
                            onClick={() => handleUpdateQuantity(item, -1)}
                            className="p-1 text-gray-500 hover:text-[#FF758C] cursor-pointer"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="mx-2 font-bold text-[12px] sm:text-sm min-w-[16px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleUpdateQuantity(item, 1)}
                            className="p-1 text-gray-500 hover:text-[#FF758C] cursor-pointer"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-400 italic mb-4 text-sm">
                    Empty cart.
                  </p>
                  <Link
                    href="/"
                    className="text-[#FF758C] text-sm font-bold underline"
                  >
                    Back to Shop
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Order Summary */}
          <div className="lg:w-1/3">
            <div className="border border-gray-100 rounded-xl md:rounded-2xl p-5 md:p-8 shadow-sm bg-white lg:sticky lg:top-8">
              <h2 className="text-lg md:text-2xl font-bold mb-5">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-gray-500 text-sm md:text-lg">
                  <span>Subtotal</span>
                  <span className="font-bold text-black italic">
                    Rs {subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-gray-500 text-sm md:text-lg border-b border-gray-100 pb-4">
                  <span>Delivery</span>
                  <span className="font-bold text-black italic">
                    Rs {deliveryFee}
                  </span>
                </div>

                <div className="flex justify-between items-center text-lg md:text-xl font-bold pt-1">
                  <span>Total</span>
                  <span className="italic text-[#FF758C]">
                    Rs {total.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={handleOpenAddressFlow}
                  disabled={cart.length === 0}
                  className={`w-full py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-all mt-4 text-sm md:text-base ${
                    cart.length === 0
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-[#FF758C] text-white hover:bg-[#ff5e7a] cursor-pointer shadow-lg shadow-pink-100"
                  }`}
                >
                  Select Address
                </button>

                {selectedAddress && (
                  <div className="rounded-xl border border-pink-100 bg-pink-50 px-4 py-3 text-sm text-[#333]">
                    Deliver to: {selectedAddress.fullName}, {selectedAddress.addressLine},{" "}
                    {selectedAddress.city} - {selectedAddress.pincode}
                  </div>
                )}

                <button
                  disabled={cart.length === 0}
                  className={`w-full py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-all mt-4 text-sm md:text-base ${
                    cart.length === 0
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-[#FF758C] text-white hover:bg-[#ff5e7a] cursor-pointer shadow-lg shadow-pink-100"
                  }`}
                >
                  Go to Checkout <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddressModal
        onEdit={(addr) => {
          setEditingAddress(addr);
          setShowAddressModal(false);
          setShowAddModal(true);
        }}
        onDelete={handleDeleteAddress}
        isOpen={showAddressModal}
        onClose={() => setShowAddressModal(false)}
        addresses={addresses}
        onAddNew={() => {
          setEditingAddress(null);
          setShowAddressModal(false);
          setShowAddModal(true);
        }}
        onSelect={(addr) => {
          setSelectedAddress(addr);
          setShowAddressModal(false);
        }}
      />

      <AddAddressModal
        key={`${showAddModal}-${editingAddress?._id ?? "new"}`}
        isOpen={showAddModal}
        onClose={() => {
          setShowAddModal(false);
          setEditingAddress(null);
        }}
        onSave={(savedAddress) => {
          setAddresses((prev) => {
            const exists = prev.some((item) => item._id === savedAddress._id);

            if (exists) {
              return prev.map((item) =>
                item._id === savedAddress._id ? savedAddress : item
              );
            }

            return [...prev, savedAddress];
          });
          setSelectedAddress(savedAddress);
          setEditingAddress(null);
        }}
        editingAddress={editingAddress}
      />
    </div>
  );
};

export default CartPage;
