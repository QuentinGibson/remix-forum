import { Link, useFetcher, useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/server-runtime";
import { BsHeart, BsHeartFill, BsSearch, BsX } from 'react-icons/bs'

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url)
  const search = new URLSearchParams(url.search);
  const searchParam = search.get("search") ?? ""
  const categories = [{
          title: "politics",
          threadCount: 1321,
          description: "Lets discuss about whats happening around the world politics.",
          id: 0,
          isFavorite: false
        }, {
          title: "education",
          threadCount: 2100,
          description: "Learn about learing with these prompts",
          id: 1,
          isFavorite: true
    }]
  const filteredCategories = categories.filter(category => {
    console.log(`Did I filter ${category.title}: ${category.title.includes(searchParam)}`)
    return category.title.includes(searchParam)
  })
  return (
    {
      categories: filteredCategories
        
    })
}


function CategoryElement({ category: { title, threadCount, description, id, isFavorite } }: any) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="tt-item">
        <div className="tt-item-header">
          <ul className="tt-list-badge">
            <li>
              <Link to={`/categories/${id}`}>
                <span className="tt-color01 tt-badge">{title}</span>
              </Link>
            </li>
          </ul>
          <h6 className="tt-title">
            <a href="page-categories-single.html">Threads - {threadCount}</a>
          </h6>
        </div>
        <div className="tt-item-layout">
          <div className="innerwrapper">{description}</div>
          <button className="tt-btn-icon">
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
  )
}

export default function Categories() {
  const { categories } = useLoaderData()
  const search = useFetcher();
  return (
    <main id="tt-pageContent">
      <div className="tt-custom-mobile-indent container">
        <div className="tt-categories-title">
          <div className="tt-title">Categories</div>
          <div className="tt-search">
            <search.Form className="search-wrapper">
              <div className="search-form">
                <input
                  type="text"
                  name="search"
                  className="tt-search__input"
                  placeholder="Search Categories"
                />
                <button style={{height: "100%"}} className="tt-search__btn" type="submit">
                  <svg className="tt-icon">
                    <BsSearch/>
                  </svg>
                </button>
              </div>
            </search.Form>
          </div>
        </div>
        <div className="tt-categories-list">
          <div className="row">
            {categories.map((category: any) => <CategoryElement key={category.id} category={category} />)}
          </div>
        </div>
      </div>
    </main>
  )
}