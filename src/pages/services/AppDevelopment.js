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
  Smartphone,
  ShieldCheck,
  Cloud,
  Cpu,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Database,
  Globe,
  BarChart3,
  Workflow,
  Users,
  PlayCircle,
  Star,
  Code2,
  MonitorSmartphone,
} from "lucide-react";

export default function AppDevelopment() {

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

  const features = [

    translations.crossPlatformApps ||
    "Cross Platform Mobile Apps",

    translations.androidIOSDevelopment ||
    "Android & iOS Development",

    translations.aiPoweredApplications ||
    "AI Powered Applications",

    translations.cloudIntegratedBackend ||
    "Cloud Integrated Backend",

    translations.realTimeNotifications ||
    "Real-time Notifications",

    translations.secureAuthentication ||
    "Secure Authentication System",

    translations.fastPerformanceOptimization ||
    "Fast Performance Optimization",

    translations.modernUIDesign ||
    "Modern UI/UX Design",

  ];

  const technologies = [

    "React Native",
    "Flutter",
    "Firebase",
    "Node.js",
    "MongoDB",
    "AWS Cloud",
    "AI Integration",
    "REST APIs",

  ];

  const stats = [

    {
      number: "250+",
      title:
        translations.mobileApps ||
        "Mobile Apps",
    },

    {
      number: "99%",
      title:
        translations.clientSatisfaction ||
        "Client Satisfaction",
    },

    {
      number: "24/7",
      title:
        translations.support ||
        "Support",
    },

    {
      number: "150+",
      title:
        translations.enterpriseClients ||
        "Enterprise Clients",
    },

  ];

  const services = [

    {
      icon: <Cloud size={34} />,
      title: "Cloud Integrated Apps",
      desc:
        "Scalable cloud infrastructure integrated mobile applications.",
    },

    {
      icon: <ShieldCheck size={34} />,
      title: "Secure Authentication",
      desc:
        "Enterprise-level authentication and security systems.",
    },

    {
      icon: <Cpu size={34} />,
      title: "AI Mobile Systems",
      desc:
        "AI-powered applications with intelligent automation systems.",
    },

    {
      icon: <Rocket size={34} />,
      title: "Performance Optimization",
      desc:
        "Ultra-fast mobile applications with optimized architecture.",
    },

  ];

  const testimonials = [

    {
      name: "Michael Johnson",
      role: "CEO, NexaTech",

      review:
        "Enkonix delivered enterprise-grade mobile applications with incredible UI/UX and cloud integration.",
    },

    {
      name: "Sarah Williams",
      role: "Startup Founder",

      review:
        "Professional mobile development services with modern AI integration and scalable systems.",
    },

    {
      name: "David Smith",
      role: "CTO, SkyCore",

      review:
        "Best cross-platform application development company with enterprise infrastructure.",
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


        {/* SECTION 1 HERO */}

        <section className="relative py-32 px-6 overflow-hidden">

          <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-cyan-500/20 blur-[160px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-500/20 blur-[160px] rounded-full"></div>

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

              <div className="
                inline-flex
                items-center
                gap-3
                px-6
                py-3
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-500/20
                text-cyan-500
                mb-8
              ">

                <Smartphone size={26} />

                Mobile App Development

              </div>

              <h1 className="
                text-6xl
                md:text-7xl
                font-black
                leading-tight
                mb-8
              ">

                Next Gen

                <span className="
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500
                  text-transparent
                  bg-clip-text
                ">

                  {" "}
                  App Development

                </span>

              </h1>

              <p className="
                dark:text-gray-300
                text-gray-700
                text-xl
                leading-10
                max-w-2xl
              ">

                We build ultra-modern Android, iOS, and cross-platform applications powered by AI, cloud technologies, UI/UX systems, and enterprise infrastructure.

              </p>

              {/* BUTTONS */}

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
                    text-lg
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

                <button
                  className="
                    px-10
                    py-5
                    rounded-2xl
                    border
                    border-cyan-500/20
                    hover:bg-cyan-500/10
                    transition-all
                    duration-300
                    text-lg
                    inline-flex
                    items-center
                    gap-3
                  "
                >

                  <PlayCircle size={22} />

                  View Portfolio

                </button>

              </div>

              {/* STATS */}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

                {stats.map((item, index) => (

                  <div
                    key={index}
                    className={
                      isRTL
                        ? "text-right"
                        : "text-left"
                    }
                  >

                    <h2 className="
                      text-4xl
                      font-black
                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-500
                      text-transparent
                      bg-clip-text
                    ">

                      {item.number}

                    </h2>

                    <p className="
                      dark:text-gray-400
                      text-gray-600
                      mt-2
                    ">

                      {item.title}

                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative">

              <div className="
                bg-white
                dark:bg-[#111c38]
                border
                border-cyan-500/20
                rounded-[40px]
                p-10
                shadow-2xl
                backdrop-blur-xl
              ">

                <div className="grid grid-cols-2 gap-6">

                  <FeatureCard
                    icon={<Cpu size={35} />}
                    title="AI Integration"
                  />

                  <FeatureCard
                    icon={<Cloud size={35} />}
                    title="Cloud Ready"
                  />

                  <FeatureCard
                    icon={<ShieldCheck size={35} />}
                    title="Secure Apps"
                  />

                  <FeatureCard
                    icon={<Rocket size={35} />}
                    title="Fast Performance"
                  />

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* SECTION 2 FEATURES */}

        <section className="px-6 pb-28">

          <div className="max-w-7xl mx-auto">

            <div className="
              text-center
              mb-20
            ">

              <h2 className="
                text-5xl
                font-black
                mb-6
              ">

                Why Choose Our Apps?

              </h2>

              <p className="
                dark:text-gray-400
                text-gray-600
                text-lg
                max-w-3xl
                mx-auto
                leading-8
              ">

                Enterprise-grade mobile applications designed for scalability, security, automation, and exceptional user experience.

              </p>

            </div>

            <div className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-4
              gap-8
            ">

              {features.map((feature, index) => (

                <div
                  key={index}
                  className="
                    bg-white
                    dark:bg-[#111c38]
                    border
                    border-cyan-500/10
                    rounded-3xl
                    p-8
                    hover:border-cyan-400/40
                    hover:-translate-y-2
                    transition-all
                    duration-500
                    shadow-xl
                  "
                >

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
                    mb-6
                    text-white
                  ">

                    <CheckCircle2 size={30} />

                  </div>

                  <h3 className="
                    text-2xl
                    font-bold
                    leading-10
                  ">

                    {feature}

                  </h3>

                </div>

              ))}

            </div>

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

            <div className="
              text-center
              mb-20
            ">

              <h2 className="
                text-6xl
                font-black
                mb-6
              ">

                Smart Mobile Services

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
                    p-10
                    hover:-translate-y-3
                    hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
                    transition-all
                    duration-500
                  "
                >

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
                    mb-6
                    text-white
                  ">

                    {service.icon}

                  </div>

                  <h3 className="
                    text-2xl
                    font-bold
                    mb-4
                  ">

                    {service.title}

                  </h3>

                  <p className="
                    text-gray-600
                    dark:text-gray-400
                    leading-8
                  ">

                    {service.desc}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* SECTION 4 TECHNOLOGIES */}

        <section className="px-6 py-28">

          <div className="max-w-7xl mx-auto text-center">

            <h2 className="
              text-6xl
              font-black
              mb-20
            ">

              Technologies We Use

            </h2>

            <div className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-8
            ">

              {technologies.map((tech, index) => (

                <div
                  key={index}
                  className="
                    bg-white
                    dark:bg-[#111c38]
                    border
                    border-cyan-500/20
                    rounded-[32px]
                    p-10
                    hover:-translate-y-2
                    transition-all
                    duration-300
                  "
                >

                  <Code2
                    className="
                      mx-auto
                      text-cyan-400
                      mb-6
                    "
                    size={42}
                  />

                  <h3 className="
                    text-2xl
                    font-bold
                  ">

                    {tech}

                  </h3>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* SECTION 5 ANALYTICS */}

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
            lg:grid-cols-4
            gap-8
          ">

            {[
              {
                icon: <Database size={38} />,
                title: "Real-Time Database",
              },

              {
                icon: <BarChart3 size={38} />,
                title: "Analytics System",
              },

              {
                icon: <Workflow size={38} />,
                title: "Automation",
              },

              {
                icon: <Globe size={38} />,
                title: "Global Access",
              },

            ].map((item, index) => (

              <div
                key={index}
                className="
                  bg-white
                  dark:bg-[#111c38]
                  border
                  border-cyan-500/20
                  rounded-[32px]
                  p-10
                  text-center
                "
              >

                <div className="
                  flex
                  justify-center
                  text-cyan-400
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

        </section>

        {/* SECTION 7 TEAM */}

        <section className="
          px-6
          py-28
          bg-gray-100
          dark:bg-[#081225]
        ">

          <div className="max-w-7xl mx-auto text-center">

            <h2 className="
              text-6xl
              font-black
              mb-20
            ">

              Expert App Team

            </h2>

            <div className="
              grid
              md:grid-cols-3
              gap-8
            ">

              {[1, 2, 3].map((item) => (

                <div
                  key={item}
                  className="
                    bg-white
                    dark:bg-[#111c38]
                    border
                    border-cyan-500/20
                    rounded-[32px]
                    p-10
                  "
                >

                  <div className="
                    w-28
                    h-28
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-500
                    mx-auto
                    mb-8
                    flex
                    items-center
                    justify-center
                    text-white
                  ">

                    <Users size={40} />

                  </div>

                  <h3 className="
                    text-3xl
                    font-bold
                    mb-3
                  ">

                    Mobile Architect

                  </h3>

                  <p className="
                    text-cyan-400
                    mb-5
                  ">

                    App Development Expert

                  </p>

                  <p className="
                    text-gray-700
                    dark:text-gray-400
                    leading-8
                  ">

                    Professional mobile engineers building futuristic enterprise applications.

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

              Ready To Build Your App?

            </h2>

            <p className="
              text-2xl
              leading-10
              max-w-4xl
              mx-auto
              mb-12
            ">

              Start building AI-powered mobile applications with futuristic UI/UX and enterprise-grade infrastructure.

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

              Contact Our Team

              <ArrowRight size={22} />

            </Link>

          </div>

        </section>

      </div>

    </GlobalLayout>

  );

}

/* FEATURE CARD */

function FeatureCard({
  icon,
  title,
}) {

  return (

    <div
      className="
        bg-gray-100
        dark:bg-[#0f172a]
        border
        border-cyan-500/10
        rounded-3xl
        p-8
        hover:border-cyan-400/40
        transition-all
        duration-500
        text-center
      "
    >

      <div
        className="
          w-20
          h-20
          rounded-3xl
          bg-gradient-to-r
          from-cyan-500
          to-blue-500
          flex
          items-center
          justify-center
          mx-auto
          mb-6
          text-white
        "
      >

        {icon}

      </div>

      <h3 className="
        text-2xl
        font-bold
      ">

        {title}

      </h3>

    </div>

  );

}