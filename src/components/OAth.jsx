import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

export const OAth = (props) => {
  const navigate = useNavigate();

  const onGoogleClick = async (event) => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      // check for the user is in db
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      navigate("/");
      toast.success(`${user.displayName} successfully authorized`);
    } catch (error) {
      console.error(error);
      toast.error("Could not authorize with Google");
    }
  };
  return (
    <button
      className="
        flex
        items-center
        justify-center
        w-full
        bg-red-700
        text-white
        px-7 py-3
        uppercase
        text-sm
        font-medium
        hover:bg-red-800
        active:bg-red-900
        shadow-md
        hover:shadow-lg
        active:shadow-lg
        transition
        duration-150
        ease-in-out
        rounded"
      onClick={onGoogleClick}
      type="button"
    >
      <FcGoogle className="text-xl bg-white rounded-full mr-2" />
      Continue with Google
    </button>
  );
};
