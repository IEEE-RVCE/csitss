import { AuthError } from "firebase/auth";

export const getErrorMessage = (error: AuthError) => {
  let message = "";

  switch (error.code) {
    case "auth/email-already-in-use":
      message = "Email already in use";
    case "auth/invalid-email":
      message = "Invalid email";
    case "auth/operation-not-allowed":
      message = "Operation not allowed";
    case "auth/weak-password":
      message = "Weak password";
    case "auth/wrong-password":
      message = "Wrong password";
    case "auth/user-not-found":
      message = "User not found";
    case "auth/user-disabled":
      message = "User disabled";
    case "auth/expired-action-code":
      message = "Session Expired, Login Again";
    case "auth/invalid-action-code":
      message = "Invalid action code";
    case "auth/code-expired":
      message = "Code expired";
  }
  console.log(error);
  message === ""
    ? (message = "An unknown error occurred, Please try again later")
    : message;
  return message;
};
