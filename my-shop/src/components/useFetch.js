import React from "react";
import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.products);
      });
  }, [url]);

  return { data };
}
