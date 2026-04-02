export function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// This function generates a 6-digit OTP here...