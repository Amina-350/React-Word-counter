import React, {useState} from "react";

export default function Formarea(props) {
  const [text, setText]=useState('Enter text here');
  const uppercasechange=()=>{
    const newtext=text.toUpperCase();
    setText(newtext);


  } 
  const handleChange=(event)=>{
    console.log("onchange");
     setText(event.target.value);
  }
  return (
   <>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-12">
          <h3>{props.heading}</h3>
            <form>
              <div class="form-group">
               
                <textarea class="form-control" id="myBox" onChange={handleChange} value={text} rows="8"></textarea>
              </div>
              <div className="btn btn-primary mt-3" onClick={uppercasechange}>Convert to uppercase</div>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col md-12">
            <h2>Your text summary here</h2>
            <p id="p1">{text.split(" ").length} words and {text.length} Characters in your pargaraph</p>
            <p>You can read it in {0.008*text.split(" ").length} mintunes</p>
          </div>
        </div>
      </div>
   </> 
  );
}
