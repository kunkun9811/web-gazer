/* Handles and stores current VIEWPORT/BROWSER dimensions */
// NOTE: this *width* includes "scrollbar"
import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const BrowserDimensions = () => {
  const [browserDim, setBrowserDim] = useState(getWindowDimensions());

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
