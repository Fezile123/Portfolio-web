import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import GlowCard from "../components/ui/GlowCard";
import MagneticButton from "../components/ui/MagneticButton";
import Toast from "../components/ui/Toast";
import { PROFILE } from "../constants/data";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/fezilemnisi",
    href: PROFILE.linkedin,
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/fezilemnisi",
    href: PROFILE.github,
  },
  {
    icon: MapPin,
    label: "Location",
    value: PROFILE.location,
    href: null,
  },
];

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    company: "", // honeypot — real users never fill this in
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const fieldRefs = { name: nameRef, email: emailRef, message: messageRef };

  const MESSAGE_MAX = 600;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot: if this hidden field has a value, it's almost certainly a bot.
    // Pretend to succeed so the bot doesn't learn to avoid the field.
    if (values.company) {
      setToast({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setValues({ name: "", email: "", message: "", company: "" });
      setTimeout(() => setToast(null), 4000);
      return;
    }

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Move focus to the first invalid field so keyboard/screen-reader
      // users land exactly where they need to fix something.
      const firstErrorField = ["name", "email", "message"].find(
        (field) => validationErrors[field]
      );
      fieldRefs[firstErrorField]?.current?.focus();
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mpqvvzqk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          subject: `Portfolio Contact - ${values.name}`,
        }),
      });

      if (response.ok) {
        setToast({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });

        setValues({
          name: "",
          email: "",
          message: "",
          company: "",
        });
      } else {
        setToast({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setToast({
        type: "error",
        message: "Unable to send message.",
      });
    }

    setSubmitting(false);

    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  return (
    <section id="contact" className="relative section-padding">
      <div className="container-max">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
          description="Interested in working together, hiring me, or simply saying hello? Feel free to reach out."
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16">

          <Reveal direction="right">
            <GlowCard className="p-8 h-full flex flex-col">

              <h3 className="text-2xl font-semibold text-text mb-8">
                Get in Touch
              </h3>

              <div className="flex flex-col gap-6 flex-1">

                {CONTACT_INFO.map((info) => {
                  const Icon = info.icon;

                  const content = (
                    <div className="group flex items-center gap-5 rounded-2xl p-5 transition-all duration-300 hover:bg-white/5 hover:-translate-y-1">

                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent2/20 text-accent2 group-hover:scale-110 transition-transform">

                        <Icon size={20} />

                      </div>

                      <div>

                        <p className="text-sm text-muted">
                          {info.label}
                        </p>

                        <p className="text-base font-semibold text-text break-all">
                          {info.value}
                        </p>

                      </div>

                    </div>
                  );

                  return info.href ? (
                    <a
                      key={info.label}
                      href={info.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={info.label}>
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 border-t border-white/10 pt-8">

                <p className="text-sm text-muted leading-7">
                  Based in {PROFILE.location}. Available for graduate opportunities, internships, freelance projects and remote collaboration.
                </p>

              </div>

            </GlowCard>

          </Reveal>

          <Reveal delay={0.1}>

            <GlowCard className="p-8">

              <h3 className="text-2xl font-semibold text-text mb-8">
                Send Me a Message
              </h3>
                            <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6"
              >

                {/* Honeypot field — hidden from sighted users, tab order, and
                    screen readers. Bots that auto-fill every field trip it. */}
                <div className="absolute left-[-9999px] w-px h-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={values.company}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-muted mb-2"
                  >
                    Your Name
                  </label>

                  <input
                    ref={nameRef}
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    disabled={submitting}
                    placeholder="Enter your full name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full rounded-xl bg-white/5 border ${
                      errors.name
                        ? "border-red-400"
                        : "border-white/10"
                    } px-4 py-3 text-text placeholder:text-muted/60 focus:outline-none focus:border-accent2 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                  />

                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-2 text-sm text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-muted mb-2"
                  >
                    Email Address
                  </label>

                  <input
                    ref={emailRef}
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    disabled={submitting}
                    placeholder="Enter your email address"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full rounded-xl bg-white/5 border ${
                      errors.email
                        ? "border-red-400"
                        : "border-white/10"
                    } px-4 py-3 text-text placeholder:text-muted/60 focus:outline-none focus:border-accent2 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                  />

                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-2 text-sm text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-muted"
                    >
                      Message
                    </label>

                    <span
                      className={`text-xs ${
                        values.message.length > MESSAGE_MAX
                          ? "text-red-400"
                          : "text-muted/60"
                      }`}
                    >
                      {values.message.length}/{MESSAGE_MAX}
                    </span>
                  </div>

                  <textarea
                    ref={messageRef}
                    id="message"
                    name="message"
                    rows={6}
                    maxLength={MESSAGE_MAX}
                    value={values.message}
                    onChange={handleChange}
                    disabled={submitting}
                    placeholder="Tell me about your project, internship opportunity, or simply say hello..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full rounded-xl bg-white/5 border ${
                      errors.message
                        ? "border-red-400"
                        : "border-white/10"
                    } px-4 py-3 text-text placeholder:text-muted/60 resize-none focus:outline-none focus:border-accent2 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                  />

                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-2 text-sm text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <MagneticButton
                  as={motion.button}
                  type="submit"
                  variant="primary"
                  disabled={submitting}
                  className="w-full justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <Loader2
                        size={18}
                        className="animate-spin"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </MagneticButton>

              </form>

            </GlowCard>

          </Reveal>

        </div>

      </div>

      <Toast
        toast={toast}
        onClose={() => setToast(null)}
      />

    </section>
  );
}