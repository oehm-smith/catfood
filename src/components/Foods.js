import React from 'react'
import PropTypes from 'prop-types'
import Food from './Food';
import AddFood from "../containers/AddFood";

const Foods = ({foods, onFoodClick}) => (
    <div className="Foods">
        <h1>Foods</h1>
        <AddFood />
        <table className="Food">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Container</th>
            </tr>
            {foods.map((food) =>
                <Food key={food.id}
                        {...food}
                        onClick={() => onFoodClick(food.id)}
                />
            )}
        </table>
    </div>
)

Foods.propTypes = {
    foods: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        container: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onFoodClick: PropTypes.func.isRequired
}

export default Foods;
