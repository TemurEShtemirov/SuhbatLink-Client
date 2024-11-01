import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/css/main.module.css';

const FIELDDS = {
  NAME: "name",
  ROOM: "room"
};

export default function Main() {
  const { NAME, ROOM } = FIELDDS;
  const [values, setValues] = useState({ [NAME]: "", [ROOM]: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  console.log(values);
  const handleClick = (e) => {
    const isDisabled = Object.values.some(value => !value)

    if (isDisabled) e.preventDefault()

  }
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h1>Suhbat.Link</h1>
        <form className={styles.form}>
          <h1 className={styles.heading}>Join</h1>
          <div className={styles.group}>

            <input
              id="name"
              type="text"
              name="name"
              value={values[NAME]}
              placeholder='Name'
              className={styles.input}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          <div className={styles.group}>

            <input
              id="room"
              type="text"
              name="room"
              value={values[ROOM]}
              placeholder="Room"
              className={styles.input}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          <Link to={`/chat?name=${values[NAME]}&room=${values[ROOM]}`}>
            <button onClick={handleClick} type="submit" className={styles.button}>Sign In</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
