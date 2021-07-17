import React, {useState, useEffect}  from 'react'

const Search = ({ setApiUrl }) => {
    const[filters, setFilters] = useState({
        gender:"",
        status:""
    });

    useEffect( () => {
       setApiUrl(`https://rickandmortyapi.com/api/character/?gender=${
        filters.gender || ""
      }&status=${filters.status || ""}`) 
    },[filters]);


    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
      };

    return (
        <section className='search'>
            <form className="center">
                <select id="gender" name="gender" value={filters.gender} onChange={handleChange}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>

                <select id="status" name="status" value={filters.status} onChange={handleChange}>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknown">unknown</option>
                </select>

            </form>
        </section>
    )
}

export default Search
