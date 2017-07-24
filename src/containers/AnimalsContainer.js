import { connect } from 'react-redux'
import { showFoods } from "../actions";
import Animals from "../components/Animals";

const getAnimals = (animals) => {
    return animals;
}

const mapStateToProps = (state) => ({
    animals: getAnimals(state.animals)
})

const mapDispatchToProps = {
    onAnimalClick: showFoods
}

const AnimalsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Animals)

export default AnimalsContainer
