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
    <>
      <h2 className="text-2xl sm:text-3xl font-semibold text-primary dark:text-white text-center mb-4">
        Reach Out To Us
      </h2>
      <section
        id="contact"
        className="my-12 sm:my-20 max-w-full  mx-auto sm:max-w-[90%] rounded-2xl shadow-lg border border-gray-200 dark:border-[#323247] animate-fade-in bg-card dark:bg-[#232437] px-1 xs:px-1 sm:px-3 py-3 sm:py-5 w-full"
        // className="my-12 sm:my-20 max-w-full sm:max-w-lg mx-auto rounded-2xl shadow-lg border border-gray-200 dark:border-[#323247] animate-fade-in
        //   bg-card dark:bg-[#232437] px-1 xs:px-1 sm:px-3 py-3 sm:py-5 w-full"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2 text-[#070A52] dark:text-white">
          <MailIcon size={24} className="text-[#070A52] dark:text-white" /> Need
          Coding Help?
        </h2>
        <p className="text-muted-foreground mb-5 sm:mb-6 dark:text-gray-300 text-sm sm:text-base">
          Reach out, and our team will get back to you as soon as possible!
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-3 sm:px-4 py-2 border rounded-md bg-white dark:bg-[#181927] text-[#070A52] dark:text-white border-gray-300 dark:border-[#323247] transition focus:outline-none focus:ring-2 focus:ring-[#070A52] dark:focus:ring-white placeholder:text-gray-400 dark:placeholder:text-gray-400 text-base"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-3 sm:px-4 py-2 border rounded-md bg-white dark:bg-[#181927] text-[#070A52] dark:text-white border-gray-300 dark:border-[#323247] transition focus:outline-none focus:ring-2 focus:ring-[#070A52] dark:focus:ring-white placeholder:text-gray-400 dark:placeholder:text-gray-400 text-base"
          />
          <textarea
            required
            name="message"
            rows={4}
            placeholder="How can we help you?"
            className="w-full px-3 sm:px-4 py-2 border rounded-md bg-white dark:bg-[#181927] text-[#070A52] dark:text-white border-gray-300 dark:border-[#323247] transition focus:outline-none focus:ring-2 focus:ring-[#070A52] dark:focus:ring-white resize-none placeholder:text-gray-400 dark:placeholder:text-gray-400 text-base"
          />
          <button
            type="submit"
            className="w-full rounded-lg font-medium bg-primary text-primary-foreground text-lg shadow-lg story-link hover-scale transition-allpx-5 py-2 transition story-link flex items-center justify-center gap-2"
            disabled={sent}
          >
            {sent ? (
              "Message Sent!"
            ) : (
              <>
                Send Message <SendHorizonal size={18} />
              </>
            )}
          </button>
        </form>
      </section>
      <br></br>
    </>
  );
};

export default ContactForm;
