import { useState } from "react"

export default function Benefits() {

    const [benefits, setBenefits] = useState('upcoming')

    return (
    <section className="benefits">
        <h2>Scholarship Benefit</h2>
        <div className="up-comp">
            <span className="">Upcoming</span>
            <span className="">Completed</span>
        </div>
        <div className="benefits-info">
            <ul className="game">Game
                <li><div className="ball gray"></div>Play to earn</li>
                <li><div className="ball green"></div>Game Rental</li>
                <li><div className="ball orange"></div>Team Fight</li>
                <li><div className="ball dark-blue"></div>Investment</li>
                <li><div className="ball light-blue"></div>Ace Role</li>
                <li><div className="ball pink"></div>Early Access</li>
            </ul>
            <ul className="noted">Noted
                <li>Play blockchain game and get the profit</li>
                <li>The battleground will match you with teammates and opponents of similar levels</li>
                <li>Play blockchain game and get the profit with other members</li>
                <li>Invest asset on marketplace</li>
                <li>Be The Map</li>
                <li>Get early access to new game</li>
            </ul>
            <ul className="chance">Chance
                {[50,18,78,10,56,98].map(item=>{
                    return <li>{`${item}%`}</li>
                })}
            </ul>
            <ul className="all-time-profit">Profit
                {[309000, 1800, 112900, 901, 59091, 98000].map(item=>{
                    return <li>{`${item} BTC`}</li>
                })}
            </ul>
        </div>
    </section>
  )
}
