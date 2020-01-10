import React, { useState, useEffect } from 'react'
import countryService from './services/countries'


function App() {
  const [data, setData] = useState([])
  const [countryFilter, setCountryFilter] = useState('')


  useEffect(() =>  {
    countryService.getAll().then(data => {
      setData(data)
    })
  }, [])

  const countryNames = () => {
    const countryList = data.map(country => country.name).filter(name => name.toLowerCase().includes(countryFilter.toLowerCase()))
    console.log(countryList)
    if(countryList.length > 10) {
      return (
        <div>too many matches, specify another filter</div>
      ) 
    } else {
      return (
        <div>
          {countryList.map(country => {
            return (
            <div key={country.name}>
              {country} &nbsp;
            </div>)
          })}
        </div>

      )
    }
  }


  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setCountryFilter(event.target.value)
  }

  return (
    <div>
      find countries &nbsp;
      <input
        value = {countryFilter}
        onChange = {handleFilterChange}
      />
      <br></br>
      <br></br>
      {countryNames()}
    </div>
  )
}

export default App;
