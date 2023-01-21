import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Countries></Countries>
        <Footer></Footer>
    </div>
  );
}







/* 
function Countries (){
  const [countries,setCountries] = useState([]);

  useEffect( () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data));
    
  }, [])
  console.log(countries)
  return(
    <div>
      <h2>Traveling around the world!!</h2>
      <h3>Countries available: {countries.length}</h3> 
      {
        countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
      }
    </div>
  )
}

function Country(props){
  return(
    <div>
      <h2>Name: {props.name.common}</h2>
      <h4>Capital: {props.capital}</h4>
    </div>
  )
}
*/

export default App;
