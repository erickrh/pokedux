import './App.css'
import { Searcher } from './components/Searcher';
import { PokemonList } from './components/PokemonList';
import { Col } from 'antd';
import { ReactComponent as Logo } from './statics/logo.svg';

function App() {

  return (
    <div className="app">
      <Col span={4} offset={10}>
        <Logo className='Logo' />
      </Col>

      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      
      <PokemonList />
    </div>
  )
}

export default App
