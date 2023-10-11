import React from "react";

const Footer = () => {
    return (
      <>
        <footer className="bg-gray-900 text-white py-10">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold">Download Our App</h3>
              <h1 className="text-3xl font-bold">
                M<b className="text-blue-400">oo</b>vie
              </h1>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">Navigation</h3>
              <p>Home</p>
              <p>My List</p>
              <p>About Us</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">Legal</h3>
              <p>General info</p>
              <p>Smart Gadget</p>
              <p>Bill Payment Verification</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">Contact Us:</h3>
              <p>support@egymoviees.com</p>
              <p>tel: +201045963322</p>
              <p>OR By Using:</p>
              <div className="flex justify-center">
              </div>
            </div>
            {/* <div className="text-center">
              <h3 className="text-3xl font-bold">Share Website Via:</h3>
              <p>Facebook</p>
              <p>Instagram</p>
            </div> */}
          </div>
          <hr className="my-8" />
          <p className="text-center text-gray-500">
            2023 Moovie. All Rights Reserved.
          </p>
        </footer>
      </>
    );
  };export default Footer;