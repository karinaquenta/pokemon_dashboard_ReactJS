
import Posts from './pages/Posts'
import { NavbarBootstrap } from './components/Header'
import List from './components/List'

 

function App() {
  

  return (
    <>
    <NavbarBootstrap/>
    <List items ={["Search", "Browse","Latest Evolution"]} render = {(item:string)=> <span className="bold">{item}</span>}/>
    <Posts/>
    </>
  )
}

export default App

