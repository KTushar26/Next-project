
import Data from "./data";
import NotInData from "./notInData";


const CityList = async ({ city }) => {
  const res = await fetch(`http://localhost:3000/temperatureData?city=${city}`);
  const json = await res.json();
  if (!json || json.length === 0) {
    return <NotInData/>;
  }
  return (
    <div>
      {json.map((city) => {
        return <Data key={city.id} city={city} />;
      })}
    </div>
  );
};

export default CityList;
