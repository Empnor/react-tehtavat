import { useEffect, useState } from 'react'
import axios from 'axios';

const checkValidity = (obj, arr) => {
  for (var j = 0; j < arr.length; j++) {
    if(arr[j].nimi === obj.nimi, arr[j].numero === obj.numero){
      return true;
    }
  }
  return false;
}

const Filtered = (props) => {
    return(
      <div>
        filter shown with <input type='text' onChange={props.func}/>
      </div>
    )
}

const PersonForm = (props) => {
  return(
    <div>
      
          nimi: <input onChange={(i) => props.setNewnimi(i.target.value)}/><br/>
          numero: <input onChange={(i) => props.setNewnumero(i.target.value)}/>
        
        
          <button type="submit">lisää</button>
        
    </div>
  )
}
const Persons = (props) => {
  return(
    <div>
      {
        props.filter == "" 
          props.persons.map((person) =>
          <p>{person.nimi  + " "}{person.numero}</p>)
          :
          props.filteredPersons.map((person) =>
          <p>{person.nimi  + " "} {person.numero}</p>)
         
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
  
  useEffect(() => {
    axios.get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
    .catch(error => {
      console.error("Error fetching data:", error)
    })
  }, []);

  const handleFilter = (e) => {
    setFilter(e.target.value)
    const result = persons.filter((person) =>
    person.nimi.toLowerCase().includes(filter.toLowerCase())
    )
    setFilteredPerson(result)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const obj = {nimi: newnimi, numero: newnumero};
    if (checkValidity(obj, persons)) {
      alert(`${newnimi} is already added to phonebook`)
      alert(`${newnumero} is already added to phonebook`)
    }else{
      setPersons([...persons, obj])
    }
    axios.post('http://localhost:3001/persons', obj)
    .then (response => {
      console.log('Data apended:', response.data);
    })
    .catch(error => {
      console.error('Error appending data:', error);
    })
  }

  return (
    <div>
      <h1>Puhelin luettelo</h1>

      <Filtered
        func={handleFilter}
      />
      <h2>Lisää</h2>

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
      />
    </div>
  )
}


export default App