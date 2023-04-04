import { Link, useLoaderData } from "@remix-run/react";
import { LoaderArgs, json } from "@remix-run/server-runtime";
import ThreadItem from "~/components/ThreadItem";
type Thread = {
  id: number;
  icon: string;
  title: string;
  tags: string[];
  category: {
    id: number;
    name: string;
  };
  likes: number;
  replies: number;
  activity: string;
  views: number;
  isSelected: boolean;
  isPinned: boolean;
  isLocked: boolean;
};
export const loader = async ({ request, params }: LoaderArgs) => {
  const categoryId = params.categoryId;
  const data: Thread[] = [
    {
      id: 1234,
      icon: "🎃",
      title: "Spooky Halloween Costume 2022",
      tags: ["holidays", "fashion"],
      category: { id: 4, name: "entertainment" },
      likes: 42,
      replies: 17,
      views: 5021,
      activity: "2h",
      isSelected: true,
      isPinned: true,
      isLocked: false,
    },
    {
      id: 90453,
      icon: "🦸‍♀️",
      title: "Superhero Costume Contest 2023",
      tags: ["comics", "cosplay"],
      category: { id: 4, name: "entertainment" },
      likes: 27,
      replies: 33,
      views: 7345,
      activity: "3h",
      isSelected: true,
      isPinned: false,
      isLocked: true,
    },
    {
      id: 452,
      icon: "👑",
      title: "Royal Ball Costume Party 2024",
      tags: ["history", "fashion"],
      category: { id: 10, name: "culture" },
      likes: 10,
      replies: 21,
      views: 1889,
      activity: "1h",
      isSelected: true,
      isPinned: false,
      isLocked: false,
    },
    {
      id: 121,
      icon: "🎭",
      title: "Theater Costume Design Competition 2022",
      tags: ["performing arts", "design"],
      category: { id: 3, name: "arts" },
      likes: 63,
      replies: 41,
      views: 10689,
      activity: "5h",
      isSelected: false,
      isPinned: true,
      isLocked: true,
    },
    {
      id: 54,
      icon: "🏆",
      title: "World Cup Football Fan Costume Contest 2023",
      tags: [],
      category: { id: 4, name: "entertainment" },
      likes: 94,
      replies: 52,
      views: 18921,
      activity: "6h",
      isSelected: true,
      isPinned: true,
      isLocked: true,
    },
    {
      id: 141234,
      icon: "🎉",
      title: "New Year's Eve Masquerade Ball 2024",
      tags: ["holidays", "celebration"],
      category: { id: 4, name: "entertainment" },
      likes: 16,
      replies: 7,
      views: 1945,
      activity: "1h",
      isSelected: false,
      isPinned: true,
      isLocked: true,
    },
  ];
  const categoryKey = {
    0: "arts",
    2: "culture",
    3: "fashion",
    4: "entertainment",
    5: "food",
  };
  const category = categoryKey[categoryId];
  const filteredData = data.filter((thread) => {
    return thread.category.name === category;
  });
  return json(
    { category, threads: filteredData },
    { headers: { "cache-control": "max-age=0" } }
  );
};
function FilteredFeed({ list }: { list: Thread[] }) {
  return (
    <>
      {list.map((thread: Thread) => (
        <ThreadItem key={thread.id} thread={thread} />
      ))}
    </>
  );
}
export default function CategoryRoute() {
  const loaderData = useLoaderData();
  const { category, threads } = loaderData;
  return (
    <main id="tt-pageContent">
      <div className="tt-custom-mobile-indent container">
        <div className="tt-categories-title">
          <div className="tt-title">Category: {category}</div>
        </div>
        <div className="tt-topic-list">
          <div className="tt-list-header">
            <div className="tt-col-topic">Topic</div>
            <div className="tt-col-category">Category</div>
            <div className="tt-col-value hide-mobile">Likes</div>
            <div className="tt-col-value hide-mobile">Replies</div>
            <div className="tt-col-value hide-mobile">Views</div>
            <div className="tt-col-value">Activity</div>
          </div>
          <FilteredFeed list={threads} />
        </div>
      </div>
    </main>
  );
}
