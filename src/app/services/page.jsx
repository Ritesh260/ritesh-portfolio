import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Container from "@/components/common/Container";

const services = [
  {
    title: "Frontend Development",
    description:
      "Modern, responsive and high-performance user interfaces using React.js and Next.js.",
  },

  {
    title: "React Development",
    description:
      "Building scalable React applications with reusable components and clean architecture.",
  },

  {
    title: "Next.js Development",
    description:
      "Server-side rendering, SEO optimization and modern web applications using Next.js.",
  },

  {
    title: "Responsive Website Design",
    description:
      "Mobile-first websites that look and perform perfectly across all devices.",
  },

  {
    title: "Admin Dashboard Development",
    description:
      "Professional admin panels with analytics, management tools and modern UI.",
  },

  {
    title: "Full Stack Web Applications",
    description:
      "Complete web solutions using React, Node.js, MongoDB and REST APIs.",
  },
];

export default function ServicesPage() {
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
              Services
            </p>

            <h1
              className="
              text-5xl
              md:text-7xl
              font-bold
              text-white
              "
            >
              What I
              <span className="text-[#D4AF37]">
                {" "}Offer
              </span>
            </h1>

            <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mt-8" />

            <p
              className="
              max-w-3xl
              mx-auto
              mt-8
              text-zinc-400
              text-lg
              leading-8
              "
            >
              I help businesses and individuals build
              modern, scalable and visually appealing
              digital products that create real impact.
            </p>

          </div>

          {/* Services Grid */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="
                group
                bg-[#0E0E0E]
                border
                border-[#1A1A1A]
                rounded-3xl
                p-8
                hover:border-[#D4AF37]
                hover:-translate-y-2
                transition-all
                duration-300
                "
              >
                <div
                  className="
                  w-12
                  h-[2px]
                  bg-[#D4AF37]
                  mb-6
                  "
                />

                <h3
                  className="
                  text-2xl
                  font-bold
                  text-white
                  mb-4
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                  text-zinc-400
                  leading-7
                  "
                >
                  {service.description}
                </p>
              </div>
            ))}

          </div>

          {/* CTA */}

          <div
            className="
            mt-24
            bg-[#0E0E0E]
            border
            border-[#1A1A1A]
            rounded-3xl
            p-12
            text-center
            "
          >
            <h2
              className="
              text-3xl
              md:text-5xl
              font-bold
              text-white
              "
            >
              Have a Project in Mind?
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
              Whether you need a business website,
              admin dashboard, portfolio or complete
              web application, I'm ready to help bring
              your ideas to life.
            </p>

            <a
              href="/contact"
              className="
              inline-block
              mt-8
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
              Let's Talk
            </a>
          </div>

        </Container>
      </section>

      <Footer />
    </>
  );
}