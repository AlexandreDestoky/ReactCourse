import React from "react";

export default function TableProduit(props) {
  const categories = [...new Set(props.data.map(el => el.category))];
  console.log(categories);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {categories.map(el => (
          <>
            <tr key={el + "fin"}>
              <th>{el}</th>
            </tr>
            {props.data
              .filter(x => x.category === el)
              .map(x => (
                <tr key={x.name}>
                  <td key={x.name + "test"}style={!x.stocked ?{color:"red"}: {}}>{x.name}</td>
                  <td>{x.price}</td>
                </tr>
              ))}
          </>
        ))}
      </tbody>
      {/*
        <tr>
          <th>Sporting</th>
        </tr>
        <tr>
          <td>Football</td>
          <td>49.99$</td>
        </tr>
        <tr>
          <td>Baseball</td>
          <td>4.9$</td>
        </tr>
        <tr>
          <th>Electronics</th>
        </tr> */}
    </table>
  );
}
