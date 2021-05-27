import CasesList from './components/CasesList'
import CasesContainer from './containers/CasesContainer'
import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <CasesContainer />
    </div>
  );
}

export default App;
