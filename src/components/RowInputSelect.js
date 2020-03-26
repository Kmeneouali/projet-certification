import React, { useState, useEffect } from "react";
import Axios from "axios";
const RowInputSelect = props => {
  const { label, stylePlus, id, handleChange, values } = props;
  const [countries, setCountries] = useState(null);

  // j'Appele l'API https://restcountries.eu/rest/v2/all, pour récupérer la liste des pays

  const getCountres = async () => {
    Axios.get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCountres();
  }, []);
  return (
    <div className={`rowInput ${stylePlus} `}>
      <label>
        {label} <i>*</i>
        <i className="infos"></i>
      </label>
      <div className="select">
        <select
          id={id}
          name={id}
          value={values[id]}
          onChange={handleChange(id)}
        >
          {countries &&
            countries.map((countrie, index) => {
              return (
                <option key={index} value={countrie.alpha2Code}>
                  {countrie.name.toUpperCase()}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};

export default RowInputSelect;
