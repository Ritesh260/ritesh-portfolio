import Container from "../common/Container";

export default function AboutContent() {
  return (
    <section className="py-32 bg-black">
      <Container>

        {/* Heading */}

        <div className="text-center mb-24">
          <p
            className="
            text-[#D4AF37]
            uppercase
            tracking-[4px]
            text-sm
            mb-4
            "
          >
            About Me
          </p>

          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
            text-white
            "
          >
            My Story &
            <span className="text-[#D4AF37]">
              {" "}Journey
            </span>
          </h1>

          <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mt-8" />
        </div>

        {/* Main Content */}

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Profile Image */}

          <div className="flex justify-center">

            <div>
              <div
                className="
                w-[380px]
                h-[480px]
                rounded-[32px]
                overflow-hidden
                border
                border-[#D4AF37]/20
                bg-[#0E0E0E]
                p-2
                "
              >
                <img
                  src="/profile.png"
                  alt="Ritesh Mali"
                  className="
                  w-full
                  h-full
                  object-cover
                  rounded-[28px]
                  "
                />
              </div>

              {/* Info Card */}

              <div
                className="
                mt-6
                bg-[#0E0E0E]
                border
                border-[#1A1A1A]
                rounded-3xl
                p-6
                "
              >
                <h3 className="text-white font-semibold">
                  Ritesh Mali
                </h3>

                <p className="text-zinc-500 mt-2">
                  Junior React Developer
                </p>

                <p className="text-zinc-500 mt-1">
                  Mumbai, India
                </p>

                <p className="text-[#D4AF37] mt-3">
                  Available for Freelance
                </p>
              </div>
            </div>

          </div>

          {/* Content */}

          <div>

            <h2
              className="
              text-4xl
              md:text-5xl
              font-bold
              text-white
              mb-8
              "
            >
              Junior React Developer
              <span className="text-[#D4AF37]">
                {" "} & Freelancer
              </span>
            </h2>

            <p className="text-zinc-400 text-lg leading-8 mb-6">
              I'm Ritesh Mali, a passionate web developer
              focused on creating modern digital experiences
              that combine clean design with scalable
              development practices.
            </p>

            <p className="text-zinc-400 text-lg leading-8 mb-6">
              My expertise includes React.js, Next.js,
              JavaScript, Tailwind CSS and Full Stack
              Development using the MERN Stack.
            </p>

            <p className="text-zinc-400 text-lg leading-8">
              Currently working as a Junior React Developer
              while also delivering freelance solutions for
              businesses and clients.
            </p>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-block
              mt-10
              px-8
              py-4
              rounded-full
              bg-[#D4AF37]
              text-black
              font-semibold
              hover:bg-[#F5C542]
              transition
              "
            >
              Download Resume
            </a>

          </div>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-28">

          {[
            ["15+", "Projects Completed"],
            ["React", "Main Expertise"],
            ["MERN", "Full Stack"],
            ["100%", "Responsive Design"],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="
              bg-[#0E0E0E]
              border
              border-[#1A1A1A]
              rounded-3xl
              p-8
              text-center
              hover:border-[#D4AF37]
              transition
              "
            >
              <h3 className="text-4xl font-bold text-white">
                {title}
              </h3>

              <div className="w-10 h-[2px] bg-[#D4AF37] mx-auto my-4" />

              <p className="text-zinc-500">
                {desc}
              </p>
            </div>
          ))}

        </div>

        {/* Journey */}

        <div className="mt-32">

          <div className="text-center mb-16">
            <p
              className="
              text-[#D4AF37]
              uppercase
              tracking-[4px]
              text-sm
              mb-4
              "
            >
              Career Journey
            </p>

            <h2 className="text-5xl font-bold text-white">
              My Growth Path
            </h2>

            <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mt-8" />
          </div>

          <div className="space-y-8">

            <div
              className="
              bg-[#0E0E0E]
              border
              border-[#1A1A1A]
              rounded-3xl
              p-8
              hover:border-[#D4AF37]
              transition
              "
            >
              <h3 className="text-2xl font-bold text-white">
                Started Learning Web Development
              </h3>

              <p className="text-zinc-400 mt-4 leading-7">
                Built strong foundations in HTML, CSS,
                JavaScript and responsive web design.
              </p>
            </div>

            <div
              className="
              bg-[#0E0E0E]
              border
              border-[#1A1A1A]
              rounded-3xl
              p-8
              hover:border-[#D4AF37]
              transition
              "
            >
              <h3 className="text-2xl font-bold text-white">
                Built Real-World Projects
              </h3>

              <p className="text-zinc-400 mt-4 leading-7">
                Developed restaurant websites, dashboards,
                portfolio websites and civic reporting systems.
              </p>
            </div>

            <div
              className="
              bg-[#0E0E0E]
              border
              border-[#1A1A1A]
              rounded-3xl
              p-8
              hover:border-[#D4AF37]
              transition
              "
            >
              <h3 className="text-2xl font-bold text-white">
                Junior React Developer
              </h3>

              <p className="text-zinc-400 mt-4 leading-7">
                Working professionally with React and building
                scalable applications for production-level use.
              </p>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}