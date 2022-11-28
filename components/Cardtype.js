import Image from "next/image";
import Link from "next/link";

export default function Cardtype(props) {
  try {
    return (
      <div className="lg:w-1/5 md:w-1/2 p-4 w-full ">
        <Link
          href={{
            pathname: "/detail-latest",
            query: { data: JSON.stringify(props) },
          }}
          className="block relative h-48 rounded "
          
        >

          <Image
            alt="thumbnail"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={props.data.imgThumb ? props.data.imgThumb : ""}
            width="400"
            height="760"
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
          {props.data.breedType}
          </h3>
          <h2 className="title-font text-lg font-medium text-gray-900 mb-3">
          {props.data.breedName}
          </h2>
        </div>
      </div>

    );
  } catch (e) {
    console.log(e);
  }
}
