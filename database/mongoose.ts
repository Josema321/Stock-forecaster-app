import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

type MongooseCache = {
    conn: typeof import("mongoose") | null;
    promise: Promise<typeof import("mongoose")> | null;
};

declare global {
    // eslint-disable-next-line no-var
    var mongooseCache: MongooseCache | undefined;
}

let cached = global.mongooseCache;

if(!cached) {
    cached = global.mongooseCache = { conn: null, promise: null };
}

export const connectDB = async () => {
    if(!MONGO_URI) throw new Error('No MongoDB URI provided.');

    if(cached.conn) return cached.conn;

    if(!cached.promise) {
        cached.promise = mongoose.connect(MONGO_URI, { bufferCommands: false });
    }

    try {
        cached.conn = await cached.promise;
    } catch(err) {
        cached.promise = null;
        throw err;
    }

    console.log(`Connected to MongoDB. ${process.env.NODE_ENV } - ${MONGO_URI}`);
}