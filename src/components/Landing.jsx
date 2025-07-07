import illustrationIcon from "../images/illustration-working.svg";
function Landing() {
  return (
    <section
      id="landing"
      className="container px-5 py-32 pb-64.5 sm:pb-56 flex flex-col-reverse items-center sm:items-center lg:justify-between sm:justify-center lg:flex-row gap-8 mx-auto">
      <div className="text-center lg:text-left max-w-111 shrink-0 mx-auto sm:mx-0">
        <h1 className="text-6xl text-custom-very-dark-blue font-bold mb-6 leading-18">
          More than just shorter links
        </h1>
        <p className="text-custom-gray mb-6">
          Build your brand's recognation nad get detailed insights on how your links are preforming.
        </p>
        <a
          href="#"
          className="relative overflow-hidden w-fit px-4 py-2 rounded-full bg-custom-cyan text-white font-bold transition duration-300 group">
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition duration-300 pointer-events-none"></span>
          <span className="relative z-10">Get Started</span>
        </a>
      </div>
      <img
        src={illustrationIcon}
        alt="Illustration Working"
        className="mb-8 lg:mb-0 lg:ml-8 lg:max-w-130 relative lg:-right-25"
        width="733"
        height="423"
      />
    </section>
  );
}
export default Landing;
