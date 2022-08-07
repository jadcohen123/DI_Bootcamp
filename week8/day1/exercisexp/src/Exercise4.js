import './Exercise4.css';

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

function Exercise4() {
  return (
    <div className="Exercise4">
    <h1 style={{color:'red',backgroundColor:'lightblue'}}>This is a Header</h1>
    <p className="para">This is a Paragraph</p>
    <a href={"https://www.w3schools.com"}>This is a Link</a>
    <h2 style={style_header}>This is a Form</h2>
    <h3>Enter your name:</h3>
    <input type={"text"}></input>
    <h3>Here is an Image:</h3>
    <img src={"https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"}></img>
    <h3>This is a List</h3>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
    </div>
  );
}

export default Exercise4;