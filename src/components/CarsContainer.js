import { useState, useEffect } from "react";
import CarCard from "./CarCard";
import CarForm from "./CarForm";

const mockFetchData = [];

export default function CarsContainer() {
  const [cars, setCars] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCars(mockFetchData);
      console.log("data fetched!");
    }, 3000);
    return function () {
      clearTimeout(timer);
    };
  }, []);

  function handleAddCar(newCar) {
    if (cars) {
      setCars([...cars, newCar]);
    } else {
      setCars([newCar]);
    }
  }

  return (
    <div>
      {cars === null ? (
        <div>Loading</div>
      ) : cars.length === 0 ? (
        <div>No cars found, fill out the form</div>
      ) : (
        cars.map((car) => <CarCard car={car} />)
      )}
      <CarForm handleAddCar={handleAddCar} />
    </div>
  );
}
