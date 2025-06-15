
import { useRef, useState } from "react";
import { MailIcon, SendHorizonal } from "lucide-react";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [sent, setSent] = useState(false);

  // This just simulates a send and resets the form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    formRef.current?.reset();
    setTimeout(() => setSent(false), 2000);
  };

  return (
    <section
      id="contact"
      className="my-16 xs:my-20 max-w-lg mx-auto rounded-2xl shadow-lg border border-gray-200 dark:border-[#323247] animate-fade-in
        bg-card dark:bg-[#232437] px-2 xs:px-4 sm:px-6 py-7 xs:py-8 sm:py-10 w-full"
    >
      <h2 className="text-xl xs:text-2xl font-bold mb-2 flex items-center gap-2 text-[#070A52] dark:text-white">
        <MailIcon size={24} xs-size={28} className="text-[#070A52] dark:text-white" /> Need Coding Help?
      </h2>
      <p className="text-muted-foreground mb-5 xs:mb-6 dark:text-gray-300 text-sm xs:text-base">
        Reach out, and our team will get back to you as soon as possible!
      </p>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-3 xs:space-y-4">
        <input 
          required
          type="text" 
          name="name"
          placeholder="Your Name"
          className="w-full px-3 xs:px-4 py-2 border rounded-md bg-white dark:bg-[#181927] text-[#070A52] dark:text-white border-gray-300 dark:border-[#323247] transition focus:outline-none focus:ring-2 focus:ring-[#070A52] dark:focus:ring-white placeholder:text-gray-400 dark:placeholder:text-gray-400"
        />
        <input 
          required
          type="email" 
          name="email"
          placeholder="Your Email"
          className="w-full px-3 xs:px-4 py-2 border rounded-md bg-white dark:bg-[#181927] text-[#070A52] dark:text-white border-gray-300 dark:border-[#323247] transition focus:outline-none focus:ring-2 focus:ring-[#070A52] dark:focus:ring-white placeholder:text-gray-400 dark:placeholder:text-gray-400"
        />
        <textarea
          required
          name="message"
          rows={4}
          placeholder="How can we help you?"
          className="w-full px-3 xs:px-4 py-2 border rounded-md bg-white dark:bg-[#181927] text-[#070A52] dark:text-white border-gray-300 dark:border-[#323247] transition focus:outline-none focus:ring-2 focus:ring-[#070A52] dark:focus:ring-white resize-none placeholder:text-gray-400 dark:placeholder:text-gray-400"
        />
        <button
          type="submit"
          className="w-full bg-[#070A52] dark:bg-white text-white dark:text-primary px-4 xs:px-5 py-2 rounded-md font-medium hover:scale-105 transition story-link flex items-center justify-center gap-2 text-base"
          disabled={sent}
        >
          {sent ? "Message Sent!" : (
            <>
              Send Message <SendHorizonal size={16} xs-size={18} />
            </>
          )}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
