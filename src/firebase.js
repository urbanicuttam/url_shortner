
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFiPREIhtxlCFOSUODdTQ1MSLJmdYENFQ",
  authDomain: "todo-bcd20.firebaseapp.com",
  projectId: "todo-bcd20",
  storageBucket: "todo-bcd20.appspot.com",
  messagingSenderId: "267399339933",
  appId: "1:267399339933:web:2bab6b649fb811a33c1974"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); 

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       navigate('/home')
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const profilePic = result.user.photoURL;

//       localStorage.setItem("name", name);
//       localStorage.setItem("email", email);
//       localStorage.setItem("profilePic", profilePic);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };