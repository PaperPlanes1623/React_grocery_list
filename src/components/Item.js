import React from 'react';

const styles = {
  item: {
    cursor: 'pointer',
  },
  complete: {
    color: 'grey',
    textDecoration: 'line-through',
  }
}

const Item = ({id, name, complete, handleClick}) => (
  <li
    style={ complete ? {...styles.item, ...styles.complete } : styles.item }
    onClick={ () => handleClick(id) }
  >
    {name}
  </li>
)

export default Item;