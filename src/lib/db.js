// lib/mongodb.js
import dns from "dns";
dns.setDefaultResultOrder("ipv4first");

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGO_URI environment variable in .env");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    console.log(" Using cached connection");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("🔌 Connecting to MongoDB...");
    console.log("Connection URI:", MONGODB_URI.replace(/\/\/([^:]+):([^@]+)@/, '//***:***@')); // Hide password if present
    
    const opts = {
      dbName: "vastrinByHasitha",
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log(" MongoDB connected successfully");
        return mongoose;
      })
      .catch((err) => {
        console.error(" MongoDB connection error:", err.message);
        cached.promise = null;
        throw err;
      });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
}