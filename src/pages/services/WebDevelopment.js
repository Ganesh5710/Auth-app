import React, { useState } from "react";

import GlobalLayout from "../../components/GlobalLayout";

import {
  useLanguage,
} from "../../context/LanguageContext";

import translationsData from "../../utils/translations";

import {
  Globe,
  Code2,
  Database,
  Smartphone,
  CheckCircle2,
  LayoutDashboard,
  Cloud,
  Layers3,
  Workflow,
  Server,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function WebDevelopment() {

  const {
    language,
    isRTL,
  } = useLanguage();

  const translations =
    translationsData[language];

  const [openFAQ, setOpenFAQ] =
    useState(null);

  const services = [

    {
      title:
        translations.frontendDevelopment ||
        "Frontend Development",

      desc:
        translations.frontendDevelopmentDesc ||
        "Modern React.js and Next.js enterprise interfaces.",

      icon: <Code2 size={30} />,
    },

    {
      title:
        translations.backendApis ||
        "Backend APIs",

      desc:
        translations.backendApisDesc ||
        "Scalable Node.js backend infrastructure systems.",

      icon: <Database size={30} />,
    },

    {
      title:
        translations.responsiveWebsites ||
        "Responsive Websites",

      desc:
        translations.responsiveWebsitesDesc ||
        "Mobile-first responsive web platforms.",

      icon: <Smartphone size={30} />,
    },

    {
      title:
        translations.cloudDeployment ||
        "Cloud Deployment",

      desc:
        translations.cloudDeploymentDesc ||
        "Secure cloud-native deployment systems.",

      icon: <Cloud size={30} />,
    },

    {
      title:
        translations.adminDashboards ||
        "Admin Dashboards",

      desc:
        translations.adminDashboardsDesc ||
        "Advanced analytics and admin panels.",

      icon: <LayoutDashboard size={30} />,
    },

    {
      title:
        translations.enterpriseApps ||
        "Enterprise Apps",

      desc:
        translations.enterpriseAppsDesc ||
        "Large-scale business web applications.",

      icon: <Server size={30} />,
    },

    {
      title:
        translations.uiuxInterfaces ||
        "UI/UX Interfaces",

      desc:
        translations.uiuxInterfacesDesc ||
        "Modern user-focused interface systems.",

      icon: <Layers3 size={30} />,
    },

    {
      title:
        translations.automationSystems ||
        "Automation Systems",

      desc:
        translations.automationSystemsDesc ||
        "Business workflow automation solutions.",

      icon: <Workflow size={30} />,
    },

  ];

  const pricingPlans = [

    {
      name:
        translations.starter ||
        "Starter",

      price: "$499",

      features: [

        translations.responsiveWebsite ||
        "Responsive Website",

        translations.threePages ||
        "3 Pages",

        translations.basicSeo ||
        "Basic SEO",

        translations.oneMonthSupport ||
        "1 Month Support",

      ],
    },

    {
      name:
        translations.professional ||
        "Professional",

      price: "$1499",

      features: [

        translations.fullStackWebsite ||
        "Full Stack Website",

        translations.adminDashboards ||
        "Admin Dashboard",

        translations.apiIntegration ||
        "API Integration",

        translations.threeMonthsSupport ||
        "3 Months Support",

      ],
    },

    {
      name:
        translations.enterprise ||
        "Enterprise",

      price: "$4999",

      features: [

        translations.enterpriseWebPlatform ||
        "Enterprise Web Platform",

        translations.cloudInfrastructure ||
        "Cloud Infrastructure",

        translations.advancedSecurity ||
        "Advanced Security",

        translations.premiumSupport ||
        "Premium Support",

      ],
    },

  ];

  const faqs = [

    {
      question:
        translations.faq1Question ||
        "How long does development take?",

      answer:
        translations.faq1Answer ||
        "Most enterprise projects take between 4-12 weeks depending on complexity.",
    },

    {
      question:
        translations.faq2Question ||
        "Do you provide cloud deployment?",

      answer:
        translations.faq2Answer ||
        "Yes. We provide AWS, Azure, and Google Cloud deployment solutions.",
    },

    {
      question:
        translations.faq3Question ||
        "Do you support responsive design?",

      answer:
        translations.faq3Answer ||
        "Absolutely. All platforms are fully optimized for mobile and desktop.",
    },

    {
      question:
        translations.faq4Question ||
        "Do you provide maintenance?",

      answer:
        translations.faq4Answer ||
        "Yes. We provide continuous support and maintenance plans.",
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
                px-6
                py-3
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-500/20
                text-cyan-600
                mb-8
                ${
                  isRTL
                    ? "flex-row-reverse"
                    : ""
                }
              `}>

                <Globe size={30} />

                {translations.webDevelopmentServices ||
                  "Web Development Services"}

              </div>

              <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8">

                {translations.modern ||
                  "Modern"}

                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">

                  {" "}
                  {translations.modernEnterpriseWebsites ||
                    "Enterprise Websites"}

                </span>

              </h1>

              <p className="dark:text-gray-300 text-gray-700 text-xl leading-10 max-w-2xl">

                {translations.webDevelopmentHeroDesc ||
                  "Build scalable, secure, and enterprise-grade websites with modern frontend, backend, cloud, and automation technologies."}

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
                  from-cyan-500
                  to-blue-500
                  text-white
                  font-bold
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-2xl
                  shadow-cyan-500/20
                ">

                  {translations.startProject ||
                    "Start Project"}

                </button>

                <button className="
                  px-10
                  py-5
                  rounded-2xl
                  border
                  border-cyan-500/20
                  hover:bg-cyan-500/10
                  transition-all
                  duration-300
                ">

                  {translations.viewPortfolio ||
                    "View Portfolio"}

                </button>

              </div>

              {/* STATS */}

              <div className="grid grid-cols-3 gap-8 mt-16">

                <div>

                  <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">

                    250+

                  </h2>

                  <p className="dark:text-gray-400 text-gray-600 mt-2">

                    {translations.projects ||
                      "Projects"}

                  </p>

                </div>

                <div>

                  <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">

                    98%

                  </h2>

                  <p className="dark:text-gray-400 text-gray-600 mt-2">

                    {translations.success ||
                      "Success"}

                  </p>

                </div>

                <div>

                  <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">

                    24/7

                  </h2>

                  <p className="dark:text-gray-400 text-gray-600 mt-2">

                    {translations.support ||
                      "Support"}

                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="bg-[#111c38] rounded-[40px] border border-cyan-500/20 p-10">

              <div className="grid grid-cols-2 gap-6">

                {services.slice(0, 4).map((service, index) => (

                  <div
                    key={index}
                    className="
                      bg-[#0f172a]
                      rounded-3xl
                      p-8
                      border
                      border-white/10
                      text-white
                      hover:border-cyan-400/40
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