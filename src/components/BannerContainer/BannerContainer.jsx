import cn from "classnames";
import { useEffect, useState } from "react";
import { Banner } from "../Banner/Banner.jsx";

import "./BannerContainer.css";

const MIN_DETECT_PIXELS = 100;

export function BannerContainer() {
  const [isPageScrolled, setIsPageScrolled] = useState(false);

  function handlePageScroll() {
    if (scrollY >= MIN_DETECT_PIXELS) {
      setIsPageScrolled(true);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", handlePageScroll);

    return () => {
      document.removeEventListener("scroll", handlePageScroll);
    };
  });
  return (
    <div
      className={"BannerContainer"}
    >
      <Banner style = {isPageScrolled? "Transform" : null} />
    </div>
  );
}
