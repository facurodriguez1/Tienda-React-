import { useState } from "react";
import "./Form.css";
const Form = ({ userData, setUserData, createOrder }) => {
  const handleKeyDown = (e) => {
    if (e.code === "Space") {
      e.preventDefault();
    }
  };

  return (
    <form onSubmit={createOrder}>
     <div class="mb-3">
         <h4>Complete sus datos por favor:</h4>
     </div>
     <div class="mb-3">
      <input
        type="text"
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        onKeyDown={handleKeyDown}
        placeholder="Nombre"
      />
      </div>
      <div class="mb-3">
      <input
        type="email"
        id="exampleInputEmail1"
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        onKeyDown={handleKeyDown}
        placeholder="Email"
      />
      </div> 
      <button type="submit" class="btn btn-success">Enviar</button>
    </form>
  );
};

export default Form;