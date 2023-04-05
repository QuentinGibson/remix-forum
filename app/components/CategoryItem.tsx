import { Link } from "@remix-run/react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

export default function CategoryItem({
  category: { title, threadCount, description, id, isFavorite },
}: any) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="tt-item">
        <div className="tt-item-header">
          <ul className="tt-list-badge">
            <li>
              <Link to={`/feeds/${id}`}>
                <span className="tt-color01 tt-badge">{title}</span>
              </Link>
            </li>
          </ul>
          <h6 className="tt-title">
            <span href="page-categories-single.html">
              Threads - {threadCount}
            </span>
          </h6>
        </div>
        <div className="tt-item-layout">
          <div className="innerwrapper">{description}</div>
          <button>
            <i className="tt-icon">
              {isFavorite ? <BsHeartFill /> : <BsHeart />}
              <svg>
                <use xlinkHref="#icon-favorite" />
              </svg>
            </i>
          </button>
        </div>
      </div>
    </div>
  );
}
