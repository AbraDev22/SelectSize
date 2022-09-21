import React, {useState} from 'react';
import {data} from '../Data';
import styled from "styled-components"

const Decoration = styled.div `
 display: flex;
 justify-content: center;
 background-color: teal`;

const Option = () => {
  const [values,
    setValues] = useState([])
  const handleChange = (e) => {
    setValues(e.target.value)
  }

  return (

    <Decoration>
      <select onChange={(e) => handleChange(e)}>
        {data.map((item) => (
          <option key={item.id} value={item.taille}>
            {item.taille}
          </option>
        ))}
      </select>

      <ul>
        {data.filter((item) => item.taille === values).map(item => <ul>
          <li >
            value : {item.value}
          </li>
          <li >
            dataStock : {item.dataStock}
          </li>
          <li >
            Price : {item.dataPrice}
          </li>
        </ul>)}
      </ul>
    </Decoration>
  );
}

export default Option;
