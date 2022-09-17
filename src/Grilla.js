import { isEmpty } from "lodash";
import React, { useState } from "react";

function generarId(longitud) {
  let id = "";
  const CARACTERES =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < longitud; i++) {
    id += CARACTERES.charAt(Math.floor(Math.random() * CARACTERES.length));
  }

  return id;
}

const datos = [
  {
    id: 1,
    name: "Buenos Aires",
  },
  {
    id: 2,
    name: "Cordoba",
  },
  {
    id: 3,
    name: "Misiones",
  },
];

export const Grilla = () => {
  const [data, setData] = useState("");
  const [cities, setCities] = useState(datos);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (isEmpty(data)) {
      console.log("data empty");
      return;
    }
    const newCity = {
      id: generarId(10),
      name: data,
    };

    setCities([...cities, newCity]);
    setData("");
  };

  const savecity = (e) => {
    e.preventDefault();
    if (isEmpty(data)) {
      console.log("data empty");
      return;
    }
    const editedCity = cities.map((item) =>
      item.id === id ? { id, name: data } : item
    );
    setCities(editedCity);
    setEdit(false);
    setData("");
    setId("");
  };

  const deleteCity = (id) => {
    const filterCity = cities.filter((data) => data.id !== id);
    setCities(filterCity);
  };

  const editCity = (theCity) => {
    setData(theCity.name);
    setEdit(true);
    setId(theCity.id);
  };

  return (
    <div className="container mt-5">
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de Provincias</h4>
          <ul className="list-group">
            {cities.map((data) => (
              <li className="list-group-item">
                <span className="lead">{data.name}</span>
                <button
                  className="btn btn-danger btn-sm float-right mx-2"
                  onClick={() => deleteCity(data.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning btn-sm float-right"
                  onClick={() => editCity(data)}
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Agregar Provincia</h4>
          <form onSubmit={edit ? savecity : addTask}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Agregar Provincia"
              onChange={(text) => setData(text.target.value)}
              value={data}
            />
            <button
              className={
                edit
                  ? "btn - btn-warning btn-block"
                  : "btn - btn-dark btn-block"
              }
              type="Submit"
            >
              {edit ? "Guardar" : "Agregar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
