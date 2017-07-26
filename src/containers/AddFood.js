import React from 'react'
import {connect} from 'react-redux'
import {addFood} from "../actions/index";

let AddFood = ({dispatch}) => {
    let inputName, inputContainer;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!inputName.value.trim()) {
                    return
                }
                dispatch(addFood(inputName.value, inputContainer.value))
                inputName.value = ''
                inputContainer.value = ''
            }}>
                Name: {' '}
                <input ref={node => {
                    inputName = node
                }}/>
                {' '}, Container: {' '}
                <input ref={node => {
                    inputContainer = node
                }}/>
                <button type="submit">
                    Add Food
                </button>
            </form>
        </div>
    )
}
AddFood = connect()(AddFood)

export default AddFood
