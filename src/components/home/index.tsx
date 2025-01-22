import Header from "../header/Header";
import HeroBanner from "../heroBanner/HeroBanner";
import Body from "../Body/Body";
import Footer from "../header/footer/footer";
import { useEffect, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { userContext, USER } from "../../context/userContext";

const Home = () => {
  const { setUser } = useContext(userContext) as USER;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUser(uid);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <>
      <Header />
      <HeroBanner />
      <Body />
      <Footer />
    </>
  );
};

export default Home;
