import { useEffect, useState } from 'react'
import { getJson, exterminateJson, sendJson } from './dbjson';


const valid = (obj, arr) => {
  for (var j = 0; j < arr.length; j++) {
    if(arr[j].nimi === obj.nimi || arr[j].numero === obj.numero){
      return true;
    }
  }
  return false;
}

const Filtered = (props) => {
    return(
      <div>
        <h2>filter shown with </h2>
        <input type='text' onChange={props.Filtteri}/>
      </div>
    )
}

const PersonForm = (props) => {
  return(
    <div>
      <div>
          nimi: <input onChange={(i) => props.setNewnimi(i.target.value)}/><br/>
          numero: <input onChange={(i) => props.setNewnumero(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </div>
  )
}
const Persons = (props) => {
  return(
    <div>
      {
        props.filter == "" ?
          props.persons.map((person) =>
          <div><p>{person.nimi  + " "}
          {person.numero}</p><button onClick={ () =>props.poista(person.id)}>Poista</button></div>)
          :
          props.filteredPersons.map((person) =>
          <div><p>{person.nimi  + " "} {person.numero}</p><button onClick={ () =>props.poista(person.id)}>Poista</button></div>)
         
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
  
  const [submit, setSubmit] = useState(false);
  const [poistadnimi, setpoistadnimi] = useState("")
  const [poistad, setpoistad] = useState(false);
  const [changed, setChanged] = useState(false);
  const [changednimi, setChangednimi] = useState(false);
  
  const updataData = async () => {
    try {
      const data = await getJson();
      setPersons(data);
      
    } catch (error) {
      console.error('Ongelma tuli datan etsimisessä:', error);
      
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
    let kopioi = [...persons];
    let objecti = {
      nimi: newnimi,
      numero: newnumero,
      id: (persons.length+1)
    };
    if(valid(objecti, kopioi)  ){
        objecti.numero = String(objecti.numero)
        kopioi.push(objecti)
        setPersons(kopioi)
    }

    console.log(objecti, valid(objecti, kopioi))
    try {
      await sendJson(objecti);
      setSubmit(true);
       
        
       
        
      
      
    setTimeout(() => {
      setSubmit(false);
    }, 2000);
      updataData()
    } catch (error) {
      console.error(error);
    }
  }

  const datapoista = async (id) => {
    if(window.confirm("Haluatko varmasti poistaa numeron?")){
      try {
        await exterminateJson(id);
        
        setpoistad(true);
        for (let u = 0; u < persons.length; u++ ) {
          if (id === persons[u].id) {
            setpoistadnimi(persons[u].nimi)
            break
          }
        }
        
      setTimeout(() => {
        setpoistad(false);
      }, 2000);
      await updataData()
      } 
      catch (error) {
        console.error(error)

      }
    }    
  }



  return (
    <div>
       <div>
          {
            submit ?
            <p>lisättiin {newnimi}</p>
            :
              poistad ?
                <p>postettiin {poistadnimi}</p>
              :
                changed ?
                  <p>Vaihdettiin {changednimi} </p>
                :
              <></>
          }
        </div>
 

      <h1>Puhelin luettelo</h1>

      <Filtered
        Filtteri={handleFilter}
      />
      <h2>Lisää uusi</h2>

      <form onSubmit={handleSubmit}>
        <PersonForm 
          setNewnumero={setNewnumero}
          setNewnimi={setNewnimi}
        />
      </form>


      <h2>numerot</h2>
      <Persons 
        filteredPersons={filteredPersons}
        filter={filter}
        persons={persons}
        poista={datapoista}
      />
    </div>
  )
}


export default App