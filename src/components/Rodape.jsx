import React from "react";

export default function Rodape(props) {
  return (
    <>
      <footer>
        <ul>
          {props.listaProps.map((li, index) => (
            <li key={index}>{li}</li>
          ))}
        </ul>
        <p>&copy; 2021, Vite.js and React.</p>
      </footer>
    </>
  );
}