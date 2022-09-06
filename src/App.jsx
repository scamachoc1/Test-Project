import './App.css';
import { useMemo, useState } from 'react'
import Data from './Data.json'
import Table from './Table';

/**
 * This would be the sorttable component
 * ! yeah
 * ? WAAAAA
 * & xD
 * *Highlights
 * ^ wiii (Altgr + "{" + Space)
 * ~ (Altgr + "+")
 * TODO colores
 */

function App() {

  const [data, setData] = useState(Data);
  const [query, setQuery] = useState("");
  
  /**const keys = Object.keys(Data);
  console.log(keys) */
  const keys = [
    "first_name",
    "last_name",
    "email",
  ];
  /**
   * !Filter Method Explanation
   * This filter uses a functionallity built into JavaScript Objects
   * If you enter the key name to the Data[index] it will return the 
   * attribute,
   * Example: Data[0]["first_name"] => Cristobal
   * So the "keys" array will help us read through every key that we 
   * define in the "keys" array 
   * &(that is what the "some()" method does), 
   * then using the filtering method to return an object to display in 
   * the table.
   */
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  }
  return (
    <div className='main'>
      <input type="text" placeholder='Search...' className="search" onChange={e => setQuery(e.target.value)} />
      <Table data={search(Data)} />
    </div>
  );
}

export default App;
