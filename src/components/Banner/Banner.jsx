import "./Banner.css";
import { useState } from "react";

export function Banner() {
  const [isClosed, SetIsClosed] = useState(false);

  function ClosedHandle() {
    SetIsClosed(true);
  }

  return (
    <div className={isClosed ? "Hidden" : "Banner"}>
      <p className="Banner__ListenMusic">Слушай музыку в приложении</p>
      <button onClick={ClosedHandle} className="Banner__CloseButton">
        <img src="/assets/images/CloseButton.svg" alt="CloseButton" />
      </button>
      <p className="Banner__CompanyName">
        ZAYCEV<p className="Banner__YellowDot">.</p>NET
      </p>
      <button className="Banner__MonthForFreeButton">МЕСЯЦ БЕСПЛАТНО</button>
      <img
        className="Banner__LogoRabbit"
        src="/assets/images/LogoRabbit.svg"
        alt="LogoRabbit"
      />
    </div>
  );
}
