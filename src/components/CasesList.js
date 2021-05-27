import React from "react";
import CasesContainer from '../containers/CasesContainer'

const CasesList = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Confirmed</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {props.cases.map((data) => (
            <tr>
              <td key={Object.keys(data)[0]}>{Object.keys(data)[0]}</td>
              <td>{data[Object.keys(data)].confirmed}</td>
              <td>{data[Object.keys(data)].deaths}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CasesList;
