import { useState, useEffect } from "react";
import Cardtype from "../components/Cardtype";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
  },
};

export default function Typelist() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://dogbreeddb.p.rapidapi.com/?ordering=-breedName", options)
        .then((response) => response.json())
        .then((response) => setData(response.slice(0,49)))
        .catch((err) => console.error(err)); 
    }, 250);
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-2 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data === null ? (
            <p className="mx-auto text-center font-bold mt-4">Please Wait...</p>
          ) : (
            data.map((item, index) => <Cardtype key={index} data={item} />)
          )}
        </div>
      </div>
    </section>
  );
}
