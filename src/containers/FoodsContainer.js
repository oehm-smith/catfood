import { connect } from 'react-redux'
import { showFoods } from "../actions";
import Animals from "../components/Animals";
import Foods from "../components/Foods";

const getFoods = (foods) => {
    return foods;
}

const mapStateToProps = (state) => ({
    foods: getFoods(state.foods)
})

const mapDispatchToProps = {
    onFoodClick: showFoods()
}

const FoodsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Foods)

export default FoodsContainer
