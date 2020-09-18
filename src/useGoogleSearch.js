import { useState, useEffect } from "react";
import API_KEY from "./keys";

// Got this from :  https://cse.google.com/cse/create/new
// This tells google which search engine to use
const CONTEXT_KEY = "ca5c85d497c064173";

// Custom Hook
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  // Hook: whenever search term(user search) changes - fire this hook....i.e re-run this to fetch the search reults
  useEffect(() => {
    const fetchData = async () => {
      // endpoint: connects to google custom search api
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
