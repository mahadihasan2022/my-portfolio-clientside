import React, { useContext } from "react";
import questionsSvg from "../image/svg/questions.svg";
import loginSvg from "../image/svg/login.svg";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AdminContext } from "../App";
import { firebaseInit } from "../firebase/firebase.confiq";
import { SocialIcon } from "react-social-icons/build/react-social-icons";

firebaseInit();
const Login = () => {
  const [admin, setAdmin] = useContext(AdminContext);
  const googleSignInHandler = () => {
    if (window.confirm("Are you Sure you are owner This website?")) {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((res) => {
          setAdmin(res?.user);
          if (res?.user?.email !== "mahadihasanmim72@gmail.com") {
            alert(
              "Sorry You cannot Add Products and Blogs. This router is private only owner can access Route"
            );
          }
          console.log(admin);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="text-center container mt-5 mb-5 text-info">
      <h2 className="text-center mt-5 pb-2 border-bottom border-info border-5 ">
        Who are You?
      </h2>
      <div className="text-center">
        <img className="w-50" src={questionsSvg} alt="" />
      </div>
      <h2 style={{ color: "gray" }}>
        Sorry You cannot add any projects or blogs. Because this route is
        private. Only website owners can add projects and blogs.
      </h2>
      <h2 className="text-center mt-5 pb-2 border-bottom border-info border-5">
        Login
      </h2>
      <div className="text-center">
        <img className="w-50" src={loginSvg} alt="" />
      </div>
      <h2 style={{ color: "gray" }}>Only Project Owners can Login</h2>
      <button
        onClick={googleSignInHandler}
        className="btn btn-info rounded-pill mt-5 mb-5 form-control"
      >
        <SocialIcon
          url="https://google.com"
          bgColor="black"
          fgColor="white"
        ></SocialIcon>
        Google Sign In
      </button>

      <div className="m-4">
        <a
          className="btn btn-outline-info m-1"
          href="https://github.com/mahadihasan2022/mahadi-portfolio-client"
          target="_blank"
          rel="noopener noreferrer"
        >
          Client site Code
        </a>
        <a
          className="btn btn-outline-info m-1"
          href="https://github.com/mahadihasan2022/my-portfolio-serverside"
          target="_blank"
          rel="noopener noreferrer"
        >
          Server site Code
        </a>
      </div>
    </div>
  );
};

export default Login;
