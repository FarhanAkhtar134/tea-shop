"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    // Simulate form submission (replace with actual API endpoint)
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: "📞",
      title: t("contact.phone.title"),
      content: t("contact.phone.number"),
      link: "tel:+85212345678",
      color: "from-blue-900/20 to-transparent",
    },
    {
      icon: "✉️",
      title: t("contact.email.title"),
      content: t("contact.email.address"),
      link: "mailto:hello@teahaven.com",
      color: "from-emerald-900/20 to-transparent",
    },
    {
      icon: "📍",
      title: t("contact.address.title"),
      content: (
        <>
          <div>{t("contact.address.line1")}</div>
          <div>{t("contact.address.line2")}</div>
          <div>{t("contact.address.line3")}</div>
        </>
      ),
      link: null,
      color: "from-amber-900/20 to-transparent",
    },
  ];

  return (
    <div
      className="min-h-screen pt-20 pb-16 sm:pt-24 sm:pb-20 transition-colors duration-300"
      style={{
        background:
          "linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-serif mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            {t("contact.title")}
          </h1>
          <div
            className="w-16 h-px mx-auto mb-4"
            style={{ backgroundColor: "var(--border-color)" }}
          />
          <p
            className="max-w-2xl mx-auto text-sm sm:text-base px-4"
            style={{ color: "var(--text-secondary)" }}
          >
            {t("contact.subtitle")}
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl overflow-hidden transition-all duration-300"
              style={{ backgroundColor: "var(--bg-primary)" }}
            >
              <div
                className={`p-6 text-center bg-gradient-to-br ${info.color}`}
              >
                <div className="text-5xl mb-4">{info.icon}</div>
                <h3
                  className="text-lg sm:text-xl font-serif mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-sm sm:text-base transition-colors hover:opacity-70 inline-block"
                    style={{ color: "var(--accent)" }}
                  >
                    {info.content}
                  </a>
                ) : (
                  <div
                    className="text-sm sm:text-base"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {info.content}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Business Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto mb-12 sm:mb-16 p-6 sm:p-8 rounded-2xl text-center"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <div className="text-3xl mb-3">🕒</div>
          <h3
            className="text-xl sm:text-2xl font-serif mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            {t("contact.hours.title")}
          </h3>
          <div
            className="space-y-2 text-sm sm:text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            <p>{t("contact.hours.weekday")}</p>
            <p>{t("contact.hours.saturday")}</p>
            <p>{t("contact.hours.sunday")}</p>
          </div>
        </motion.div>

        {/* Contact Form and Map Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl p-6 sm:p-8"
            style={{ backgroundColor: "var(--bg-primary)" }}
          >
            <h3
              className="text-xl sm:text-2xl font-serif mb-6 text-center"
              style={{ color: "var(--text-primary)" }}
            >
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  className="block text-sm mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--text-primary)",
                    border: `1px solid var(--border-color)`,
                  }}
                />
              </div>

              <div>
                <label
                  className="block text-sm mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--text-primary)",
                    border: `1px solid var(--border-color)`,
                  }}
                />
              </div>

              <div>
                <label
                  className="block text-sm mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {t("contact.form.message")}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 resize-none"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--text-primary)",
                    border: `1px solid var(--border-color)`,
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="w-full py-3 rounded-lg transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:transform hover:-translate-y-0.5"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--bg-primary)",
                }}
              >
                {formStatus === "sending"
                  ? t("contact.form.sending")
                  : formStatus === "success"
                    ? t("contact.form.success")
                    : t("contact.form.send")}
              </button>

              {formStatus === "error" && (
                <p className="text-red-500 text-sm text-center mt-2">
                  {t("contact.form.error")}
                </p>
              )}
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl overflow-hidden h-96 lg:h-auto"
            style={{ backgroundColor: "var(--bg-primary)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.957298029765!2d114.158764!3d22.279995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400638c6fc2b5%3A0x8b5f6b8f5b5b5b5b!2sCentral%2C%20Hong%20Kong!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tea Haven Location"
              className="min-h-[300px] lg:min-h-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
