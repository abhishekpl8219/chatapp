export const login = (req, res) => {
  console.log("login user");

};

export const signup = async(req, res) => {
 try {
  const {fullName,username,password,confirmPassword,gender}=req.body
   console.log("signup user");
 } catch (error) {
  
 }
};

export const signin = (req, res) => {
  console.log("signin user");
};
