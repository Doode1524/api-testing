import { GET_CASES, GET_VACCINES } from "../actions/types";

const INITIAL_STATE = { cases: [], vaccines: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CASES:
      return { ...state, cases: action.payload };
    case GET_VACCINES:
      return { ...state, cases: action.payload };
    default:
      return state;
  }
};

// const getCases = () => {
//     fetch("https://covid-api.mmediagroup.fr/v1/cases")
//       .then((res) => res.json())
//       .then((data) => {
//         let countries = Object.entries(data).map((country) => ({
//           [country[0]]: country[1].All,
//         }));
//         setCases(countries);
//       });
//   };
