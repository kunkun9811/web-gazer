/* Handles and stores current CLIENT dimensions */
// NOTE: this *width* does NOT include "scrollbar"
import { useState, useEffect } from "react";

function getClientDimensions() {
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;
  return {
    width,
    height,
  };
}

const ClientDimensions = () => {
  const [clientDim, setClientDim] = useState(getClientDimensions());

  useEffect(() => {
    function handleResize() {
      setClientDim(getClientDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log("*****clientDim document.documentElement*****");
    console.log(`clientWidth= ${document.documentElement.clientWidth}`);
    console.log(`clientHeight= ${document.documentElement.clientHeight}`);
    console.log("\n\n");
  }, [clientDim]);

  return clientDim;
};

export default ClientDimensions;
