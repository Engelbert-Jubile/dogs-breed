import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import icon from "../public/assets/apple-icon.png";

export default function About() {
  return (
    <div>
      <Meta title="Low Carb Recipes: About" />

      <Header />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Image
                    src={icon}
                    alt="profile"
                    className="rounded-full"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Engelbert Jubile Satrio Lukito
                  </h2>
                  <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    An undergraduate student of Computer Engineering, Diponegoro
                    University.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  Hello! I am Engelbert Jubile Satrio Lukito, an undergraduate student in
                  Computer Engineering, Diponegoro University. I am someone who
                  is enthusiastic about trying some new challenges, quite experienced
                  and has an interest in UI/UX Design and Full Stack Developer. I like to
                  communicate with people and I have experienced in
                  organizations.
                </p>

                <p className="leading-relaxed text-lg mb-4">
                  Dogs Breed is an application that contains several types of dog breeds. This application was developed using
                  next.js with the best practices that I have learned. Apart
                  from that, this application is also deployed using VercelGit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
