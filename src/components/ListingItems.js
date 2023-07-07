import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
import bedIcon from "../assets/svg/badgeIcon.svg";
import bathtubIcon from "../assets/svg/bathtubIcon.svg";

const ListingItems = (listing, id) => {
  return (
    <li className="categoryListing">
      <Link
        to={`/category/${listing.type}/${id}`}
        className="categoryListingLink"
      >
        <img
          className="categoryListingImg"
          src={listing.imgurl[0]}
          alt={listing.name}
        />
        <div className="categoryListingDetails">
          <p className="categoryListingLocation">{listing.location}</p>
        </div>
      </Link>
    </li>
  );
};

export default ListingItems;
