import React, { useState } from "react";
import "./styles.css";

/**
 * concept notes: styling in react
 */

/**
 * concept of hashmap (object as hashmap)
 * O(1) and why we are doing this.
 */
const emojiDictionary = {

"🦁" : " Lion",
"🐯": "Tiger Face",
"🐅" : "Tiger",
"🐆": "Leopard",
"🐴": "Horse Face",
"🐎": "Horse",
"🦄": "Unicorn",
"🦓": "Zebra",
"🦌": "Deer",

"🐮": "Cow Face",
"🐂":"Ox",
"🐃": "Water Buffalo",
"🐄": "Cow",
"🐷": "Pig Face",
"🐖": "Pig",
"🐗": "Boar",
"🐽": "Pig Nose",
"🐏": "Ram",
"🐑": "Ewe",
"🐐": "Goat",
"🐪": "Camel",
"🐫": "Two-Hump Camel",
"🦙": "Llama",
"🦒": "Giraffe",
"🐘": "Elephant", 

"🦏" :  "Rhinoceros",
"🦛" : "Hippopotamus",
"🐭" : "Mouse Face"
};

/**
 * Bonus feature
 * converting an object to array of keys
 */
const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("Sorry, this emoji is not in our database, Will Update soon!");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    /** concept 3 is onchange */
    <div className="App">
      <h1> Animals </h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji here"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2> {/** Concept 1: JSX */}
      <h3> {meaning} </h3> {/** how much part is re-rendered. */}
      {
        /** Bonus feature; if time permmits */
        /**
         * concepts to cover: mapping a list
         * click handler on list item
         */
        emojis.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem",
              cursor: "pointer"
            }}
          >
            {" "}
            {emoji}{" "}
          </span>
        ))
      }
    </div>
  );
}

