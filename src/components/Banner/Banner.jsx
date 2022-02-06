import "./Banner.css";
import { useState } from "react";
import cn from "classnames";

export function Banner(props) {
  const [isClosed, SetIsClosed] = useState(false);

  function ClosedHandle() {
    SetIsClosed(true);
  }

  return (
    <div className={isClosed ? "Hidden" : cn("Banner", props.style)}>
      <p className={cn("Banner__ListenMusic", props.style)}>Слушай музыку в приложении</p>
      <button onClick={ClosedHandle} className={cn("Banner__CloseButton", props.style)}>
        <img src="/assets/images/CloseButton.svg" alt="CloseButton" />
      </button>
      <p className={cn("Banner__CompanyName", props.style)}>
        ZAYCEV<span className={cn("Banner__YellowDot", props.style)}>.</span>NET
      </p>
      <button className={cn("Banner__MonthForFreeButton", props.style)}>МЕСЯЦ БЕСПЛАТНО</button>
      <img
        className={cn("Banner__LogoRabbit", props.style)}
        src="/assets/images/LogoRabbit.svg"
        alt="LogoRabbit"
      />
    </div>
  );
}
