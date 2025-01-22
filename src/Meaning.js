import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3> {props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definiton, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definiton:</strong> {definiton.definition}
              <br />
              <em>
                <strong>{definiton.example}</strong>
              </em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
