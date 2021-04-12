import React from 'react';

const Country = (props) => {
   // console.log(props.countries);
   const {name,capital,population,region,flag}=props.countries
   const flagStyle={height:'50px'}
   const countryStyle={border: '2px solid black',margin: '10px',height:'300px',width:'350px'}
    const handleAddCountry=props.handleAddCountry;
    return (
        <div style={countryStyle}> 
            <h3>{name}</h3>
            <img  style={flagStyle} src={flag} alt=""/>
            <h4>{capital}</h4>
            <p>{population}</p>
            <p><small>{region}</small></p>
            <button onClick={()=>handleAddCountry(props.countries)} >Add Country</button>
        </div>
    );
};

export default Country;