import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Loading } from "./Loading";
import { useResultContext } from "../context/ResultContextProvider";

export const Results = () => {
  const { getResult, results, isLoading, searchTerm, setSearchTerm } =
    useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      getResult(`${location.pathname}?query=${searchTerm}&gl=us&lr=en&num=10`);
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;
  console.log(location.pathname);

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between items-center lg:pl-10">
          {results.items?.map(({ title, link, snippet }, index) => (
            <div key={index} className="md:w-4/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
                <p className="text-md dark:text-gray-200">{snippet}</p>
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
              </a>
            </div>
          ))}
        </div>
      );

    case "/imagesearch":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results.items?.map(
            ({ title, thumbnailImageUrl, originalImageUrl }, index) => (
              <a
                href={originalImageUrl}
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                <img src={thumbnailImageUrl} alt={title} loading="lazy" />
                <p className="text-sm w-30 break-words m-10 mt-0">{title.length > 30 ? title.substring(0, 30) : title}</p>
              </a>
            )
          )}
        </div>
      );

    default:
      return "ERROR";
  }
};
