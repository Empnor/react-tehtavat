import { useState } from 'react'

const valid = (obj, arr) => {
  for (let j = 0; j < arr.length; j++) {
    if(arr[j].nimi === obj.nimi, arr[j].numero === obj.numero){
      return true;
    }
  }
  return false;
}

const App = () => {
  const [persons, setPersons] = useState([
    { nimi: 'Arto Hellas', numero: '040 2867465'  },
    { nimi: 'Ada Lovelace', numero: '39-44-5323523' },
    { nimi: 'Dan Abramov', numero: '12-43-234345' },
    { nimi: 'Mary Poppendieck', numero: '39-23-6423122' }
  ]) 
  
  const [filter, setFilter] = useState('')

  const filteredPersons = persons.filter((person) => 
  person.nimi.toLowerCase().includes(filter.toLowerCase())
  )

  const [newnimi, setNewnimi] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const obj = {nimi: newnimi, numero: newnumero};

    if (valid(obj, persons)) {
      alert(`${newnimi} is already added to phonebook`)
      alert(`${newnumero} is already added to phonebook`)
    }else{
      setPersons([...persons, obj])
    }
  }

  const [newnumero, setNewnumero] = useState('')

  return (
    <div>
      <h1>Puhelin luettelo</h1>
      <h2>haku</h2>
      <div>
      
      <input type='text' onChange={(i) => setFilter(i.target.value)}/>
      </div>
      <h2>Lisää uusi</h2>
      <form onSubmit={handleSubmit}>
          Nimi: <input onChange={(i) => setNewnimi(i.target.value)}/><br/>
          Numero: <input onChange={(i) => setNewnumero(i.target.value)}/>
          <button type="submit">Lisää</button>
      
      </form>
      <h2>Numerot</h2>
      {filteredPersons.map((persons) => 
      <p>{persons.nimi  + " "} {persons.numero}</p>)}
    </div>
  )
}

export default App