import { GET_CASES } from '../actions/types'

const INITIAL_STATE = {cases: []}

export default () => {

}

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