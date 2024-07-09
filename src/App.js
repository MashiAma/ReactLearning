import './App.css';

function App() {

  const title = "This is My new Blog";
  const likes = 50;
  const person = {
    name: "Amashi",
    Age: 25
  }
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1> {title}</h1>
        <p>Likes: {likes}</p>
        <p>Name : {person.name}</p>
        <p> {Math.random() * 100} </p>
        <p> [1, 2, 3, 4.5, 5]</p>
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
