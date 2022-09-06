import React from 'react';

const Table = ({ data }) => {

  const genderFormat = (gender) => {
    if (gender === "Female") {
      return 'F'
    }
    if (gender === "Male") {
      return 'M'
    }
    if (gender === "Genderfluid") {
      return 'GF'
    }
    if (gender === "Genderqueer") {
      return 'GQ'
    }
    if (gender === "Agender") {
      return 'A'
    }
    if (gender === "Bigender") {
      return 'BG'
    }
    if (gender === "Non-binary") {
      return 'NB'
    }
    if (gender === "Polygender") {
      return 'PG'
    }
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d) => (
          <tr key={d.id}>
            <td>{d.first_name}</td>
            <td>{d.last_name}</td>
            <td>{d.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
