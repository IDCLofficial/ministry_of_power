import NewsCard from "./NewsCard";
import newsList from "./newsList";

export default function NewsGrid() {
  return (
    newsList.length === 0 ? (
      <div className="w-full flex flex-col items-center justify-center py-16">
        <div className="bg-primary-green/30 border border-blue-300 text-blue-800 px-6 py-4 rounded shadow-md text-center max-w-lg">
          <p className="mb-2 font-semibold">No news available at the moment.</p>
          <a href="/projects" className="text-blue-600 underline hover:text-blue-800">Check out our projects</a>
        </div>
      </div>
    ) : (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsList.map((item, idx) => (
          <NewsCard news={item} key={idx} />
        ))}
      </div>
    )
  );
}