import React, { useState, useEffect } from "react";

const Search = ({ setApiUrl }) => {
  const [filters, setFilters] = useState({
    name:"",
    gender: "",
    status: "",
  });

  useEffect(() => {
    setApiUrl(
      `https://rickandmortyapi.com/api/character/?name=${
          filters.name || ""
      }&gender=${
        filters.gender || ""
      }&status=${filters.status || ""}`
    );
  }, [filters]);

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="search">
      <h2>Search</h2>
      <form className="form-box">
        <div className="form-input">
          <label>Name:</label>
          <input 
          type="text"
          id="name"
          name="name"
          value={filters.name}
          onChange={handleChange}
          ></input>
        </div>

        <div className="form-select-group">
          <div className="form-select">
            <label>Gender:</label>
            <select
              id="gender"
              name="gender"
              value={filters.gender}
              onChange={handleChange}
            >
              <option value="">All</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="genderless">Genderless</option>
              <option value="unknown">unknown</option>
            </select>
          </div>

          <div className="form-select">
            <label>Status:</label>
            <select
              id="status"
              name="status"
              value={filters.status}
              onChange={handleChange}
            >
              <option value="">All</option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">unknown</option>
            </select>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Search;
