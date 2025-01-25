import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";
import "./Synonyms.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3> {props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <span className="definiton">{definition.definition}</span>
                <br />
                <span className="example">{definition.example}</span>
              </p>
            </div>
          );
        })}
        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
}
