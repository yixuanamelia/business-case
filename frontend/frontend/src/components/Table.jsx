import "./Table.css";
import React, { useEffect, useState } from "react";

export const Table = ({cities}) => {

  return (
    <div id="cities-table-wrapper">
      <table>
        <thead>
          <tr>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {cities?.map((city, index) => (
            <tr key={index}>
              <td>{city.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
