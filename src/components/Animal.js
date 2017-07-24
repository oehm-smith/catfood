import React from 'react'

const Animal = ({id,name,species}) => (
    <tr className="Animal">
        <td>{id}</td>
        <td>{name}</td>
        <td>{species}</td>
    </tr>
)

export default Animal;
