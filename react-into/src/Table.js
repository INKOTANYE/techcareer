import react, {useState} from "react"
import './App.css';
import  {suppliers} from "./Data"

function App() {
  const [supp, setSupp]=useState(suppliers)

  const clearData= () => {
    setSupp()
  
  }

  const addData=() => {
    const newSupp={
      "id": 888,
      "companyName": "Tokyo Traders",
      "contactName": "Yoshi Nagase",
      "contactTitle": "Marketing Manager",
      "address": {
        "street": "9-8 Sekimai Musashino-shi",
        "city": "Tokyo",
        "region": "NULL",
        "postalCode": 100,
        "country": "Japan",
        "phone": "(03) 3555-5011"
      }
    }

    const err= supp.filter(s=>s.id == newSupp.id)
    err.length == 0 && setSupp([newSupp, ...supp])
  }

  return (
    <div className="App">

      <button onClick={addData}>ADD</button>
      <button onClick={clearData}>CLEAR</button>
      {supp ? 
      <table>
        <tr>
          <th> ID</th>
          <th> COMPANY NAME</th>
          <th> CONTACT NAME</th>
          <th> CITY</th>
        </tr> 
        {supp.map((supp,key) =>(
          <tr key={key}>
            <td>{supp.id}</td>
            <td>{supp.companyName}</td>
            <td>{supp.contactName}</td>
            <td>{supp.address.city}</td>
          </tr>
        ))}
      </table> 
      :
      <div>DATA DOES NOT EXIST! </div>
      }    
    </div>
  );
}

export default App;

