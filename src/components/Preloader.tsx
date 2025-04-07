import { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 1500); // durée du preload

    return () => clearTimeout(timeout);
  }, []);

  return !loaded ? <div id="preloader"></div> : null;
};

export default Preloader;
