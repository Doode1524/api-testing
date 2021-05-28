import React, { useState, useEffect } from "react";
import CasesList from '../components/CasesList'
import { connect } from 'react-redux'

const Cases = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    getCases();
  }, []);

  const getCases = () => {
    fetch("https://covid-api.mmediagroup.fr/v1/cases")
      .then((res) => res.json())
      .then((data) => {
        let countries = Object.entries(data).map((country) => ({
          [country[0]]: country[1].All,
        }));
        setCases(countries);
      });
  };
  // console.log(cases);

  if (cases.length === 0) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <CasesList cases={cases} />
    </div>
  );
};

const mapStateToProps = (state) =>{

}

export default connect(mapStateToProps, null)(Cases);

//  countries.map(data => {
//   console.log(Object.keys(data)[0])
//   return data[Object.keys(data)]
// })

// let newCases = [];
// console.log(Object.keys(data), 'keys')
// let arrVals = Object.values(data)
// console.log(arrVals, 'values')
// Object.entries(data).map((d) => newCases.push(d));
// setCases(arrVals);
// console.log(data);
