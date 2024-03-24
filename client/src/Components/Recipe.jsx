import "./Recipe.css";
import PropTypes from "prop-types";

const Recipe = ({ title, image, ingredients }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <ol>
        {ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ol>
      <img className="image" src={image} alt="" />
    </div>
  );
};

export default Recipe;

Recipe.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  ingredients: PropTypes.object,
};
