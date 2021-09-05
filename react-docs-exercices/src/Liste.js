import React from 'react'

export default function Liste(props) {
  return (
    <ul>
      {props.tab.map((el,i) => <li>{i}. {el}</li>)}
    </ul>
  )
}
