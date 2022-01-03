import initAuth from "../Firebase/init";
import { GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

initAuth()

const useFirebase = () => {

    const [user,setUser] = useState({})
    const [error,setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    // providers 
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handleGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, provider)
        .finally(() => setIsLoading(false))
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
          });
          return () => unsubscribe;
    },[])


      const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            
        })
        .finally(() => setIsLoading(false))
      }

    return {
        handleGoogle,user,error,setUser,setError,logOut,isLoading
    }
};

export default useFirebase;