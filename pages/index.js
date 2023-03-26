export default function Home() {
  const words = [
    "dog",
    "wall",
    "powerbank",
    "teacher",
    "dentist",
    "remember",
    "sugar",
    "camera",
    "plant",
    "suitcase",
    "heater",
  ];
  return (
    <>
      <div className="main">
        <div className="list">
          <div className="background">
            <ul className="words">
              {words.map((item, id) => (
                <li className="word" key={id}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
