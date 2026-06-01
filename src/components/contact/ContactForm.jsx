export default function ContactForm() {
  return (
    <form className="space-y-6">

      {/* Name */}
      <div>
        <input
          type="text"
          placeholder="Your Name"
          className="
            w-full
            rounded-xl
            border
            border-[#1A1A1A]
            bg-[#0E0E0E]
            text-white
            p-4
            outline-none
            focus:border-[#D4AF37]
            focus:ring-1
            focus:ring-[#D4AF37]
            transition
          "
        />
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Your Email"
          className="
            w-full
            rounded-xl
            border
            border-[#1A1A1A]
            bg-[#0E0E0E]
            text-white
            p-4
            outline-none
            focus:border-[#D4AF37]
            focus:ring-1
            focus:ring-[#D4AF37]
            transition
          "
        />
      </div>

      {/* Message */}
      <div>
        <textarea
          rows="6"
          placeholder="Your Message"
          className="
            w-full
            rounded-xl
            border
            border-[#1A1A1A]
            bg-[#0E0E0E]
            text-white
            p-4
            outline-none
            resize-none
            focus:border-[#D4AF37]
            focus:ring-1
            focus:ring-[#D4AF37]
            transition
          "
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="
          w-full sm:w-auto
          px-8
          py-3
          rounded-full
          bg-[#D4AF37]
          text-black
          font-semibold
          hover:bg-[#F5C542]
          transition
          active:scale-95
        "
      >
        Send Message
      </button>

    </form>
  );
}