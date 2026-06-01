import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Container from "@/components/common/Container";

import { experience } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <>
      <Navbar />

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
              Experience
            </p>

            <h1
              className="
              text-5xl
              md:text-7xl
              font-bold
              text-white
              "
            >
              Professional
              <span className="text-[#D4AF37]">
                {" "}Journey
              </span>
            </h1>

            <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mt-8" />
          </div>

          {/* Timeline */}

          <div className="max-w-5xl mx-auto space-y-10">

            {experience.map((item) => (
              <div
                key={item.id}
                className="
                bg-[#0E0E0E]
                border
                border-[#1A1A1A]
                rounded-3xl
                p-8
                hover:border-[#D4AF37]
                transition-all
                duration-300
                "
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                  <div>
                    <h2
                      className="
                      text-3xl
                      font-bold
                      text-white
                      "
                    >
                      {item.role}
                    </h2>

                    <p className="text-[#D4AF37] mt-2">
                      {item.company}
                    </p>
                  </div>

                  <div
                    className="
                    px-5
                    py-2
                    rounded-full
                    border
                    border-[#D4AF37]/30
                    text-[#D4AF37]
                    text-sm
                    w-fit
                    "
                  >
                    {item.duration}
                  </div>

                </div>

                <div className="w-12 h-[2px] bg-[#D4AF37] mt-6 mb-6" />

                <ul className="space-y-4">
                  {item.description.map((point, index) => (
                    <li
                      key={index}
                      className="
                      text-zinc-400
                      leading-7
                      flex
                      gap-3
                      "
                    >
                      <span className="text-[#D4AF37]">
                        •
                      </span>

                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

          {/* Bottom Summary */}

          <div
            className="
            mt-24
            bg-[#0E0E0E]
            border
            border-[#1A1A1A]
            rounded-3xl
            p-10
            text-center
            "
          >
            <h2
              className="
              text-3xl
              md:text-4xl
              font-bold
              text-white
              "
            >
              Continuously Learning &
              <span className="text-[#D4AF37]">
                {" "}Growing
              </span>
            </h2>

            <p
              className="
              text-zinc-400
              max-w-3xl
              mx-auto
              mt-6
              leading-8
              "
            >
              My journey focuses on building scalable web
              applications, improving user experiences and
              mastering modern frontend and full-stack
              technologies.
            </p>
          </div>

        </Container>
      </section>

      <Footer />
    </>
  );
}