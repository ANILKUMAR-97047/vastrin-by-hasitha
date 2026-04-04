"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { createAddress, updateAddress } from "@/lib/api/address";

const initialForm = {
  fullName: "",
  mobile: "",
  addressLine: "",
  locality: "",
  landmark: "",
  pincode: "",
  state: "",
  district: "",
  city: "",
  type: "home",
};

export default function AddAddressModal({ isOpen, onClose, onSave, editingAddress }) {
  const [form, setForm] = useState(() =>
    editingAddress ? { ...initialForm, ...editingAddress } : initialForm
  );

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (!form.fullName || !form.mobile || !form.addressLine) {
      alert("Please fill full name, mobile, and address");
      return;
    }

    let saved;
    if (editingAddress) {
      saved = await updateAddress(editingAddress._id, form);
    } else {
      saved = await createAddress(form);
    }

    if (saved?.error) {
      alert(saved.error);
      return;
    }

    onSave(saved);
    setForm(initialForm);
    onClose();
  };

  if (!isOpen) return null;

  const InputField = ({ label, name, placeholder, value, className = "" }) => (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="text-[13px] font-bold text-[#333]">{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="w-full border border-gray-200 rounded-md px-3 py-2 text-[13px] focus:outline-none bg-white placeholder:text-gray-300"
      />
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-2">
      <div className="bg-white w-full max-w-xl rounded-xl p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <button onClick={onClose} className="text-gray-700 cursor-pointer">
            <ArrowLeft size={20} />
          </button>
          <h2 className="text-xl font-serif font-bold text-[#1a2b3c]">
            {editingAddress ? "Edit Address" : "Add New Address"}
          </h2>
        </div>

        <div className="space-y-4">
          {/* Personal Details */}
          <section>
            <h3 className="text-[15px] font-serif text-gray-500 mb-2">Personal Details</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <InputField label="Full Name" name="fullName" value={form.fullName} />
              <InputField label="Mobile Number" name="mobile" value={form.mobile} />
            </div>
          </section>

          {/* Address Details */}
          <section>
            <h3 className="text-[15px] font-serif text-gray-500 mb-2">Address Details</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <InputField label="Address (House No, Building, Street)" name="addressLine" value={form.addressLine} />
              <InputField label="Locality / Area" name="locality" value={form.locality} />
              <InputField label="Landmark (Optional)" name="landmark" placeholder="Nearby landmark" value={form.landmark} />
              <InputField label="Pincode" name="pincode" value={form.pincode} />
            </div>

            {/* State, District, City Row */}
            <div className="grid grid-cols-3 gap-3 mt-3">
              <InputField label="State" name="state" value={form.state} />
              <InputField label="District" name="district" value={form.district} />
              <InputField label="City" name="city" value={form.city} />
            </div>
          </section>

          {/* Address Type */}
          <section>
            <h3 className="text-[15px] font-serif text-gray-500 mb-2">Address Type</h3>
            <div className="flex gap-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'office', label: 'Office' }
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => setForm(prev => ({ ...prev, type: option.id }))}
                  className={`flex items-center gap-2 px-5 py-2 rounded-lg border transition-all cursor-pointer ${
                    form.type === option.id 
                    ? "border-[#d4a373] bg-[#fefae0]/30 text-[#bc6c25]" 
                    : "border-gray-200 text-gray-500"
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    form.type === option.id ? "border-[#d4a373]" : "border-gray-300"
                  }`}>
                    {form.type === option.id && <div className="w-2 h-2 bg-[#d4a373] rounded-full" />}
                  </div>
                  <span className="font-bold text-[13px]">{option.label}</span>
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* Action Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleSubmit}
            className="cursor-pointer w-[70%] bg-[#FF758C] text-white py-3 rounded-xl font-bold text-[15px] hover:bg-[#ff5e7a] transition-colors"
          >
            {editingAddress ? "Update Address" : "Save Address and Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}
