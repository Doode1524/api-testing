import React, { useState, useEffect } from "react";

const Cases = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    getCases();
  }, [cases]);

  const getCases = () => {
    fetch("https://covid-api.mmediagroup.fr/v1/cases")
      .then((res) => res.json())
      .then((data) => {
        let newCases = [];
        console.log(Object.keys(data), 'keys')
        Object.entries(data).map((d) => newCases.push(d));
        setCases(newCases);
        console.log(cases, "cases");
        console.log(data);
        debugger;
      });
  };

  return <div>Hello Cases</div>;
};

export default Cases;
