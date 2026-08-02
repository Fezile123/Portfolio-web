import { useState } from "react";
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
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

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

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mpqvvzqk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...values,
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

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-muted mb-2"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full rounded-xl bg-white/5 border ${
                      errors.name
                        ? "border-red-400"
                        : "border-white/10"
                    } px-4 py-3 text-text placeholder:text-muted/60 focus:outline-none focus:border-accent2 transition-all`}
                  />

                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400">
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
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={`w-full rounded-xl bg-white/5 border ${
                      errors.email
                        ? "border-red-400"
                        : "border-white/10"
                    } px-4 py-3 text-text placeholder:text-muted/60 focus:outline-none focus:border-accent2 transition-all`}
                  />

                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-muted mb-2"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, internship opportunity, or simply say hello..."
                    className={`w-full rounded-xl bg-white/5 border ${
                      errors.message
                        ? "border-red-400"
                        : "border-white/10"
                    } px-4 py-3 text-text placeholder:text-muted/60 resize-none focus:outline-none focus:border-accent2 transition-all`}
                  />

                  {errors.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <MagneticButton
                  as={motion.button}
                  type="submit"
                  variant="primary"
                  disabled={submitting}
                  className="w-full justify-center py-4 text-base"
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