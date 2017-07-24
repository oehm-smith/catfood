/**
 * Created by boss on 24/7/17.
 */
import React from 'react'
import { connect } from 'react-redux'
import { addAnimal } from '../actions'

let AddAnimal = ({ dispatch }) => {
    let inputName, inputSpecies;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!inputName.value.trim()) {
                    return
                }
                dispatch(addAnimal(inputName.value, inputSpecies.value))
                inputName.value = ''
                inputSpecies.value = ''
            }}>
                Name: {' '}<input ref={node => {
                    inputName = node
                }} />
                {' '}, Species: {' '}<input ref={node => {
                inputSpecies = node
            }} />
                <button type="submit">
                    Add Animal
                </button>
            </form>
        </div>
    )
}
AddAnimal = connect()(AddAnimal)

export default AddAnimal
