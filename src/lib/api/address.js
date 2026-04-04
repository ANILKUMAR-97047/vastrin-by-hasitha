export const getAddresses = async () => {
  const res = await fetch("/api/address", {
    credentials: "include",
  });

  if (!res.ok) {
    return res.json();
  }

  return res.json();
};

export const createAddress = async (data) => {
  const res = await fetch("/api/address", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    return res.json();
  }

  return res.json();
};

export const deleteAddress = async (id) => {
  const res = await fetch(`/api/address/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  return res.json();
};

export const updateAddress = async (id, data) => {
  const res = await fetch(`/api/address/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    return res.json();
  }

  return res.json();
};
