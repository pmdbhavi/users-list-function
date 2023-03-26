import {useState} from 'react'
import UsersList from './components/UsersList'

import {Container,Heading,Input,Ul} from './styledComponents'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

const App=()=>{
  const [usersInput,setUsersInput]=useState("")
  const [list,setList]=useState(initialUserDetailsList)

  const onChangeInput=(event)=>{
    setUsersInput(event.target.value)
  }

  const searchResults=list.filter(each=>each.name.toLowerCase().includes(usersInput.toLowerCase()))
  
  const deleteUser = uniqueNo => {
    const filteredUserData = list.filter(
      each => each.uniqueNo !== uniqueNo,
    )
    setList(filteredUserData)
  }

  return(
    <Container>
      <Heading>Users List</Heading>
      <Input type="search" value={usersInput} onChange={onChangeInput}/>
      <Ul>
        {searchResults.map(each=>
        <UsersList details={each} key={each.uniqueNo} deleteUser={deleteUser}/>
          )}
      </Ul>
    </Container>
  )
}

export default App