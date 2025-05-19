import { db } from "@/config/firebase.config";
import { User } from "@/types";
import { LoaderPage } from "@/views/loader-page";
import { useAuth, useUser } from "@clerk/clerk-react";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthHandler = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const storeUserData = async () => {
      if (isSignedIn && user) {
        try {
          const userSnap = await getDoc(doc(db, "users", user.id));
          if (!userSnap.exists()) {
            const userData: User = {
              id: user.id,
              name: user.fullName || user.firstName || "Anonymous",
              email: user.primaryEmailAddress?.emailAddress || "",
              imageUrl: user.imageUrl,
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp(),
            };
            await setDoc(doc(db, "users", user.id), userData);
          }
        } catch (err) {
          console.log("Error on storing user data:", err);
        } finally {
          setLoading(false);
        }
      }
    };
    storeUserData();
  }, [isSignedIn, user, pathname, navigate]);

  if (loading) return <LoaderPage />;
  return null;
};

export default AuthHandler;
