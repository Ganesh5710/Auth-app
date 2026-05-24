import React from "react";

import GlobalLayout from "../components/GlobalLayout";

import {
  useLanguage,
} from "../context/LanguageContext";

import translationsData from "../utils/translations";

import {
  Brain,
  Globe,
  ShieldCheck,
  Rocket,
  Users,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Cloud,
} from "lucide-react";

export default function About() {

  const {
    language,
    isRTL,
  } = useLanguage();

  const translations =
    translationsData[language];

  const values = [

    translations.innovationCreativity ||
      "Innovation & Creativity",

    translations.enterpriseSecurity ||
      "Enterprise Security",

    translations.aiPoweredSolutions ||
      "AI Powered Solutions",

    translations.customerSuccess ||
      "Customer Success",

    translations.scalableArchitecture ||
      "Scalable Architecture",

    translations.modernTechnologies ||
      "Modern Technologies",

    translations.support247 ||
      "24/7 Technical Support",

    translations.globalDigitalTransformation ||
      "Global Digital Transformation",

  ];

  const stats = [

    {
      number: "250+",
      title:
        translations.projectsDelivered ||
        "Projects Delivered",
    },

    {
      number: "120+",
      title:
        translations.globalClients ||
        "Global Clients",
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
        translations.supportSystem ||
        "Support System",
    },

  ];

  return (

    <GlobalLayout>

      <div
        dir={isRTL ? "rtl" : "ltr"}
        className="
          min-h-screen
          bg-white
          dark:bg-[#071028]
          text-black
          dark:text-white
          transition-all
          duration-500
          overflow-hidden
        "
      >

        {/* HERO */}

        <section className="
          relative
          pt-40
          pb-24
          px-6
          overflow-hidden
        ">

          <div className="
            absolute
            top-0
            left-0
            w-[500px]
            h-[500px]
            bg-cyan-500/20
            blur-[180px]
            rounded-full
          "></div>

          <div className="
            absolute
            bottom-0
            right-0
            w-[500px]
            h-[500px]
            bg-blue-500/20
            blur-[180px]
            rounded-full
          "></div>

          <div className={`
            relative
            z-10
            max-w-7xl
            mx-auto
            ${
              isRTL
                ? "text-right"
                : "text-center"
            }
          `}>

            <div className={`
              inline-flex
              items-center
              gap-3
              px-6
              py-3
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-500/20
              text-cyan-400
              mb-10
              ${
                isRTL
                  ? "flex-row-reverse"
                  : ""
              }
            `}>

              <Sparkles size={18} />

              {translations.aiPoweredTransformation ||
                "AI Powered Digital Transformation"}

            </div>

            <h1 className="
              text-6xl
              md:text-8xl
              font-black
              leading-tight
              mb-10
            ">

              {translations.about ||
                "About"}

              <span className="
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                text-transparent
                bg-clip-text
              ">

                {" "}Enkonix

              </span>

            </h1>

            <p className="
              text-gray-700
              dark:text-gray-300
              text-xl
              md:text-2xl
              max-w-5xl
              mx-auto
              leading-10
            ">

              {translations.aboutDescription ||
                "Enkonix is a next-generation technology company delivering AI-powered digital transformation solutions, enterprise software systems, cloud infrastructure, cybersecurity, and scalable applications for modern businesses."}

            </p>

          </div>

        </section>

        {/* STATS */}

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
                  dark:bg-[#111c3d]
                  border
                  border-gray-300
                  dark:border-cyan-500/10
                  rounded-[32px]
                  p-10
                  text-center
                  shadow-2xl
                  hover:border-cyan-400/40
                  hover:-translate-y-2
                  transition-all
                  duration-500
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
                  text-gray-600
                  dark:text-gray-400
                  text-lg
                ">

                  {item.title}

                </p>

              </div>

            ))}

          </div>

        </section>

        {/* ABOUT CARDS */}

        <section className="
          max-w-7xl
          mx-auto
          grid
          md:grid-cols-3
          gap-10
          px-6
          pb-24
        ">

          <AboutCard
            icon={<Rocket size={36} />}
            title={
              translations.ourMission ||
              "Our Mission"
            }
            text={
              translations.ourMissionDesc ||
              "Deliver innovative AI-driven software solutions that empower businesses globally, enhance digital experiences, and accelerate enterprise transformation."
            }
          />

          <AboutCard
            icon={<Globe size={36} />}
            title={
              translations.ourVision ||
              "Our Vision"
            }
            text={
              translations.ourVisionDesc ||
              "Become the world’s leading intelligent technology transformation company delivering futuristic digital platforms and enterprise AI ecosystems."
            }
          />

          <AboutCard
            icon={<Users size={36} />}
            title={
              translations.ourTeam ||
              "Our Team"
            }
            text={
              translations.ourTeamDesc ||
              "Skilled engineers, AI experts, cloud architects, and designers building next-generation enterprise platforms globally."
            }
          />

        </section>

        {/* VALUES */}

        <section className="px-6 pb-24">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20">

              <h2 className="
                text-5xl
                font-black
                mb-6
              ">

                {translations.coreValues ||
                  "Core Values"}

              </h2>

              <p className="
                text-gray-600
                dark:text-gray-400
                text-lg
                max-w-3xl
                mx-auto
              ">

                {translations.coreValuesDesc ||
                  "Enterprise values that drive innovation, scalability, customer success, and technology excellence."}

              </p>

            </div>

            <div className="
              grid
              md:grid-cols-2
              lg:grid-cols-4
              gap-8
            ">

              {values.map((item, index) => (

                <div
                  key={index}
                  className="
                    bg-white
                    dark:bg-[#111c3d]
                    border
                    border-gray-300
                    dark:border-cyan-500/10
                    rounded-3xl
                    p-8
                    shadow-xl
                    hover:border-cyan-400/40
                    hover:-translate-y-2
                    transition-all
                    duration-500
                  "
                >

                  <CheckCircle2
                    className="text-cyan-400 mb-5"
                    size={34}
                  />

                  <h3 className="
                    text-2xl
                    font-bold
                    leading-10
                  ">

                    {item}

                  </h3>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* WHY CHOOSE */}

        <section className="px-6 pb-32">

          <div className="
            max-w-7xl
            mx-auto
            rounded-[40px]
            bg-gradient-to-r
            from-cyan-500/10
            to-blue-500/10
            border
            border-cyan-500/20
            p-16
            relative
            overflow-hidden
          ">

            <div className="
              absolute
              inset-0
              bg-cyan-500/5
              blur-3xl
            "></div>

            <div className="
              relative
              z-10
              grid
              lg:grid-cols-2
              gap-16
              items-center
            ">

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
                  text-cyan-400
                  mb-8
                  ${
                    isRTL
                      ? "flex-row-reverse"
                      : ""
                  }
                `}>

                  <Brain size={18} />

                  {translations.whyChooseEnkonix ||
                    "Why Businesses Choose Enkonix"}

                </div>

                <h2 className="
                  text-5xl
                  font-black
                  mb-8
                ">

                  {translations.buildingFuture ||
                    "Building The Future Of Enterprise Technology"}

                </h2>

                <p className="
                  text-gray-700
                  dark:text-gray-300
                  text-xl
                  leading-10
                  mb-10
                ">

                  {translations.futureDescription ||
                    "We combine Artificial Intelligence, Cloud Infrastructure, Cyber Security, Enterprise Applications, and Modern UI/UX Design to build scalable digital ecosystems."}

                </p>

                <button className={`
                  inline-flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500
                  text-white
                  font-bold
                  hover:scale-105
                  transition-all
                  duration-300
                  ${
                    isRTL
                      ? "flex-row-reverse"
                      : ""
                  }
                `}>

                  {translations.exploreServices ||
                    "Explore Services"}

                  <ArrowRight size={22} />

                </button>

              </div>

              <div className="grid grid-cols-2 gap-6">

                <FeatureCard
                  icon={<Cloud size={36} />}
                  title={
                    translations.cloudSystems ||
                    "Cloud Systems"
                  }
                />

                <FeatureCard
                  icon={<ShieldCheck size={36} />}
                  title={
                    translations.cyberSecurity ||
                    "Cyber Security"
                  }
                />

                <FeatureCard
                  icon={<BarChart3 size={36} />}
                  title={
                    translations.businessAnalytics ||
                    "Business Analytics"
                  }
                />

                <FeatureCard
                  icon={<Brain size={36} />}
                  title={
                    translations.aiSolutions ||
                    "AI Solutions"
                  }
                />

              </div>

            </div>

          </div>

        </section>

      </div>

    </GlobalLayout>

  );

}

/* ABOUT CARD */

function AboutCard({
  icon,
  title,
  text,
}) {

  return (

    <div className="
      bg-white
      dark:bg-[#111c3d]
      border
      border-gray-300
      dark:border-cyan-500/20
      rounded-[40px]
      p-10
      shadow-2xl
      hover:border-cyan-400/40
      hover:-translate-y-2
      transition-all
      duration-500
    ">

      <div className="
        w-20
        h-20
        rounded-3xl
        bg-gradient-to-r
        from-cyan-500
        to-blue-500
        flex
        items-center
        justify-center
        mb-8
        text-white
      ">

        {icon}

      </div>

      <h2 className="
        text-4xl
        font-black
        text-cyan-400
        mb-8
      ">

        {title}

      </h2>

      <p className="
        text-gray-700
        dark:text-gray-300
        text-xl
        leading-10
      ">

        {text}

      </p>

    </div>

  );

}

/* FEATURE CARD */

function FeatureCard({
  icon,
  title,
}) {

  return (

    <div className="
      bg-white
      dark:bg-[#111c3d]
      border
      border-gray-300
      dark:border-cyan-500/10
      rounded-3xl
      p-8
      text-center
      shadow-xl
      hover:border-cyan-400/40
      transition-all
      duration-500
    ">

      <div className="
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
      ">

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