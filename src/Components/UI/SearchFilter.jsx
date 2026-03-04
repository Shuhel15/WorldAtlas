export const SearchFilter = ({search, setSearch, filter, setFilter ,countries, setCountries})=>{

  const handleInputChnage =(event)=>{
    event.preventDefault()
    setSearch(event.target.value);
  }

  const handleSelectChange =(e)=>{
    e.preventDefault()
    setFilter(e.target.value)
  }

  const sortCountries = (value)=>{
    const sortCountry = [...countries].sort((a,b)=>{
      return value === "asc"
      ? a.name.common.localeCompare(b.name.common)
      : b.name.common.localeCompare(a.name.common)
    });
    setCountries(sortCountry)
  }
  return<section className="section-searchFilter container">
    <input 
    type="text"
    placeholder="search"
    value={search}
    onChange={handleInputChnage}
    />

    <div>
      <button onClick={()=> sortCountries("asc")}>Asc</button>
    </div>
    <div>
      <button onClick={()=> sortCountries("dec")}>Dec</button>
    </div>

    <div>
      <select className="select-section" value={filter}
      onChange={handleSelectChange}>
        <option value="all">All</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  </section>
}