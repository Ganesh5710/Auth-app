import React, { useState } from "react";

import GlobalLayout from "../components/GlobalLayout";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Globe,
} from "lucide-react";

export default function Contact() {

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  };

  return (

    <GlobalLayout>

      <div className="min-h-screen overflow-hidden text-gray-900 dark:text-white transition-all duration-500">

        {/* HERO */}

        <section className="relative py-28 px-6">

          {/* GLOW EFFECTS */}

          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500/20 blur-[140px] rounded-full"></div>

          <div className="relative z-10 max-w-7xl mx-auto text-center">

            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 mb-8">

              <MessageSquare size={18} />

              <span>
                24/7 Customer Support
              </span>

            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">

              Contact

              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">

                {" "}Enkonix

              </span>

            </h1>

            <p className="text-gray-700 dark:text-gray-300 text-lg md:text-2xl mt-8 max-w-4xl mx-auto leading-relaxed">

              We help businesses transform digitally with AI-powered solutions,
              modern web applications, cybersecurity, and cloud technologies.

            </p>

          </div>

        </section>

        {/* CONTACT SECTION */}

        <section className="px-6 pb-24">

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* LEFT SIDE */}

            <div className="space-y-8">

              <div>

                <h2 className="text-4xl font-bold mb-6">

                  Let's Talk

                </h2>

                <p className="text-gray-600 dark:text-gray-400 leading-8 text-lg">

                  Reach out to our team for business inquiries,
                  AI solutions, cloud services, application development,
                  and digital transformation consulting.

                </p>

              </div>

              {/* CARDS */}

              <ContactCard
                icon={<Mail size={28} />}
                title="Email Address"
                value="support@enkonix.in"
              />

              <ContactCard
                icon={<Phone size={28} />}
                title="Phone Number"
                value="+91 123654789"
              />

              <ContactCard
                icon={<MapPin size={58} />}
                title="Office Address"
                value="Enkonix Software Services
1st Floor, Novel Office,
MSR Tech Park,
Subbaiah Reddy Colony, Marathahalli Village,
Marathahalli, Bengaluru,
Karnataka 560036, India"
              />

              <ContactCard
                icon={<Clock size={28} />}
                title="Business Hours"
                value="Mon - Fri : 10 AM - 7 PM"
              />

              <ContactCard
                icon={<Globe size={28} />}
                title="Website"
                value="www.enkonix.in"
              />

            </div>

            {/* RIGHT SIDE */}

            <div
              className="
                bg-white dark:bg-[#0f172a]
                border
                border-gray-300 dark:border-cyan-500/10
                rounded-[35px]
                p-8
                shadow-2xl
              "
            >

              <h2 className="text-4xl font-bold mb-8">

                Send Message

              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* NAME */}

                <div>

                  <label className="block mb-3 text-gray-700 dark:text-gray-300">

                    Full Name

                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="
                      w-full
                      bg-white dark:bg-[#111c38]
                      text-black dark:text-white
                      border
                      border-gray-300 dark:border-white/10
                      rounded-2xl
                      px-5
                      py-4
                      outline-none
                      focus:border-cyan-400
                      transition-all
                    "
                  />

                </div>

                {/* EMAIL */}

                <div>

                  <label className="block mb-3 text-gray-700 dark:text-gray-300">

                    Email Address

                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="
                      w-full
                      bg-white dark:bg-[#111c38]
                      text-black dark:text-white
                      border
                      border-gray-300 dark:border-white/10
                      rounded-2xl
                      px-5
                      py-4
                      outline-none
                      focus:border-cyan-400
                      transition-all
                    "
                  />

                </div>

                {/* SUBJECT */}

                <div>

                  <label className="block mb-3 text-gray-700 dark:text-gray-300">

                    Subject

                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    required
                    className="
                      w-full
                      bg-white dark:bg-[#111c38]
                      text-black dark:text-white
                      border
                      border-gray-300 dark:border-white/10
                      rounded-2xl
                      px-5
                      py-4
                      outline-none
                      focus:border-cyan-400
                      transition-all
                    "
                  />

                </div>

                {/* MESSAGE */}

                <div>

                  <label className="block mb-3 text-gray-700 dark:text-gray-300">

                    Message

                  </label>

                  <textarea
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    required
                    className="
                      w-full
                      bg-white dark:bg-[#111c38]
                      text-black dark:text-white
                      border
                      border-gray-300 dark:border-white/10
                      rounded-2xl
                      px-5
                      py-4
                      outline-none
                      resize-none
                      focus:border-cyan-400
                      transition-all
                    "
                  ></textarea>

                </div>

                {/* BUTTON */}

                <button
                  type="submit"
                  className="
                    w-full
                    py-5
                    rounded-2xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-500
                    text-white
                    font-bold
                    text-lg
                    hover:scale-[1.02]
                    transition-all
                    flex
                    items-center
                    justify-center
                    gap-3
                  "
                >

                  <Send size={20} />

                  Send Message

                </button>

              </form>

            </div>

          </div>

        </section>

        {/* MAP SECTION */}

        <section className="px-6 pb-24">

          <div className="max-w-7xl mx-auto">

            <div
              className="
                overflow-hidden
                rounded-[35px]
                border border-cyan-500/20
                shadow-2xl
                hover:shadow-cyan-500/20
                transition-all duration-500
              "
            >

              <iframe
                title="Stackly Office Location"
                src="https://maps.google.com/maps?q=Enkonix%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>

          </div>

        </section>

      </div>

    </GlobalLayout>

  );

}

/* CONTACT CARD */

function ContactCard({
  icon,
  title,
  value,
}) {

  return (

    <div
      className="
        bg-white dark:bg-[#0f172a]
        border
        border-gray-300 dark:border-white/10
        rounded-3xl
        p-6
        flex
        items-start
        gap-5
        hover:border-cyan-400/30
        transition-all
        duration-300
      "
    >

      <div
        className="
          w-16
          h-16
          rounded-2xl
          bg-gradient-to-r
          from-cyan-500
          to-blue-500
          flex
          items-center
          justify-center
          text-white
          shrink-0
        "
      >

        {icon}

      </div>

      <div>

        <h3 className="text-2xl font-bold mb-2">

          {title}

        </h3>

        <p className="text-gray-600 dark:text-gray-400 leading-7 whitespace-pre-line">

          {value}

        </p>

      </div>

    </div>

  );

}