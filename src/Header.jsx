import { useContext } from "react"
import { Content } from "./App";


export default function Header (){
const {products, sayHi} = useContext(Content);

  return (
    <>
      <div>hello</div>
      <button onClick={() => sayHi()}>Say Hi!</button>
    </>
  );
}