import React from 'react'
import PropTypes from 'prop-types'
import Animal from './Animal';
import AddAnimal from "../containers/AddAnimal";

// const data = [{name: 'Harry', species: 'Cat', id: 0},
//     {name: 'Coco', species: 'Dog', id: 1},
//     {name: 'Jeff-Bob', species: 'Chicken', id: 2}];

const Animals = ({animals, onAnimalClick}) => (
    <div className="Animals">
        <h1>Animals</h1>
        <AddAnimal />
        <table className="Animal">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Species</th>
            </tr>
            {animals.map((animal) =>
                <Animal key={animal.id}
                        {...animal}
                        onClick={() => onAnimalClick(animal.id)}
                />
            )}
        </table>
    </div>
)

Animals.propTypes = {
    animallist: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onAnimalClick: PropTypes.func.isRequired
}

export default Animals;
