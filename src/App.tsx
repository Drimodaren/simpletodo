
import { Provider } from 'react-redux'
import './App.css'
import Todo from './Todo'
import store from './redux/store'


function App() {

  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  )
}

export default App
