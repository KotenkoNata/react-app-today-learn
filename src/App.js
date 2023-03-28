import './style.css';
import CategoryFilter from "./components/CategoryFilter";
import NewFactForm from "./components/NewFactForm";
import FactList from "./components/FactList";
function App() {
    const appTitle = 'Today I Learned';
  return (
      <>
          <header className="header">
            <div className="logo">
              <img
                  src="./img/logo.png"
                  height="68"
                  width="68"
                  alt="Today I Learned Logo"
              />
              <h1>{appTitle}</h1>
            </div>
            <button className="btn btn-large btn-open">Share a fact</button>
          </header>
          <NewFactForm />
          <main className='main'>
              <CategoryFilter />
              <FactList></FactList>
          </main>
      </>
  )};

export default App;
