export default function ProjectCard({ project }) {
  return (
    <div
      className="
      group
      overflow-hidden
      rounded-3xl
      border
      border-[#1A1A1A]
      bg-[#0E0E0E]
      transition-all
      duration-500
      hover:border-[#D4AF37]
      hover:-translate-y-2
      "
    >
      {/* Project Image */}

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

        <div
          className="
          w-12
          h-[2px]
          bg-[#D4AF37]
          mb-6
          "
        />

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

        <div className="flex flex-wrap gap-3 mb-8">
          {project.tech.map((item, index) => (
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
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="flex flex-wrap gap-4">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
            px-6
            py-3
            rounded-full
            bg-[#D4AF37]
            text-black
            font-semibold
            hover:bg-[#F5C542]
            transition-all
            duration-300
            "
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
            px-6
            py-3
            rounded-full
            border
            border-white/15
            text-white
            hover:border-[#D4AF37]
            hover:text-[#D4AF37]
            transition-all
            duration-300
            "
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}