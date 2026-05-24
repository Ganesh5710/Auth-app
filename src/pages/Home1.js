import React from "react";
import { Link } from "react-router-dom";

import GlobalLayout from "../components/GlobalLayout";

import {
  useLanguage,
} from "../context/LanguageContext";

import translationsData from "../utils/translations";

import {
  Globe,
  Smartphone,
  ShieldCheck,
  Brain,
  Cloud,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Star,
  Cpu,
  Database,
  Workflow,
  Rocket,
  Layers3,
} from "lucide-react";

export default function Home1() {

  const {
    language,
    isRTL,
  } = useLanguage();

  const translations =
    translationsData[language];

  const services = [

    {
      icon: <Globe size={38} className="text-cyan-400" />,
      title:
        translations.webDevelopment ||
        "Web Development",

      desc:
        translations.webDevelopmentDesc ||
        "Modern scalable websites and enterprise web applications.",
    },

    {
      icon: <Smartphone size={38} className="text-cyan-400" />,
      title:
        translations.mobileApps ||
        "Mobile Apps",

      desc:
        translations.mobileAppsDesc ||
        "Android & iOS applications with smooth UX.",
    },

    {
      icon: <Brain size={38} className="text-cyan-400" />,
      title:
        translations.aiSolutions ||
        "AI Solutions",

      desc:
        translations.aiSolutionsDesc ||
        "AI automation, analytics and enterprise workflows.",
    },

    {
      icon: <Cloud size={38} className="text-cyan-400" />,
      title:
        translations.cloudServices ||
        "Cloud Services",

      desc:
        translations.cloudServicesDesc ||
        "Secure cloud deployment and scalable infrastructure.",
    },

    {
      icon: <ShieldCheck size={38} className="text-cyan-400" />,
      title:
        translations.cyberSecurity ||
        "Cyber Security",

      desc:
        translations.cyberSecurityDesc ||
        "Advanced threat monitoring and security protection.",
    },

    {
      icon: <BarChart3 size={38} className="text-cyan-400" />,
      title:
        translations.digitalMarketing ||
        "Digital Marketing",

      desc:
        translations.digitalMarketingDesc ||
        "SEO, branding and high-converting campaigns.",
    },

  ];

  const stats = [

    {
      value: "250+",
      label:
        translations.projectsCompleted ||
        "Projects Completed",
    },

    {
      value: "120+",
      label:
        translations.happyClients ||
        "Happy Clients",
    },

    {
      value: "24/7",
      label:
        translations.supportAvailable ||
        "Support Available",
    },

    {
      value: "99%",
      label:
        translations.clientSatisfaction ||
        "Client Satisfaction",
    },

  ];

  const technologies = [

    "React.js",
    "Node.js",
    "MongoDB",
    "AWS",
    "Python",
    "Flutter",
    "Docker",
    "AI/ML",

  ];

  const process = [

    {
      number: "01",
      title:
        translations.research ||
        "Research",

      desc:
        translations.researchDesc ||
        "Understanding business requirements and goals.",
    },

    {
      number: "02",
      title:
        translations.planning ||
        "Planning",

      desc:
        translations.planningDesc ||
        "Creating architecture and scalable workflows.",
    },

    {
      number: "03",
      title:
        translations.development ||
        "Development",

      desc:
        translations.developmentDesc ||
        "Building modern enterprise digital products.",
    },

    {
      number: "04",
      title:
        translations.deployment ||
        "Deployment",

      desc:
        translations.deploymentDesc ||
        "Launching, monitoring and optimization.",
    },

  ];

  return (

    <GlobalLayout>

      <div
        dir={isRTL ? "rtl" : "ltr"}
        className="
          min-h-screen
          text-gray-900
          dark:text-white
          overflow-hidden
        "
      >

        {/* HERO */}

        <section className="relative pt-40 pb-28 px-6 lg:px-20 overflow-hidden">

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[160px] rounded-full"></div>

          <div className={`
            relative
            z-10
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
                bg-cyan-500/10
                border
                border-cyan-500/20
                text-cyan-300
                px-6
                py-3
                rounded-full
                mb-8
                backdrop-blur-lg
                ${
                  isRTL
                    ? "flex-row-reverse"
                    : ""
                }
              `}>

                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>

                {translations.aiPoweredTransformation ||
                  "AI Powered Digital Transformation"}

              </div>

              <h1 className="text-6xl lg:text-8xl font-black leading-tight mb-8">

                {translations.build ||
                  "Build"}

                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">

                  {translations.futureReady ||
                    "Future Ready"}

                </span>

                {translations.digitalSolutions ||
                  "Digital Solutions"}

              </h1>

              <p className="dark:text-gray-300 text-gray-700 text-xl leading-10 max-w-2xl mb-10">

                {translations.homeHeroDesc ||
                  "Enkonix delivers enterprise-grade AI systems, cloud platforms, cybersecurity, web development, mobile applications, and scalable digital products."}

              </p>

              <div className={`
                flex
                flex-wrap
                gap-5
                mb-14
                ${
                  isRTL
                    ? "justify-end"
                    : ""
                }
              `}>

                <Link
                  to="/contact"
                  className="
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
                    flex
                    items-center
                    gap-3
                    shadow-2xl
                    shadow-cyan-500/20
                  "
                >

                  {translations.getStarted ||
                    "Get Started"}

                  <ArrowRight size={20} />

                </Link>

                <Link
                  to="/services/web-development"
                  className="
                    px-8
                    py-4
                    rounded-2xl
                    border
                    border-cyan-500/20
                    hover:bg-cyan-500/10
                    transition-all
                    duration-300
                    font-semibold
                  "
                >

                  {translations.exploreServices ||
                    "Explore Services"}

                </Link>

              </div>

              {/* STATS */}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                {stats.map((item, index) => (

                  <div
                    key={index}
                    className="
                      bg-[#111c38]
                      border
                      border-cyan-500/10
                      rounded-3xl
                      p-5
                      text-white
                      hover:border-cyan-400/40
                      transition-all
                      duration-500
                    "
                  >

                    <h2 className="text-3xl font-black text-cyan-400 mb-2">

                      {item.value}

                    </h2>

                    <p className="text-gray-400 text-sm">

                      {item.label}

                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative">

              <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full"></div>

              <div className="relative bg-[#111c38] border border-cyan-500/20 rounded-[40px] p-8 shadow-2xl">

                <div className="grid grid-cols-2 gap-6">

                  {services.map((service, index) => (

                    <div
                      key={index}
                      className="
                        group
                        bg-[#0f172a]
                        border
                        border-white/10
                        rounded-3xl
                        p-8
                        hover:border-cyan-400/40
                        hover:-translate-y-2
                        transition-all
                        duration-500
                        text-white
                      "
                    >

                      <div className="mb-6 group-hover:scale-110 transition-transform duration-500">

                        {service.icon}

                      </div>

                      <h3 className="text-2xl font-bold mb-3">

                        {service.title}

                      </h3>

                      <p className="text-gray-400 leading-7">

                        {service.desc}

                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* WHY CHOOSE */}

        <section className="px-6 lg:px-20 py-28">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-black mb-6">

              {translations.whyChoose ||
                "Why Choose"}

              <span className="text-cyan-400">
                {" "}Enkonix
              </span>

            </h2>

            <p className="dark:text-gray-400 text-gray-600 max-w-3xl mx-auto text-lg leading-8">

              {translations.whyChooseDesc ||
                "Enterprise-grade digital products engineered for scalability, automation, performance, and modern user experiences."}

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              translations.modernUIDesign || "Modern UI/UX Design",
              translations.fastScalableSystems || "Fast Scalable Systems",
              translations.aiPoweredAutomation || "AI Powered Automation",
              translations.enterpriseSecurity || "Enterprise Security",
              translations.support247 || "24/7 Technical Support",
              translations.cloudInfrastructure || "Cloud Infrastructure",
              translations.seoPlatforms || "SEO Optimized Platforms",
              translations.modernTechStack || "Modern Tech Stack",
            ].map((item, index) => (

              <div
                key={index}
                className="
                  bg-[#111c38]
                  border
                  border-cyan-500/10
                  rounded-3xl
                  p-8
                  hover:border-cyan-400/40
                  hover:-translate-y-2
                  transition-all
                  duration-500
                  text-white
                "
              >

                <CheckCircle2
                  className="text-cyan-400 mb-5"
                  size={34}
                />

                <h3 className="text-xl font-bold leading-9">

                  {item}

                </h3>

              </div>

            ))}

          </div>

        </section>

      </div>

    </GlobalLayout>

  );

}