import LinkForm from "./LinkForm";
import { statCardsData } from "../../statCardsData";

function Stats() {
  return (
    <>
      <section className="bg-[#f0f1f6]">
        <div id="stats" className="container mx-auto px-5 min-h-screen pb-30">
          <LinkForm />
          <div className="flex flex-col gap-4 items-center text-center mb-30">
            <h2 className="text-2xl text-custom-very-dark-violet font-bold">Advanced Statistics</h2>
            <p className="text-custom-grayish-violet max-w-100 font-medium">
              Track how your links are performing across the web with our advanced statistics
              dashboard.
            </p>
          </div>
          <ul
            id="stats-container"
            className="flex flex-col lg:flex-row lg:justify-between gap-16 relative">
            {statCardsData.map((statData, index) => (
              <li
                className={`relative text-center lg:text-left bg-white rounded-md p-7 pt-12 z-10 ${
                  index === 0 ? "lg:-top-8" : index === 2 ? "lg:top-8" : ""
                }`}
                key={index}>
                <img
                  src={statData.img}
                  alt={statData.title}
                  className="bg-custom-dark-violet p-5 rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <h3 className="text-xl text-custom-very-dark-violet font-bold mb-3">
                  {statData.title}
                </h3>
                <p className="font-medium text-custom-grayish-violet text-sm">
                  {statData.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
export default Stats;
