import tokenService from "../service/tokenService.js";

export const requiresAuth = () => {
  return (req, res, next) => {
    try{
        if (!req.headers.authorization) {
          throw new Error("Missing Authorization header");
        }
        const authHeader = req.headers.authorization;
        const token = authHeader.split(" ")[1];
      //tokenService.verifyToken(token)
        tokenService.verifyToken(token, (err, decodedToken) => {
          if (err) {
            throw new Error("Invalid token");
          }
        return next();
      });
    } catch(err) {
        console.log('Auth error', err)
        return res.status(401).json({message: "Unauthorized middleware"})
    }
  };
};

export default { requiresAuth };
