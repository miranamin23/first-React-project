function Store({ setMultiplier }) {
  const items = [
    {
      name: "Cursor",
      multiplierIncrease: 0.1,
    },
    {
      name: "Grandma",
      multiplierIncrease: 0.5,
    },
    {
      name: "Farm",
      multiplierIncrease: 1,
    },
  ];
  return (
    <>
      <div className="store">
        <span>Store</span>
        <div className="vlorp">
          {items.map((item) => (
            <button
              key={item.name}
              className="upgrade-button"
              onClick={() =>
                setMultiplier(
                  (prevMultiplier) => prevMultiplier + item.multiplierIncrease
                )
              }
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
export default Store;
