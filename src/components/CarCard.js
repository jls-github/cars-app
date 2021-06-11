export default function CarCard({car}) {
  return (
    <div>
      <p>Car Make: {car.make}</p>
      <p>Car Model: {car.model}</p>
    </div>
  );
}
