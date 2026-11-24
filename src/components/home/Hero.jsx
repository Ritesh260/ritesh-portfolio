import Container from "../common/Container";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-black overflow-hidden">
      <Container>
        <div className="max-w-5xl">

          {/* Badge */}
          <span
            className="
              inline-block
              border
              border-[#D4AF37]
              text-[#D4AF37]
              px-4
              py-2
              rounded-full
              text-xs sm:text-sm
              tracking-[2px]
            "
          >
            JUNIOR REACT DEVELOPER
          </span>

          {/* Heading */}
          <h1
            className="
              mt-8 sm:mt-10
              text-4xl sm:text-5xl md:text-7xl lg:text-8xl
              font-bold
              text-white
              leading-tight
            "
          >
            Crafting
            <br />

            <span className="text-[#D4AF37]">
              Premium Digital
            </span>

            <br />

            Experiences.
          </h1>

          {/* Line */}
          <div className="w-20 sm:w-28 h-[2px] bg-[#D4AF37] mt-8 sm:mt-10" />

          {/* Paragraph */}
          <p
            className="
              mt-6 sm:mt-10
              text-sm sm:text-base md:text-lg
              text-zinc-400
              max-w-2xl
              leading-7 sm:leading-8
            "
          >
            I'm Ritesh Mali, a Junior React Developer
            focused on building modern, scalable and
            high-performance web applications using
            React.js, Next.js and the MERN Stack.
          </p>

          {/* Buttons */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5">

            <Link
              href="/projects"
              className="
                px-6 sm:px-8
                py-3 sm:py-4
                rounded-full
                bg-[#D4AF37]
                text-black
                font-semibold
                text-center
                hover:bg-[#F5C542]
                transition
              "
            >
              View Projects
            </Link>

            <a
              href="/RITESH MALI (1).pdf"
              className="
                px-6 sm:px-8
                py-3 sm:py-4
                rounded-full
                border
                border-white/20
                text-white
                text-center
                hover:border-[#D4AF37]
                hover:text-[#D4AF37]
                transition
              "
            >
              Download Resume
            </a>

          </div>

          {/* Stats */}
          <div
            className="
              mt-14 sm:mt-20
              flex flex-wrap sm:flex-nowrap
              gap-8 sm:gap-16
            "
          >

            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white">
                9+
              </h3>
              <p className="text-zinc-500 mt-2 text-sm sm:text-base">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white">
                React
              </h3>
              <p className="text-zinc-500 mt-2 text-sm sm:text-base">
                Expertise
              </p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white">
                MERN
              </h3>
              <p className="text-zinc-500 mt-2 text-sm sm:text-base">
                Stack
              </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}