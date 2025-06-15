
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
    <section id="contact" className="my-20 max-w-lg mx-auto bg-card px-8 py-10 rounded-2xl shadow-lg border border-gray-200 animate-fade-in">
      <h2 className="text-2xl font-bold text-[#070A52] mb-2 flex items-center gap-2">
        <MailIcon size={28} className="text-[#070A52]" /> Need Coding Help?
      </h2>
      <p className="text-muted-foreground mb-6">
        Reach out, and our team will get back to you as soon as possible!
      </p>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <input 
          required
          type="text" 
          name="name"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-md transition focus:outline-none focus:ring-2 focus:ring-[#070A52] placeholder:text-gray-400"
        />
        <input 
          required
          type="email" 
          name="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded-md transition focus:outline-none focus:ring-2 focus:ring-[#070A52] placeholder:text-gray-400"
        />
        <textarea
          required
          name="message"
          rows={4}
          placeholder="How can we help you?"
          className="w-full px-4 py-2 border rounded-md transition focus:outline-none focus:ring-2 focus:ring-[#070A52] resize-none placeholder:text-gray-400"
        />
        <button
          type="submit"
          className="bg-[#070A52] text-white px-5 py-2 rounded-md font-medium hover:scale-105 transition story-link flex items-center gap-2"
          disabled={sent}
        >
          {sent ? "Message Sent!" : (
            <>
              Send Message <SendHorizonal size={18} />
            </>
          )}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
