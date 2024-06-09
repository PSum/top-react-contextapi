import { useState, createContext } from 'react';
import './App.css'
import Header from './Header'

export const Content = createContext({
  products: [],
  sayHi: () =>{},
});

function App() {
const [products, setProducts] = useState([]);

function sayHi () {
  console.log('Hi!') 
};

  return (
    <>
    <Content.Provider value={{products, sayHi}}>
      <Header />
    </Content.Provider>
    </>
  )
}

export default App
