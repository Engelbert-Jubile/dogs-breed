import { useState, useEffect } from "react";
import Card from "../components/Card";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
  },
};

export default function List() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://dogbreeddb.p.rapidapi.com/paginated/", options)
        .then((response) => response.json())
        .then((response) => setData(response.results))
        .catch((err) => console.error(err)); 
    }, 250);
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-2 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data === null ? (
            <p className="mx-auto text-center font-bold mt-4">Loading...</p>
          ) : (
            data.map((item, index) => <Card key={index} data={item} />)
          )}
        </div>
      </div>
    </section>
  );
}
