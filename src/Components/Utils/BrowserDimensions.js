/* Handles and stores current viewport/browser dimensions */
import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const BrowserDimensions = () => {
  const [browserDim, setBrowserDim] = useState(getWindowDimensions);

  useEffect(() => {
    function handleResize() {
      setBrowserDim(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log(`*****BrowserDim*****`);
    console.log(browserDim);
  }, [browserDim]);

  return browserDim;
};

export default BrowserDimensions;
