const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri:
    process.env.MONGODB_URI ||
    "mongodb+srv://sudipghimire9844:admin@groupproject.qh8oxnv.mongodb.net/?retryWrites=true&w=majority&appName=GroupProject"
};
export default config;

//"mongodb+srv://admin:admin123@cluster0.ggnhlvo.mongodb.net/?retryWrites=true&w=majority/"

