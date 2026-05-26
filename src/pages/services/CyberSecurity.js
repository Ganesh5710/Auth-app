import React, {
  useState,
  useEffect,
} from "react";

import {
  Link,
} from "react-router-dom";

import GlobalLayout from "../../components/GlobalLayout";

import {
  useLanguage,
} from "../../context/LanguageContext";

import translationsData from "../../utils/translations";

import {
  ShieldCheck,
  Lock,
  Fingerprint,
  Bug,
  Eye,
  ServerCrash,
  ArrowRight,
  CheckCircle2,
  Cloud,
  Database,
  Cpu,
  Workflow,
  BarChart3,
  Sun,
  Moon,
  PlayCircle,
  Users,
  Star,
  Globe,
  Rocket,
  Laptop,
  Shield,
  ScanSearch,
  Network,
  AlarmClock,
  HardDrive,
} from "lucide-react";

export default function CyberSecurity() {

  const {
    language,
    isRTL,
  } = useLanguage();

  const translations =
    translationsData[language];

  const [darkMode, setDarkMode] =
    useState(true);

  useEffect(() => {

    if (darkMode) {

      document.documentElement.classList.add("dark");

    } else {

      document.documentElement.classList.remove("dark");

    }

  }, [darkMode]);

  const services = [

    "Threat Detection",
    "Cloud Security",
    "Network Protection",
    "Data Encryption",
    "Penetration Testing",
    "24/7 Monitoring",
    "Identity Protection",
    "Security Audits",

  ];

  const stats = [

    {
      number: "500+",
      title: "Protected Systems",
    },

    {
      number: "99.99%",
      title: "Threat Detection",
    },

    {
      number: "24/7",
      title: "Monitoring",
    },

    {
      number: "150+",
      title: "Enterprise Clients",
    },

  ];

  const testimonials = [

    {
      name: "Michael Johnson",
      role: "CEO, NexaTech",

      review:
        "Outstanding cybersecurity infrastructure with enterprise-grade monitoring and AI-powered protection.",
    },

    {
      name: "Sarah Williams",
      role: "Cloud Engineer",

      review:
        "Professional cloud security systems with advanced threat detection and real-time monitoring.",
    },

    {
      name: "David Smith",
      role: "CTO, SkyCore",

      review:
        "Amazing enterprise protection systems with scalable infrastructure security solutions.",
    },

  ];

  return (

    <GlobalLayout>

      <div
        dir={isRTL ? "rtl" : "ltr"}
        className="
          min-h-screen
          bg-white
          text-gray-900
          dark:bg-[#050b1a]
          dark:text-white
          overflow-hidden
          transition-all
          duration-500
        "
      >

        {/* THEME TOGGLE */}

        <button
          onClick={() =>
            setDarkMode(!darkMode)
          }
          className="
            fixed
            top-6
            right-6
            z-50
            p-4
            rounded-full
            bg-white
            dark:bg-[#111c38]
            border
            border-cyan-500/20
            shadow-lg
            hover:scale-110
            transition-all
            duration-300
          "
        >

          {darkMode ? (

            <Sun
              size={24}
              className="text-yellow-400"
            />

          ) : (

            <Moon
              size={24}
              className="text-cyan-500"
            />

          )}

        </button>

        {/* SECTION 1 HERO */}

        <section className="relative py-32 px-6 overflow-hidden">

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[160px] rounded-full"></div>

          <div className={`
            relative
            z-10
            max-w-7xl
            mx-auto
            grid
            lg:grid-cols-2
            gap-20
            items-center
            ${
              isRTL
                ? "text-right"
                : "text-left"
            }
          `}>

            {/* LEFT */}

            <div>

              <div className={`
                inline-flex
                items-center
                gap-3
                px-5
                py-3
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-500/20
                text-cyan-500
                mb-8
              `}>

                <ShieldCheck size={30} />

                Enterprise Security Solutions

              </div>

              <h1 className="
                text-6xl
                md:text-7xl
                font-black
                leading-tight
                mb-8
              ">

                Advanced

                <span className="
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500
                  text-transparent
                  bg-clip-text
                ">

                  {" "}
                  Cyber Security

                </span>

              </h1>

              <p className="
                dark:text-gray-300
                text-gray-700
                text-xl
                leading-10
                max-w-2xl
              ">

                Protect enterprise infrastructure using advanced cybersecurity, AI-powered threat intelligence, encryption, cloud protection and real-time monitoring systems.

              </p>

              <div className={`
                flex
                flex-wrap
                gap-5
                mt-12
                ${
                  isRTL
                    ? "justify-end"
                    : ""
                }
              `}>

                <Link
                  to="/contact"
                  className="
                    px-10
                    py-5
                    rounded-2xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-500
                    text-white
                    font-bold
                    hover:scale-105
                    transition-all
                    duration-300
                    shadow-2xl
                    shadow-cyan-500/20
                    inline-flex
                    items-center
                    gap-3
                  "
                >

                  Get Started

                  <ArrowRight size={20} />

                </Link>

                <button className="
                  px-10
                  py-5
                  rounded-2xl
                  border
                  border-cyan-500/20
                  hover:bg-cyan-500/10
                  transition-all
                  duration-300
                  inline-flex
                  items-center
                  gap-3
                ">

                  <PlayCircle size={22} />

                  Explore Solutions

                </button>

              </div>

            </div>

            {/* RIGHT */}

            <div className="
              bg-white
              dark:bg-[#111c38]
              rounded-[40px]
              border
              border-cyan-500/20
              p-10
            ">

              <div className="grid grid-cols-2 gap-6">

                <FeatureBox
                  icon={<Cloud size={32} />}
                  title="Cloud Security"
                />

                <FeatureBox
                  icon={<Database size={32} />}
                  title="Data Protection"
                />

                <FeatureBox
                  icon={<Cpu size={32} />}
                  title="AI Intelligence"
                />

                <FeatureBox
                  icon={<Workflow size={32} />}
                  title="Automation"
                />

              </div>

            </div>

          </div>

        </section>

        {/* SECTION 2 STATS */}

        <section className="px-6 pb-24">

          <div className="
            max-w-7xl
            mx-auto
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
          ">

            {stats.map((item, index) => (

              <div
                key={index}
                className="
                  bg-white
                  dark:bg-[#111c38]
                  rounded-3xl
                  p-10
                  border
                  border-cyan-500/10
                  text-center
                "
              >

                <h2 className="
                  text-5xl
                  font-black
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500
                  text-transparent
                  bg-clip-text
                  mb-4
                ">

                  {item.number}

                </h2>

                <p className="
                  dark:text-gray-300
                  text-gray-600
                  text-lg
                ">

                  {item.title}

                </p>

              </div>

            ))}

          </div>

        </section>

        {/* SECTION 3 SERVICES */}

        <section className="
          px-6
          py-28
          bg-gray-100
          dark:bg-[#081225]
        ">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20">

              <h2 className="
                text-6xl
                font-black
                mb-6
              ">

                Security Services

              </h2>

            </div>

            <div className="
              grid
              md:grid-cols-2
              lg:grid-cols-4
              gap-8
            ">

              {services.map((service, index) => (

                <div
                  key={index}
                  className="
                    bg-white
                    dark:bg-[#111c38]
                    rounded-[32px]
                    border
                    border-cyan-500/20
                    p-8
                    hover:-translate-y-2
                    transition-all
                    duration-500
                  "
                >

                  <CheckCircle2
                    size={30}
                    className="
                      text-cyan-400
                      mb-5
                    "
                  />

                  <h3 className="
                    text-2xl
                    font-bold
                  ">

                    {service}

                  </h3>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* SECTION 4 FEATURES */}

        <section className="px-6 py-28">

          <div className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-2
            md:grid-cols-4
            gap-8
          ">

            {[
              {
                icon: <Lock size={38} />,
                title: "Encryption",
              },

              {
                icon: <Fingerprint size={38} />,
                title: "Identity Security",
              },

              {
                icon: <Bug size={38} />,
                title: "Threat Detection",
              },

              {
                icon: <Eye size={38} />,
                title: "24/7 Monitoring",
              },

            ].map((item, index) => (

              <div
                key={index}
                className="
                  bg-white
                  dark:bg-[#111c38]
                  rounded-[32px]
                  border
                  border-cyan-500/20
                  p-10
                  text-center
                "
              >

                <div className="
                  flex
                  justify-center
                  mb-6
                  text-cyan-400
                ">

                  {item.icon}

                </div>

                <h3 className="
                  text-2xl
                  font-bold
                ">

                  {item.title}

                </h3>

              </div>

            ))}

          </div>

        </section>

        {/* SECTION 5 IMAGES */}

        <section className="
          px-6
          py-28
          bg-gray-100
          dark:bg-[#081225]
        ">

          <div className="
            max-w-7xl
            mx-auto
            grid
            md:grid-cols-2
            gap-10
          ">

            <img
              src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1400&auto=format&fit=crop"
              alt="Cyber Security"
              className="
                w-full
                h-[450px]
                object-cover
                rounded-[32px]
              "
            />

            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1400&auto=format&fit=crop"
              alt="Security"
              className="
                w-full
                h-[450px]
                object-cover
                rounded-[32px]
              "
            />

          </div>

        </section>

        {/* SECTION 6 PROCESS */}

        <section className="px-6 py-28">

          <div className="max-w-7xl mx-auto text-center">

            <h2 className="
              text-6xl
              font-black
              mb-20
            ">

              Security Process

            </h2>

            <div className="
              grid
              md:grid-cols-4
              gap-8
            ">

              {[
                {
                  icon: <ScanSearch size={32} />,
                  title: "Analyze",
                },

                {
                  icon: <Network size={32} />,
                  title: "Protect",
                },

                {
                  icon: <AlarmClock size={32} />,
                  title: "Monitor",
                },

                {
                  icon: <HardDrive size={32} />,
                  title: "Recover",
                },

              ].map((item, index) => (

                <div
                  key={index}
                  className="
                    bg-white
                    dark:bg-[#111c38]
                    rounded-[32px]
                    border
                    border-cyan-500/20
                    p-10
                  "
                >

                  <div className="
                    w-16
                    h-16
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-500
                    flex
                    items-center
                    justify-center
                    text-white
                    mx-auto
                    mb-6
                  ">

                    {item.icon}

                  </div>

                  <h3 className="
                    text-2xl
                    font-bold
                  ">

                    {item.title}

                  </h3>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* SECTION 7 TESTIMONIALS */}

        <section className="
          px-6
          py-28
          bg-gray-100
          dark:bg-[#081225]
        ">

          <div className="max-w-7xl mx-auto">

            <div className="
              grid
              lg:grid-cols-3
              gap-8
            ">

              {testimonials.map((item, index) => (

                <div
                  key={index}
                  className="
                    bg-white
                    dark:bg-[#111c38]
                    rounded-[32px]
                    border
                    border-cyan-500/20
                    p-10
                  "
                >

                  <div className="
                    flex
                    gap-2
                    mb-6
                  ">

                    {[1, 2, 3, 4, 5].map((star) => (

                      <Star
                        key={star}
                        size={20}
                        className="
                          text-yellow-400
                          fill-yellow-400
                        "
                      />

                    ))}

                  </div>

                  <p className="
                    text-lg
                    leading-8
                    text-gray-700
                    dark:text-gray-400
                    mb-8
                  ">

                    {item.review}

                  </p>

                  <h3 className="
                    text-2xl
                    font-bold
                  ">

                    {item.name}

                  </h3>

                  <p className="
                    text-cyan-400
                    mt-2
                  ">

                    {item.role}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* SECTION 8 CTA */}

        <section className="px-6 py-28">

          <div className="
            max-w-7xl
            mx-auto
            bg-gradient-to-r
            from-cyan-500
            via-blue-500
            to-sky-500
            rounded-[50px]
            p-16
            text-center
            text-white
          ">

            <h2 className="
              text-6xl
              font-black
              mb-8
            ">

              Ready To Secure Your Business?

            </h2>

            <p className="
              text-2xl
              leading-10
              max-w-4xl
              mx-auto
              mb-12
            ">

              Build enterprise-grade cybersecurity systems powered by AI monitoring, encryption and cloud protection.

            </p>

            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                gap-3
                px-12
                py-6
                bg-white
                text-cyan-600
                rounded-2xl
                text-xl
                font-black
                hover:scale-105
                transition-all
                duration-300
              "
            >

              Contact Security Team

              <ArrowRight size={22} />

            </Link>

          </div>

        </section>

      </div>

    </GlobalLayout>

  );

}

function FeatureBox({
  icon,
  title,
}) {

  return (

    <div className="
      bg-[#0f172a]
      rounded-3xl
      p-8
      border
      border-white/10
      text-center
      text-white
      hover:border-cyan-400/40
      transition-all
      duration-500
    ">

      <div className="
        w-16
        h-16
        rounded-2xl
        bg-gradient-to-r
        from-cyan-500
        to-blue-500
        flex
        items-center
        justify-center
        mx-auto
        mb-5
      ">

        {icon}

      </div>

      <h3 className="text-xl font-bold">

        {title}

      </h3>

    </div>

  );

}