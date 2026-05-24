import React from "react";
import { Link } from "react-router-dom";

import GlobalLayout from "../components/GlobalLayout";

import {
  useLanguage,
} from "../context/LanguageContext";

import translationsData from "../utils/translations";

import {
  Cloud,
  Shield,
  Cpu,
  Rocket,
  ArrowRight,
  Globe,
  Brain,
  Smartphone,
  CheckCircle2,
  Database,
  Workflow,
  Layers3,
  BarChart3,
  Star,
} from "lucide-react";

export default function Home2() {

  const {
    language,
    isRTL,
  } = useLanguage();

  const translations =
    translationsData[language];

  const features = [

    {
      icon: <Rocket size={42} className="text-cyan-400" />,
      title:
        translations.fastPerformance ||
        "Fast Performance",

      desc:
        translations.fastPerformanceDesc ||
        "Optimized enterprise-grade applications with lightning speed.",
    },

    {
      icon: <Cpu size={42} className="text-cyan-400" />,
      title:
        translations.aiIntegration ||
        "AI Integration",

      desc:
        translations.aiIntegrationDesc ||
        "Advanced AI powered business automation and analytics.",
    },

    {
      icon: <Cloud size={42} className="text-cyan-400" />,
      title:
        translations.cloudSolutions ||
        "Cloud Solutions",

      desc:
        translations.cloudSolutionsDesc ||
        "Secure cloud infrastructure with high scalability.",
    },

    {
      icon: <Shield size={42} className="text-cyan-400" />,
      title:
        translations.securitySystems ||
        "Security Systems",

      desc:
        translations.securitySystemsDesc ||
        "Modern cyber protection for enterprise applications.",
    },

  ];

  const services = [

    {
      icon: <Globe size={38} className="text-cyan-400" />,
      title:
        translations.webDevelopment ||
        "Web Development",

      desc:
        translations.webDevelopmentDesc ||
        "Scalable websites and enterprise web applications.",
    },

    {
      icon: <Smartphone size={38} className="text-cyan-400" />,
      title:
        translations.mobileApps ||
        "Mobile Apps",

      desc:
        translations.mobileAppsDesc ||
        "Android & iOS applications with modern UX.",
    },

    {
      icon: <Brain size={38} className="text-cyan-400" />,
      title:
        translations.aiSolutions ||
        "AI Solutions",

      desc:
        translations.aiSolutionsDesc ||
        "AI automation, analytics and chatbot systems.",
    },

  ];

  const technologies = [

    "React.js",
    "Node.js",
    "MongoDB",
    "AWS Cloud",
    "Flutter",
    "Docker",
    "Python",
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
        "Understanding business goals and user requirements.",
    },

    {
      number: "02",
      title:
        translations.planning ||
        "Planning",

      desc:
        translations.planningDesc ||
        "Creating scalable workflows and architecture systems.",
    },

    {
      number: "03",
      title:
        translations.development ||
        "Development",

      desc:
        translations.developmentDesc ||
        "Building enterprise-grade digital platforms.",
    },

    {
      number: "04",
      title:
        translations.deployment ||
        "Deployment",

      desc:
        translations.deploymentDesc ||
        "Launching, monitoring and optimization systems.",
    },

  ];

  const testimonials = [

    {
      name: "Michael Johnson",
      role: "CEO, NexaTech",
      review:
        translations.review1 ||
        "Enkonix transformed our business with scalable AI systems and enterprise cloud infrastructure.",
    },

    {
      name: "Sarah Williams",
      role: "Founder, Innovexa",
      review:
        translations.review2 ||
        "The UI/UX quality and enterprise-level development exceeded expectations.",
    },

    {
      name: "David Smith",
      role: "CTO, SkyCore",
      review:
        translations.review3 ||
        "Professional team with advanced technical expertise and premium support.",
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

        <section className="relative pt-40 pb-28 px-8 overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-[120px]" />

          <div className={`
            relative
            max-w-7xl
            mx-auto
            grid
            lg:grid-cols-2
            gap-16
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
                bg-white/5
                border
                border-cyan-500/20
                px-6
                py-3
                rounded-full
                text-cyan-300
                mb-10
                ${
                  isRTL
                    ? "flex-row-reverse"
                    : ""
                }
              `}>

                {translations.nextGenCompany ||
                  "Next Generation Technology Company"}

              </div>

              <h1 className="text-7xl lg:text-8xl font-black leading-tight">

                {translations.digital ||
                  "Digital"}

                <br />

                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

                  {translations.innovation ||
                    "Innovation"}

                </span>

                <br />

                {translations.platform ||
                  "Platform"}

              </h1>

              <p className="max-w-2xl dark:text-gray-300 text-gray-700 text-2xl mt-10 leading-relaxed">

                {translations.home2HeroDesc ||
                  "Enkonix helps startups and enterprises build scalable digital ecosystems using AI, Cloud, Cyber Security, and Modern UI/UX technologies."}

              </p>

              <div className={`
                flex
                flex-wrap
                gap-6
                mt-12
                ${
                  isRTL
                    ? "justify-end"
                    : ""
                }
              `}>

                <Link
                  to="/about"
                  className="
                    px-10
                    py-5
                    rounded-2xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-500
                    text-white
                    font-bold
                    flex
                    items-center
                    gap-3
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >

                  {translations.discoverMore ||
                    "Discover More"}

                  <ArrowRight size={20} />

                </Link>

                <Link
                  to="/contact"
                  className="
                    px-10
                    py-5
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    hover:bg-white/10
                    transition-all
                  "
                >

                  {translations.contactUs ||
                    "Contact Us"}

                </Link>

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative">

              <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full"></div>

              <div className="relative bg-[#111c38] border border-cyan-500/20 rounded-[40px] p-8 backdrop-blur-2xl shadow-2xl">

                <div className="grid grid-cols-2 gap-6">

                  {features.map((feature, index) => (

                    <div
                      key={index}
                      className="
                        bg-[#081225]
                        border
                        border-white/10
                        rounded-3xl
                        p-8
                        hover:border-cyan-500/40
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        text-white
                      "
                    >

                      <div className="mb-6">

                        {feature.icon}

                      </div>

                      <h2 className="text-2xl font-bold mb-4">

                        {feature.title}

                      </h2>

                      <p className="text-gray-400 leading-relaxed">

                        {feature.desc}

                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* SERVICES */}

        <section className="px-8 py-24">

          <div className="max-w-7xl mx-auto">

            <div className={`
              text-center
              mb-20
              ${
                isRTL
                  ? "text-right"
                  : "text-center"
              }
            `}>

              <h2 className="text-5xl font-black mb-6">

                {translations.our ||
                  "Our"}

                <span className="text-cyan-400">
                  {" "}
                  {translations.services ||
                    "Services"}
                </span>

              </h2>

              <p className="dark:text-gray-400 text-gray-600 text-lg max-w-3xl mx-auto">

                {translations.servicesDesc ||
                  "We deliver enterprise-grade digital transformation solutions powered by modern technologies."}

              </p>

            </div>

            <div className="grid lg:grid-cols-3 gap-8">

              {services.map((service, index) => (

                <div
                  key={index}
                  className="
                    bg-[#111c38]
                    border
                    border-cyan-500/10
                    rounded-[32px]
                    p-10
                    hover:border-cyan-500/40
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    text-white
                  "
                >

                  <div className="mb-6">

                    {service.icon}

                  </div>

                  <h2 className="text-3xl font-bold mb-4">

                    {service.title}

                  </h2>

                  <p className="text-gray-400 leading-8 text-lg">

                    {service.desc}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

      </div>

    </GlobalLayout>

  );

}