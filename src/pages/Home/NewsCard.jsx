import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const NewsCard = ({ singleNews }) => {
  const { title, image_url, details, _id } = singleNews;
  return (
    <div className="card  bg-base-100 shadow-xl mb-16 ">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}{" "}
            <Link to={`/news/${_id}`} className="text-blue-700 underline">
              Read More...
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  singleNews: PropTypes.object,
};

export default NewsCard;
