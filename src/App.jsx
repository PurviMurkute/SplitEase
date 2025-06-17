import React from "react";
import Header from "./components/Header";
import { Link } from "react-router";

const App = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen w-full bg-[#f9fafb] relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #d1d5db 1px, transparent 1px),
              linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-blue-800 text-5xl font-bold py-5">
            Split group expenses easily with SplitEase!
          </h1>
          <h3 className="text-blue-800 text-2xl font-bold py-5">Group trips, shared dinners, split bills — all in one place.</h3>
          <div className="bg-gray-100 w-[250px] my-10 p-10">
            <Link to='/addform'>
            <button className="bg-white px-4 py-2 text-xl font-bold text-blue-800 block mx-auto cursor-pointer hover:bg-blue-100">Start Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
