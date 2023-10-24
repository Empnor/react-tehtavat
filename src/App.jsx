import { useEffect, useState } from 'react'
import axios from 'axios';
import { getJson, exterminateJson, sendJson } from './Server';

const checkValidity = (obj, arr) => {
  for (let j = 0; j < arr.length; j++) {
    if(arr[j].nimi === obj.nimi || arr[j].numero === obj.numero){
      return true;
    }
  }
  return false;
}

const Filtered = (props) => {
    return(
      <div>
         <input type='text' onChange={props.func}/>
      </div>
    )
}

const PersonForm = (props) => {
  return(
    <div>
      <div>
          nimi: <input onChange={(i) => props.setNewnimi(i.target.value)}/><br/>
          numero: <input onChange={(i) => props.setNewnumero(i.target.value)}/>
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
    </div>
  )
}
const Persons = (props) => {
  return(
    <div>
      {
        props.filter == "" 
          props.persons.map((person) =>
          <div><p>{person.nimi  + " "}
          {person.numero}</p><button onClick={ () =>props.delete(person.id)}>Poista</button></div>)
          :
          props.filteredPersons.map((person) =>
          <div><p>{person.nimi  + " "}
          {person.numero}</p><button onClick={ () =>props.delete(person.id)}>Poista</button></div>)
         
      }
    </div>
  )
}
const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [newnimi, setNewnimi] = useState('')
  const [newnumero, setNewnumero] = useState('')
  const [filteredPersons, setFilteredPerson] = useState([])
  
  const updataData = async () => {
    try {
      const data = await getJson();
      setPersons(data);
      
    } catch (error) {
      console.error('Error fetching data:', error);
      
    }
  }


  useEffect(() => {
    updataData();
  }, [])


  const handleFilter = (i) => {
    setFilter(i.target.value)
    const result = persons.filter((person) =>
    person.nimi.toLowerCase().includes(filter.toLowerCase())
    )
    setFilteredPerson(result)
  }


  const handleSubmit = async (event) => {
    event.preventDefault()
    let copy = [...persons];
    let objekti = {
      nimi: newnimi,
      numero: newnumero,
      id: (persons.length+1)
    };
    if(checkValidity(objekti, copy)  ){
        objekti.numero = String(objekti.numero)
        copy.push(objekti)
        setPersons(copy)
    }
    
    console.log(objekti, checkValidity(objekti, copy))
    try {
      await sendJson(objekti);
      updataData()
    } catch (error) {
      console.error(error);
    }
  }

  const dataDelete = async (id) => {
    if(window.confirm("Haluatko varmasti poistaa numeron?")){
      try {
        await exterminateJson(id);
        await updataData()
      } catch (error) {
        console.error(error)
      }
    }    
  }



  return (
    <div>
      <h1>Puhelin luettelo</h1>

      <Filtered
        func={handleFilter}
      />
      <h2>Lisää uusi</h2>

      <form onSubmit={handleSubmit}>
        <PersonForm 
          setNewnumero={setNewnumero}
          setNewnimi={setNewnimi}
        />
      </form>


      <h2>Numerot</h2>
      <Persons 
        filteredPersons={filteredPersons}
        filter={filter}
        persons={persons}
        delete={dataDelete}
      />
    </div>
  )
}


export default App