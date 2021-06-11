import { useState } from "react";

export default function CarForm({ handleAddCar }) {
  const [formData, setFormData] = useState({ make: "", model: "" });

  function handleSubmit(e) {
    e.preventDefault();
    handleAddCar(formData)
  }

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Make: </label>
      <input name="make" value={formData.make} onChange={handleChange} />
      <label>Model: </label>
      <input name="model" value={formData.model} onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
}
