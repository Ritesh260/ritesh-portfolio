import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Container from "@/components/common/Container";

import ProjectCard from "@/components/projects/ProjectCard";

import { projects } from "@/data/projects";

export default function ProjectsPage() {
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
              My Projects
            </p>

            <h1
              className="
              text-5xl
              md:text-7xl
              font-bold
              text-white
              "
            >
              Featured
              <span className="text-[#D4AF37]">
                {" "}Work
              </span>
            </h1>

            <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mt-8" />

            <p
              className="
              mt-8
              text-zinc-400
              text-lg
              max-w-3xl
              mx-auto
              leading-8
              "
            >
              A collection of real-world projects showcasing
              my expertise in React.js, Next.js, JavaScript,
              Tailwind CSS, Full Stack Development and
              modern web application architecture.
            </p>

          </div>

          {/* Projects Grid */}

          <div className="grid lg:grid-cols-2 gap-10">

            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}

          </div>

          {/* Bottom Section */}

          <div
            className="
            mt-24
            text-center
            bg-[#0E0E0E]
            border
            border-[#1A1A1A]
            rounded-3xl
            p-10
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
              More Projects
              <span className="text-[#D4AF37]">
                {" "}Coming Soon
              </span>
            </h2>

            <p
              className="
              text-zinc-400
              max-w-2xl
              mx-auto
              mt-6
              leading-8
              "
            >
              I continuously work on new ideas, client
              projects and innovative web solutions to
              expand my skills and deliver better digital
              experiences.
            </p>
          </div>

        </Container>
      </section>

      <Footer />
    </>
  );
}