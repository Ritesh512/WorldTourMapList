import styles from "./Map.module.css";
import {useSearchParams,useNavigate} from "react-router-dom";

const Map = () => {
  const [searchParams,setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const navigate = useNavigate();

  function handleChange(e){
    setSearchParams({lat:50,lng:100});
  }

  return <div className={styles.mapContainer} onClick={()=>{navigate("form")}}>
    <h1>Map:</h1>
    <h1>Position: {lat}, {lng}</h1>
    <button onClick={handleChange}>Change Position</button>
  </div>;
};

export default Map;
