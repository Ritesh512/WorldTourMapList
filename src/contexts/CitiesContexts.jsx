import { createContext, useEffect, useState,useContext } from "react";

const CitiesContext = createContext();

const BASEURL = "http://localhost:9000";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({})

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASEURL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("Their was an error in Loading data....");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id){
    try {
      setIsLoading(true);
      const res = await fetch(`${BASEURL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert("Their was an error in Loading data....");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities(){
  const context = useContext(CitiesContext);
  if(context===undefined) throw new Error("CitiesContext was used outside the cityProvider");

  return context;
}

export {CitiesProvider,useCities} ;