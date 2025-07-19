import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const signUp = async (email, password) => {
  try {
    const userData = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (userData) {
      console.log("This is user ", userData.user);
    }
  } catch (error) {
    return `Error Message : ${error?.message} with error code ${error?.code}`;
  }
};

export default signUp;
