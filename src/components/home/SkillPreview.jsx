import Container from "../common/Container";
import { skills } from "@/data/skills";

export default function SkillsPreview() {
  return (
    <section className="py-32 bg-black">
      <Container>
        <div className="text-center mb-20">
          <p
            className="
            text-[#D4AF37]
            uppercase
            tracking-[4px]
            text-sm
            mb-4
          "
          >
            My Skills
          </p>

          <h2
            className="
            text-5xl
            md:text-6xl
            font-bold
            text-white
          "
          >
            Technologies &
            <span className="text-[#D4AF37]">
              {" "}Tools
            </span>
          </h2>

          <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Frontend */}

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
            <h3 className="text-xl font-semibold text-white mb-6">
              Frontend
            </h3>

            <ul className="space-y-3">
              {skills.frontend.map((item, index) => (
                <li
                  key={index}
                  className="text-zinc-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Backend */}

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
            <h3 className="text-xl font-semibold text-white mb-6">
              Backend
            </h3>

            <ul className="space-y-3">
              {skills.backend.map((item, index) => (
                <li
                  key={index}
                  className="text-zinc-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Database */}

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
            <h3 className="text-xl font-semibold text-white mb-6">
              Database
            </h3>

            <ul className="space-y-3">
              {skills.database.map((item, index) => (
                <li
                  key={index}
                  className="text-zinc-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}

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
            <h3 className="text-xl font-semibold text-white mb-6">
              Tools
            </h3>

            <ul className="space-y-3">
              {skills.tools.map((item, index) => (
                <li
                  key={index}
                  className="text-zinc-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </section>
  );
}