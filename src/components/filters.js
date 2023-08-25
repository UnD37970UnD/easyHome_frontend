import React, { useState } from 'react';

function Filters({ ApplyFilters }) {
  const [pricefrom, setPriceFrom] = useState('0');
  const [priceto, setPriceTo] = useState('1000000');
  const [city, setCity] = useState('');
  const [propertyType, setPropertyType] = useState('de_inchiriat');
  const [rooms, setRooms] = useState('')
  const [sort, setSort] = useState('')

  var apiUrl = 'https://easyhome-1-y9546418.deta.app/api/v1/'
  
  const handleApplyFilters = () => {
    apiUrl = apiUrl + propertyType +"/"
    if(city==="")
    {
        apiUrl=apiUrl+"?"
    }
    else{
        apiUrl=apiUrl+city+"/?"
    }
    apiUrl=apiUrl+"Camere="+rooms+"&from_price="+pricefrom+"&to_price="+priceto+"&sort="+sort+"&skip=0&lenght=40"
    ApplyFilters(apiUrl);
  };

  return (
    <div>
    <form>
    <div className='form-floating m-2'>
        <select
        className='form-select'
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        >
            <option value="">Cele mai noi</option>
            <option value="lowest_price">Crescator</option>
            <option value="highest_price">Descrescator</option>
        </select>
        <label className='floatingSelect'>Sortare</label>
    </div>
      
    <h5 className='text-start ms-2'>Filtere</h5>
      <div className='form-row position-relative from-group m-2 border rounded' style={{"height":"auto", "paddingTop":"15px"}}>
      <label 
        className="position-absolute top-0 start-0"
        style={{"pointerEvents": "none","padding": "1rem .75rem","color": "rgba(var(--bs-body-color-rgb),.65)","transform": "scale(.85) translateY(-.5rem) translateX(.15rem)","transition": "opacity .1s ease-in-out,transform .1s ease-in-out","transformOrigin": "0 0" ,"zIndex":"3"}}>
        Pret:
      </label>
        <div className='input-group'>
            <span class="input-group-text mt-1 border-0" style={{"backgroundColor": "#fff"}}>€</span>
            <input
            className='form-control mt-1 border-0'
            type="number"
            placeholder='de la'
            value={pricefrom}
            onChange={(e) => setPriceFrom(e.target.value )}
            />
            <input
            type="number"
            placeholder='pana la'
            className='form-control mt-1 border-0'
            value={priceto}
            onChange={(e) => setPriceTo(e.target.value)}
            />
        </div>
      </div>
      <div className='form-floating m-2'>
        <select
          className='form-select'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
            <option value="Bucuresti">Bucuresti</option>
            <option value="Alba">Alba</option>
            <option value="Arad">Arad</option>
            <option value="Arges">Arges</option>
            <option value="Bacau">Bacau</option>
            <option value="Bihor">Bihor</option>
            <option value="Bistrita-Nasaud">Bistrita-Nasaud</option>
            <option value="Botosani">Botosani</option>
            <option value="Braila">Braila</option>
            <option value="Brasov">Brasov</option>
            <option value="Buzau">Buzau</option>
            <option value="Calarasi">Calarasi</option>
            <option value="Caras-Severin">Caras-Severin</option>
            <option value="Cluj">Cluj</option>
            <option value="Covasna">Covasna</option>
            <option value="Constanta">Constanta</option>
            <option value="Dambovita">Dambovita</option>
            <option value="Dolj">Dolj</option>
            <option value="Galati">Galati</option>
            <option value="Giurgiu">Giurgiu</option>
            <option value="Gorj">Gorj</option>
            <option value="Hargita">Hargita</option>
            <option value="Hunedoara">Hunedoara</option>
            <option value="Ialomita">Ialomita</option>
            <option value="Iasi">Iasi</option>
            <option value="Maramures">Maramures</option>
            <option value="Mehedinti">Mehedinti</option>
            <option value="Mures">Mures</option>
            <option value="Neamt">Neamt</option>
            <option value="Olt">Olt</option>
            <option value="Prahova">Prahova</option>
            <option value="Satu Mare">Satu Mare</option>
            <option value="Sibiu">Sibiu</option>
            <option value="Suceava">Suceava</option>
            <option value="Teleorman">Teleorman</option>
            <option value="Timis">Timis</option>
            <option value="Tulcea">Tulcea</option>
            <option value="Valcea">Valcea</option>
            <option value="Vaslui">Vaslui</option>
            <option value="Vrancea">Vrancea</option>
            <option value="Ilfov">Ilfov</option>
            <option value="Salaj">Salaj</option>
        </select>
        <label htmlFor="floatingSelect">Oras:</label>
        
      </div>
      <div className='form-floating m-2'>
        <select
         className='form-select'
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option value="de_vanzare">Achizitionare</option>
          <option value="de_inchiriat">Inchiriere</option>
        </select>
        <label htmlFor="floatingSelect">Tip tranzactie:</label>
      </div>
      <div className='form-floating m-2'>
        <select
          className='form-select'
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
        >
            <option value="1">Garsoniera</option>
            <option value="2">2 camere</option>
            <option value="3">3 camere</option>
            <option value="4+">4+ camere</option>
        </select>
        <label htmlFor='floatingSelect'>Numar de camere:</label>
      </div>
    </form>
    <button className="btn btn-primary" onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
}

export default Filters;