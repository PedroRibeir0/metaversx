import { useState } from "react";

export default function Units() {
  const UnitsList = [
    {
      pos: 1,
      name: 'Maze Game',
      image: '/images/maze-game.png',
      player: '/images/player.svg'
    },
    {
      pos: 2,
      name: 'Overdrive Rent',
      image: '/images/overdrive-rent.png',
      player: '/images/player.svg'
    },
    {
      pos: 3,
      name: 'Dao Launchpad',
      image: '/images/dao-launchpad.png',
      player: '/images/player.svg'
    },
    {
      pos: 4,
      name: 'Pink Devil',
      image: '/images/pink-devil.png',
      player: '/images/player.svg'
    },
    {
      pos: 5,
      name: 'Infected',
      image: '/images/infected.png',
      player: '/images/player.svg'
    }
  ];
  
  const [selected, setSelected] = useState(2);

  function handleLeft() {
    if (selected === 1){
        setSelected(5)
        return
    };
    setSelected(selected - 1);
  }

  function handleRight() {
    if (selected === 5){
        setSelected(1)
        return
    };
    setSelected(selected + 1);
  }

  function changeCardSelected(e){
    let id = Number(e.currentTarget.id)
    setSelected(id)
  }

  const reorderedUnitsList = [
    UnitsList.filter(item => item.pos !== selected)[0],
    UnitsList.filter(item => item.pos !== selected)[1],
    UnitsList.find(item => item.pos === selected),
    UnitsList.filter(item => item.pos !== selected)[2],
    UnitsList.filter(item => item.pos !== selected)[3],
  ];

  return (
    <section className="units">
      <h2>Our Units</h2>
      <ul className="cards-container ">
        {reorderedUnitsList.map((item) => (
          <li
            className={`card ${item.pos === selected ? 'selected' : ''}`}
            id={item.pos}
            key={item.pos}
            onClick={changeCardSelected}
          >
            <img src={item.image} alt={item.name} className="card-image" />
            <div className="player">
              <img src={item.player} alt="player" className="player-photo" />
              <span className="player-pos">{`#${item.pos}nd Unit`}</span>
            </div>
            <div className="card-name">
              <span className="name">{item.name}</span>
              <img src="/images/arrow-icon.svg" alt="arrow-icon" className="arrow-icon" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}