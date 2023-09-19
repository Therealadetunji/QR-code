import React from "react";
import image from "./assets/images/image-qr-code.png";
import "./App.css";

const App = () => {
  return (
    <section>
      <div className="container max-w-sm overflow-hidden shadow-lg mx-auto my-4 p-5 
      ">
          <img src={image} alt="QR Code" className="rounded" />
          <div className="text-center">
            <h2 className="header text-2xl mt-3
            ">
              Improve your front-end skills by building projects
            </h2>
            <p className="paragraph text-sm text-xl mt-5 mb-5
            ">
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
          </div>
      </div>
    </section>
  );
};

export default App;
