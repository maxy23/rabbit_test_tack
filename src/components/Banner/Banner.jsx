import "./Banner.css";
import { useState } from "react";
import cn from "classnames";

export function Banner({ className }) {
  const [isClosed, SetIsClosed] = useState(false);

  function ClosedHandle() {
    SetIsClosed(true);
  }

  return (
    <div
      className={cn("Banner", className, {
        Hidden: isClosed,
      })}
    >
      <p className={cn("Banner__ListenMusic", className)}>
        Слушай музыку в приложении
      </p>
      <button
        onClick={ClosedHandle}
        className={cn("Banner__CloseButton", className)}
      >
        <img src="/assets/images/CloseButton.svg" alt="CloseButton" />
      </button>
      <p className={cn("Banner__CompanyName", className)}>
        ZAYCEV<span className={cn("Banner__YellowDot", className)}>.</span>NET
      </p>
      <button className={cn("Banner__MonthForFreeButton", className)}>
        МЕСЯЦ БЕСПЛАТНО
      </button>
      <img
        className={cn("Banner__LogoRabbit", className)}
        src="/assets/images/LogoRabbit.svg"
        alt="LogoRabbit"
      />
    </div>
  );
}
