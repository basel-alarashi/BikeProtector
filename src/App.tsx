import './App.css'
import BikesList from './components/BikesList'
import RootLayout from './layout/RootLayout'

function App() {
  return (
    <div id='root'>
      <RootLayout>
        <BikesList />
      </RootLayout>
    </div>
  )
}

export default App
