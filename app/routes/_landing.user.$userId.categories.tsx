import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";
import CategoryItem from "~/components/CategoryItem";

export const loader = async ({ request, params }: LoaderArgs) => {
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
  return json({ categories });
};

export default function CategoriesRoute() {
  const { categories } = useLoaderData<typeof loader>();
  return (
    <div className="tt-categories-list">
      <div className="row">
        {categories.map((category) => (
          <CategoryItem category={category} />
        ))}
      </div>
    </div>
  );
}
