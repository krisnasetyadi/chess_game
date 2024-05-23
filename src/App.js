import { useReducer } from 'react';
import './App.css';
import Board from './components/board/board';
import AppContext from './context/context';
import { reducer } from './reducer/reducer';
import { initialGameState } from './contant';

function App() {
  const [appState, dispatch] = useReducer(reducer, initialGameState)

  const ProviderState = {
    appState,
    dispatch
  }
  return (
    <AppContext.Provider value={ProviderState}>
    <div className="App">
      <Board />
    </div>
    </AppContext.Provider>
  );
}

export default App;
