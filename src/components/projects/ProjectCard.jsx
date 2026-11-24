
export default function ProjectCard({ project }) {
  const isFreelance = project.category === "Freelance Project";

  return (
    <div
      className="
        group overflow-hidden rounded-3xl
        border border-[#1A1A1A]
        bg-[#0E0E0E]
        transition-all duration-500
        hover:border-[#D4AF37]
        hover:-translate-y-2
      "
    >
      {/* Project Image */}

      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full h-72 object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
        />

        {/* Category Badge */}

        <div className="absolute top-5 left-5">
          <span
            className={`
              inline-flex items-center gap-2
              px-4 py-2 rounded-full
              text-xs font-semibold tracking-wide
              backdrop-blur-md border
              ${
                isFreelance
                  ? "bg-[#D4AF37]/15 text-[#D4AF37] border-[#D4AF37]/40"
                  : "bg-[#1d8b35] text-[#ffffff] border-[#D4AF37]/40"
              }
            `}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isFreelance ? "bg-[#D4AF37]" : "bg-white"
              }`}
            />

            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}

      <div className="p-8">

        <h3 className="text-2xl font-bold text-white mb-4">
          {project.title}
        </h3>

        <div className="w-12 h-[2px] bg-[#D4AF37] mb-6" />

        <p className="text-zinc-400 leading-7 mb-6">
          {project.description}
        </p>

        {/* Tech Stack */}

        <div className="flex flex-wrap gap-3 mb-8">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="
                px-4 py-2 rounded-full
                border border-[#D4AF37]/20
                text-[#D4AF37] text-sm
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="flex flex-wrap gap-3">

          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
                px-6 py-3 rounded-full
                bg-[#D4AF37] text-black
                font-semibold
                hover:bg-[#F5C542]
                transition-all duration-300
              "
            >
              Live Demo
            </a>
          )}

          {project.dashboard && (
            <a
              href={project.dashboard}
              target="_blank"
              rel="noreferrer"
              className="
                px-6 py-3 rounded-full
                border border-white/15 text-white
                hover:border-[#D4AF37]
                hover:text-[#D4AF37]
                transition-all duration-300
              "
            >
              Admin Dashboard
            </a>
          )}

          {project.delivery && (
            <a
              href={project.delivery}
              target="_blank"
              rel="noreferrer"
              className="
                px-6 py-3 rounded-full
                border border-white/15 text-white
                hover:border-[#D4AF37]
                hover:text-[#D4AF37]
                transition-all duration-300
              "
            >
              Delivery Dashboard
            </a>
          )}

          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
                px-6 py-3 rounded-full
                border border-white/15 text-white
                hover:border-[#D4AF37]
                hover:text-[#D4AF37]
                transition-all duration-300
              "
            >
              GitHub
            </a>
          )}

        </div>
      </div>
    </div>
  );
}
