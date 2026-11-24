import Link from "next/link";
import Container from "../common/Container";

export default function AboutPreview() {
  return (
    <section className="py-32 bg-black">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}

          <div>
            <p
              className="
              text-[#D4AF37]
              uppercase
              tracking-[4px]
              text-sm
              mb-5
            "
            >
              About Me
            </p>

            <h2
              className="
              text-5xl
              md:text-6xl
              font-bold
              text-white
              leading-tight
            "
            >
              Building Modern
              <br />

              <span className="text-[#D4AF37]">
                Digital Products
              </span>

              <br />

              With Purpose.
            </h2>

            <div
              className="
              w-24
              h-[2px]
              bg-[#D4AF37]
              mt-8
              mb-8
            "
            />

            <p className="text-zinc-400 leading-8 text-lg">
              I'm Ritesh Mali, a Junior React Developer
              passionate about creating high-quality web
              applications with modern technologies.
            </p>

            <p className="text-zinc-400 leading-8 text-lg mt-6">
              Alongside my professional experience, I work
              on freelance projects helping businesses build
              modern digital solutions that are fast,
              scalable and user-focused.
            </p>

            <Link
              href="/about"
              className="
              inline-flex
              items-center
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
              Explore More
            </Link>
          </div>

          {/* Right Cards */}

          <div className="grid grid-cols-2 gap-6">

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
              <h3 className="text-5xl font-bold text-white">
                9+
              </h3>

              <div className="w-10 h-[2px] bg-[#D4AF37] my-4" />

              <p className="text-zinc-500">
                Projects Completed
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
              <h3 className="text-5xl font-bold text-white">
                1+
              </h3>

              <div className="w-10 h-[2px] bg-[#D4AF37] my-4" />

              <p className="text-zinc-500">
                Years Learning
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
              <h3 className="text-4xl font-bold text-white">
                React
              </h3>

              <div className="w-10 h-[2px] bg-[#D4AF37] my-4" />

              <p className="text-zinc-500">
                Main Expertise
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
              <h3 className="text-4xl font-bold text-white">
                MERN
              </h3>

              <div className="w-10 h-[2px] bg-[#D4AF37] my-4" />

              <p className="text-zinc-500">
                Full Stack
              </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}