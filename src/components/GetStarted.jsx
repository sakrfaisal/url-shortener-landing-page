function GetStarted() {
  return (
    <section
      id="boost-section"
      className="px-5 py-16 flex flex-col gap-6 items-center text-center bg-custom-dark-violet">
      <h3 className="text-4xl font-bold text-white">Boost your links today</h3>
      <a
        href="#"
        className="relative overflow-hidden w-fit px-5 py-2 rounded-full bg-custom-cyan text-white font-bold text-lg transition duration-300 group">
        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition duration-300 pointer-events-none"></span>
        <span className="relative z-10">Get Started</span>
      </a>
    </section>
  );
}
export default GetStarted;
