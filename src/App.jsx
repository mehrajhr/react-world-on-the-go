import { Suspense } from 'react';
import './App.css'
import Countries from './components/countries/Countries'
const promiseCountries = fetch('https://restcountries.com/v3.1/all').then(res => res.json());
function App() {
  return (
    <>
      <Suspense fallback={<h2>countries are coming.....</h2>}>
      <Countries  promiseCountries={promiseCountries}></Countries>
      </Suspense>
    </>
  )
}

export default App
