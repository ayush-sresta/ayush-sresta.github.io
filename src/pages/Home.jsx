import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className="h-[92vh] lg:h-[100vh] flex justify-center items-center px-4">
      <div className="max-w-7xl lg:flex-row-reverse lg:justify-between items-center justify-center text-center">
        <div className="mt-6">
          <h1 className="text-3xl md:text-4xl font-semibold flex flex-wrap justify-center items-center gap-3 md:gap-4">
            Hi, My name is
            <span className="cursive-font text-4xl md:text-5xl text-[var(--color-accent)] font-bold">
              Ayush
            </span><span className="cursive-font text-4xl hidden md:inline-block md:text-5xl text-[var(--color-accent)] font-bold">
              Shrestha
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium">
            and I am a passionate
          </h2>

          <TypeAnimation
            sequence={[
              "Web Developer",
              1000,
              "Web Designer",
              1000,
              "Video Editor.",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-xl mt-2 text-[var(--color-accent-hover)] font-semibold"
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
