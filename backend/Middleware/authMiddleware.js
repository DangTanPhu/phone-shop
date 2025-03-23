const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
    try {
        // Lấy token từ header Authorization
        const token = req.header("Authorization")?.replace("Bearer ", "");
        console.log("Received Token:", token);

        if (!token) {  
            return res.status(401).json({ message: "Access Denied: No token provided" });  
        }
            

        // Kiểm tra biến môi trường JWT_SECRET
        console.log("JWT_SECRET:", process.env.JWT_SECRET);

        // Giải mã token
        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            if (error.name === "TokenExpiredError") {
                return res.status(401).json({ message: "Token expired, please login again" });
            } else if (error.name === "JsonWebTokenError") {
                return res.status(401).json({ message: "Invalid token, authentication failed" });
            } else {
                return res.status(500).json({ message: "Internal server error" });
            }
        }

        console.log("Decoded UserId:", decoded.userId);

        // Tìm người dùng từ ID trong token
        const user = await User.findById(decoded.userId);
        console.log("User Found:", user);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Gán thông tin user vào req để sử dụng ở các route tiếp theo
        req.user = user;
        next();
    } catch (error) {
        console.error("Authentication error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = authMiddleware;
