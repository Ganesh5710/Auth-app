import React, { useState } from "react";

import GlobalLayout from "../../components/GlobalLayout";

import {
  useLanguage,
} from "../../context/LanguageContext";

import translationsData from "../../utils/translations";

import {
  Cloud,
  Server,
  ShieldCheck,
  Database,
  Workflow,
  Globe,
  BarChart3,
  Zap,
} from "lucide-react";

export default function CloudServices() {

  const {
    language,
    isRTL,
  } = useLanguage();

  const translations =
    translationsData[language];

  const cloudServices = [

    {
      title:
        translations.awsInfrastructure ||
        "AWS Infrastructure",

      desc:
        translations.awsInfrastructureDesc ||
        "Enterprise AWS cloud architecture and deployment systems.",

      icon: <Cloud size={30} />,
    },

    {
      title:
        translations.azureSolutions ||
        "Azure Solutions",

      desc:
        translations.azureSolutionsDesc ||
        "Microsoft Azure enterprise cloud integration services.",

      icon: <Server size={30} />,
    },

    {
      title:
        translations.googleCloud ||
        "Google Cloud",

      desc:
        translations.googleCloudDesc ||
        "Scalable Google Cloud enterprise infrastructure systems.",

      icon: <Database size={30} />,
    },

    {
      title:
        translations.cloudSecurity ||
        "Cloud Security",

      desc:
        translations.cloudSecurityDesc ||
        "Enterprise-grade infrastructure protection and monitoring.",

      icon: <ShieldCheck size={30} />,
    },

    {
      title:
        translations.devopsAutomation ||
        "DevOps Automation",

      desc:
        translations.devopsAutomationDesc ||
        "CI/CD pipelines and automated deployment workflows.",

      icon: <Workflow size={30} />,
    },

    {
      title:
        translations.cloudAnalytics ||
        "Cloud Analytics",

      desc:
        translations.cloudAnalyticsDesc ||
        "Advanced monitoring and infrastructure analytics systems.",

      icon: <BarChart3 size={30} />,
    },

    {
      title:
        translations.enterpriseHosting ||
        "Enterprise Hosting",

      desc:
        translations.enterpriseHostingDesc ||
        "Scalable enterprise hosting and server management.",

      icon: <Globe size={30} />,
    },

    {
      title:
        translations.performanceOptimization ||
        "Performance Optimization",

      desc:
        translations.performanceOptimizationDesc ||
        "Cloud optimization and enterprise performance engineering.",

      icon: <Zap size={30} />,
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

        <section className="relative py-32 px-6 overflow-hidden">

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[160px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full"></div>

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
                px-6
                py-3
                rounded-full
                bg-blue-500/10
                border
                border-blue-500/20
                text-blue-400
                mb-8
                ${
                  isRTL
                    ? "flex-row-reverse"
                    : ""
                }
              `}>

                <Cloud size={20} />

                {translations.enterpriseCloudInfrastructure ||
                  "Enterprise Cloud Infrastructure"}

              </div>

              <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8">

                {translations.scalable ||
                  "Scalable"}

                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">

                  {" "}
                  {translations.cloudSystems ||
                    "Cloud Systems"}

                </span>

              </h1>

              <p className="dark:text-gray-300 text-gray-700 text-xl leading-10 max-w-2xl">

                {translations.cloudHeroDesc ||
                  "Build secure, scalable, and enterprise-grade cloud infrastructure powered by AWS, Azure, Google Cloud, automation systems, and enterprise monitoring solutions."}

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

                <button className="
                  px-10
                  py-5
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-500
                  to-cyan-500
                  text-white
                  font-bold
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-2xl
                  shadow-blue-500/20
                ">

                  {translations.deployInfrastructure ||
                    "Deploy Infrastructure"}

                </button>

                <button className="
                  px-10
                  py-5
                  rounded-2xl
                  border
                  border-blue-500/20
                  hover:bg-blue-500/10
                  transition-all
                  duration-300
                ">

                  {translations.exploreCloudServices ||
                    "Explore Cloud Services"}

                </button>

              </div>

              {/* STATS */}

              <div className="grid grid-cols-3 gap-8 mt-16">

                <div>

                  <h2 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">

                    300+

                  </h2>

                  <p className="dark:text-gray-400 text-gray-600 mt-2">

                    {translations.deployments ||
                      "Deployments"}

                  </p>

                </div>

                <div>

                  <h2 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">

                    99.9%

                  </h2>

                  <p className="dark:text-gray-400 text-gray-600 mt-2">

                    {translations.uptime ||
                      "Uptime"}

                  </p>

                </div>

                <div>

                  <h2 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">

                    24/7

                  </h2>

                  <p className="dark:text-gray-400 text-gray-600 mt-2">

                    {translations.monitoring ||
                      "Monitoring"}

                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="bg-[#111c38] rounded-[40px] border border-blue-500/20 p-10">

              <div className="grid grid-cols-2 gap-6">

                {cloudServices.slice(0, 4).map((service, index) => (

                  <div
                    key={index}
                    className="
                      bg-[#0f172a]
                      rounded-3xl
                      p-8
                      border
                      border-white/10
                      text-white
                      hover:border-blue-400/40
                      transition-all
                      duration-500
                    "
                  >

                    <div className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-gradient-to-r
                      from-blue-500
                      to-cyan-500
                      flex
                      items-center
                      justify-center
                      mb-6
                    ">

                      {service.icon}

                    </div>

                    <h3 className={`
                      text-2xl
                      font-bold
                      mb-4
                      ${
                        isRTL
                          ? "text-right"
                          : "text-left"
                      }
                    `}>

                      {service.title}

                    </h3>

                    <p className={`
                      text-gray-300
                      leading-7
                      ${
                        isRTL
                          ? "text-right"
                          : "text-left"
                      }
                    `}>

                      {service.desc}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

      </div>

    </GlobalLayout>

  );

}