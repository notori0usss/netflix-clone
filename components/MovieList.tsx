import React from "react";
import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";
interface MovieListProps {
  data: Record<string, any>[];
  title: string;
}
export const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
  if (isEmpty(data)) {
    return null;
  }
  return (
    <div>
      <div className="px-4 md:px-14 mt-4 space-y-8">
        <div>
          <p className="text-white md:text-xl lg:text-2xl font-semibold mb-4">
            {title}
          </p>
          <div className="grid grid-cols-4 gap-2">
            {data.map((item) => (
              <MovieCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
