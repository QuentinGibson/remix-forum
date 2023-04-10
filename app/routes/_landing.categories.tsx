import { useFetcher, useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/server-runtime";
import { BsSearch, BsX } from "react-icons/bs";
import CategoryItem from "~/components/CategoryItem";

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const search = new URLSearchParams(url.search);
  const searchParam = search.get("search") ?? "";
  const categories = [
    {
      title: "arts",
      threadCount: 1321,
      description:
        "Lets discuss about whats happening around the world politics.",
      id: 0,
      isFavorite: false,
    },
    {
      title: "entertainment",
      threadCount: 2100,
      description: "Learn about learing with these prompts",
      id: 4,
      isFavorite: true,
    },
  ];
  const filteredCategories = categories.filter((category) => {
    console.log(
      `Did I filter ${category.title}: ${category.title.includes(searchParam)}`
    );
    return category.title.includes(searchParam);
  });
  return {
    categories: filteredCategories,
  };
};

export default function Categories() {
  const { categories } = useLoaderData();
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
                <button
                  style={{ height: "100%" }}
                  className="tt-search__btn"
                  type="submit"
                >
                  <svg className="tt-icon">
                    <BsSearch />
                  </svg>
                </button>
              </div>
            </search.Form>
          </div>
        </div>
        <div className="tt-categories-list">
          <div className="row">
            {categories.map((category: any) => (
              <CategoryItem key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
