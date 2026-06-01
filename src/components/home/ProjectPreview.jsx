import Link from "next/link";
import Container from "../common/Container";
import { projects } from "@/data/projects";

export default function ProjectPreview() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section className="py-32 bg-black">
      <Container>

        {/* Heading */}

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">

          <div>
            <p
              className="
              text-[#D4AF37]
              uppercase
              tracking-[4px]
              text-sm
              mb-4
              "
            >
              Featured Projects
            </p>

            <h2
              className="
              text-5xl
              md:text-6xl
              font-bold
              text-white
              "
            >
              My Recent
              <span className="text-[#D4AF37]">
                {" "}Work
              </span>
            </h2>

            <div className="w-20 h-[2px] bg-[#D4AF37] mt-6" />
          </div>

          <Link
            href="/projects"
            className="
            inline-flex
            items-center
            gap-2
            text-[#D4AF37]
            hover:gap-4
            transition-all
            duration-300
            "
          >
            View All Projects →
          </Link>

        </div>

        {/* Projects */}

        <div className="grid lg:grid-cols-2 gap-8">

          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-[#1A1A1A]
              bg-[#0E0E0E]
              hover:border-[#D4AF37]
              transition-all
              duration-500
              "
            >

              {/* Image */}

              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  w-full
                  h-72
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                  "
                />
              </div>

              {/* Content */}

              <div className="p-8">

                <div
                  className="
                  inline-flex
                  px-3
                  py-1
                  rounded-full
                  bg-[#D4AF37]
                  text-black
                  text-xs
                  font-semibold
                  mb-5
                  "
                >
                  Featured Project
                </div>

                <h3
                  className="
                  text-3xl
                  font-bold
                  text-white
                  mb-4
                  "
                >
                  {project.title}
                </h3>

                <div className="w-12 h-[2px] bg-[#D4AF37] mb-6" />

                <p
                  className="
                  text-zinc-400
                  leading-7
                  mb-6
                  "
                >
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-3">

                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-[#D4AF37]/20
                      text-[#D4AF37]
                      text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}