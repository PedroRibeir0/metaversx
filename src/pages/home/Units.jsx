import { useState, useEffect } from "react";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize(){
      setIsMobile(window.innerWidth < 645);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [selected, setSelected] = useState(3);

  function changeSelectedCard(e){
    let id = Number(e.currentTarget.id)
    setSelected(id)
  }

  const reorderedUnitsList = isMobile ? [
    UnitsList.filter(item => item.pos !== selected)[0],
    UnitsList.filter(item => item.pos !== selected)[1],
    UnitsList.find(item => item.pos === selected),
    UnitsList.filter(item => item.pos !== selected)[2],
    UnitsList.filter(item => item.pos !== selected)[3],
  ] : UnitsList;

  return (
    <section className="units">
      <h2>Our Units</h2>
      <ul className="cards-container ">
        {reorderedUnitsList.map((item) => (
          <li
            className={`card ${item.pos === selected ? 'selected' : ''}`}
            id={item.pos}
            key={item.pos}
            onClick={changeSelectedCard}
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