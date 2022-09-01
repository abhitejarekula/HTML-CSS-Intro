import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Tag from './components/common/Tag';
import LoginForm from './components/LoginForm';
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
       <Form />
       <Tag />
       <LoginForm />
    </div>
  );
}

export default App;
