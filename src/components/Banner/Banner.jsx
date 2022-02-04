import './Banner.css'

export function Banner() {
    return (
        <div className="Banner">
            <p className="Banner__ListenMusic">Слушай музыку в приложении</p>
            <button className="Banner__CloseButton"><img src="/assets/images/CloseButton.svg" alt="CloseButton"/></button>
            <p className="Banner__CompanyName">ZAYCEV.NET</p>
            <button className="Banner__MonthForFreeButton">МЕСЯЦ БЕСПЛАТНО</button>
            <img className="Banner__LogoRabbit" src="/assets/images/LogoRabbit.svg" alt="LogoRabbit"/>
        </div>
    )
}