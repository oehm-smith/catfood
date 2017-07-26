import React from 'react'

const Food = ({id,name,container}) => (
    <tr className="Food">
        <td>{id}</td>
        <td>{name}</td>
        <td>{container}</td>
    </tr>
)

export default Food;
