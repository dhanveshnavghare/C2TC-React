import logo from './logo.svg';
import './App.css';
import Message from './component/Message';
// import Counter from './component/Counter';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       

        <Message/>


       {/* <Counter/> */}
       
        
      </header>
    </div>
  );
}

export default App;