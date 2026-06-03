import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Container from "@/components/common/Container";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="py-32 bg-black">
        <Container>

          {/* Heading */}

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
              Contact
            </p>

            <h1
              className="
              text-5xl
              md:text-7xl
              font-bold
              text-white
              "
            >
              Let's Work
              <span className="text-[#D4AF37]">
                {" "}Together
              </span>
            </h1>

            <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mt-8" />
          </div>

          {/* Content */}

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left Side */}

            <div
              className="
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
                font-bold
                text-white
                mb-8
                "
              >
                Get In Touch
              </h2>

              <p className="text-zinc-400 leading-8 mb-10">
                Whether you have a project idea, freelance
                opportunity or full-time role, feel free
                to reach out. I'm always open to discussing
                exciting opportunities and collaborations.
              </p>

              <div className="space-y-8">

                <div>
                  <p className="text-[#D4AF37] mb-2">
                    Email
                  </p>

                  <p className="text-zinc-400">
                    riteshsaini734@gmail.com
                  </p>
                </div>

                <div>
                  <p className="text-[#D4AF37] mb-2">
                    Location
                  </p>

                  <p className="text-zinc-400">
                    Mumbai, India
                  </p>
                </div>

                <div>
                  <p className="text-[#D4AF37] mb-2">
                    Availability
                  </p>

                  <p className="text-zinc-400">
                    Available for Freelance &
                    Full-Time Opportunities
                  </p>
                </div>

              </div>
            </div>

            {/* Form */}

            <ContactForm />

          </div>

        </Container>
      </section>

      <Footer />
    </>
  );
}