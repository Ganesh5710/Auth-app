import React, { useState } from "react";

import GlobalLayout from "../../components/GlobalLayout";

import {
  useLanguage,
} from "../../context/LanguageContext";

import translationsData from "../../utils/translations";

import {
  TrendingUp,
  Target,
  BarChart3,
  Globe,
  Workflow,
  LineChart,
  Search,
  Megaphone,
} from "lucide-react";

export default function DigitalMarketing() {

  const {
    language,
    isRTL,
  } = useLanguage();

  const translations =
    translationsData[language];

  const marketingServices = [

    {
      title:
        translations.seoOptimization ||
        "SEO Optimization",

      desc:
        translations.seoOptimizationDesc ||
        "Improve search rankings and organic visibility.",

      icon: <Search size={30} />,
    },

    {
      title:
        translations.socialMediaMarketing ||
        "Social Media Marketing",

      desc:
        translations.socialMediaMarketingDesc ||
        "Advanced social media growth strategies.",

      icon: <Megaphone size={30} />,
    },

    {
      title:
        translations.performanceAnalytics ||
        "Performance Analytics",

      desc:
        translations.performanceAnalyticsDesc ||
        "Enterprise analytics and marketing intelligence.",

      icon: <BarChart3 size={30} />,
    },

    {
      title:
        translations.leadGeneration ||
        "Lead Generation",

      desc:
        translations.leadGenerationDesc ||
        "AI-powered lead acquisition systems.",

      icon: <Target size={30} />,
    },

    {
      title:
        translations.growthCampaigns ||
        "Growth Campaigns",

      desc:
        translations.growthCampaignsDesc ||
        "Data-driven marketing growth strategies.",

      icon: <TrendingUp size={30} />,
    },

    {
      title:
        translations.automationSystems ||
        "Automation Systems",

      desc:
        translations.marketingAutomationDesc ||
        "Marketing automation and CRM workflows.",

      icon: <Workflow size={30} />,
    },

    {
      title:
        translations.globalBranding ||
        "Global Branding",

      desc:
        translations.globalBrandingDesc ||
        "Worldwide enterprise branding solutions.",

      icon: <Globe size={30} />,
    },

    {
      title:
        translations.marketIntelligence ||
        "Market Intelligence",

      desc:
        translations.marketIntelligenceDesc ||
        "Business intelligence and audience analytics.",

      icon: <LineChart size={30} />,
    },

  ];

  const pricingPlans = [

    {
      name:
        translations.starterMarketing ||
        "Starter Marketing",

      price: "$699",

      features: [

        translations.seoOptimization ||
        "SEO Optimization",

        translations.socialMediaSetup ||
        "Social Media Setup",

        translations.analyticsDashboard ||
        "Analytics Dashboard",

        translations.oneMonthSupport ||
        "1 Month Support",

      ],
    },

    {
      name:
        translations.businessMarketing ||
        "Business Marketing",

      price: "$2499",

      features: [

        translations.growthCampaigns ||
        "Growth Campaigns",

        translations.leadGeneration ||
        "Lead Generation",

        translations.automation ||
        "Automation",

        translations.threeMonthsSupport ||
        "3 Months Support",

      ],
    },

    {
      name:
        translations.enterpriseMarketing ||
        "Enterprise Marketing",

      price: "$7999",

      features: [

        translations.globalBranding ||
        "Global Branding",

        translations.advancedAnalytics ||
        "Advanced Analytics",

        translations.aiMarketingSystems ||
        "AI Marketing Systems",

        translations.premiumSupport ||
        "Premium Support",

      ],
    },

  ];

  const faqs = [

    {
      question:
        translations.faqSeoQuestion ||
        "Do you provide SEO services?",

      answer:
        translations.faqSeoAnswer ||
        "Yes. We provide enterprise SEO optimization and search visibility solutions.",
    },

    {
      question:
        translations.faqSocialMediaQuestion ||
        "Can you manage social media campaigns?",

      answer:
        translations.faqSocialMediaAnswer ||
        "Absolutely. We manage enterprise-level social media and advertising campaigns.",
    },

    {
      question:
        translations.faqAnalyticsQuestion ||
        "Do you provide analytics dashboards?",

      answer:
        translations.faqAnalyticsAnswer ||
        "Yes. We provide marketing analytics and performance intelligence dashboards.",
    },

    {
      question:
        translations.faqGlobalQuestion ||
        "Can marketing campaigns scale globally?",

      answer:
        translations.faqGlobalAnswer ||
        "Yes. Our campaigns are designed for global reach and enterprise scalability.",
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

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/20 blur-[160px] rounded-full"></div>

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
                bg-green-500/10
                border
                border-green-500/20
                text-green-400
                mb-8
                ${
                  isRTL
                    ? "flex-row-reverse"
                    : ""
                }
              `}>

                <TrendingUp size={20} />

                {translations.digitalMarketingSolutions ||
                  "Digital Marketing Solutions"}

              </div>

              <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8">

                {translations.business ||
                  "Business"}

                <span className="bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text">

                  {" "}
                  {translations.growthSystems ||
                    "Growth Systems"}

                </span>

              </h1>

              <p className="dark:text-gray-300 text-gray-700 text-xl leading-10 max-w-2xl">

                {translations.digitalMarketingHeroDesc ||
                  "Scale your business using enterprise digital marketing, SEO optimization, lead generation, analytics, automation, and intelligent marketing systems."}

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
                  from-green-500
                  to-cyan-500
                  text-white
                  font-bold
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-2xl
                  shadow-green-500/20
                ">

                  {translations.launchCampaign ||
                    "Launch Campaign"}

                </button>

                <button className="
                  px-10
                  py-5
                  rounded-2xl
                  border
                  border-green-500/20
                  hover:bg-green-500/10
                  transition-all
                  duration-300
                ">

                  {translations.exploreMarketing ||
                    "Explore Marketing"}

                </button>

              </div>

              {/* STATS */}

              <div className="grid grid-cols-3 gap-8 mt-16">

                <div>

                  <h2 className="text-5xl font-black bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text">

                    500+

                  </h2>

                  <p className="dark:text-gray-400 text-gray-600 mt-2">

                    {translations.campaigns ||
                      "Campaigns"}

                  </p>

                </div>

                <div>

                  <h2 className="text-5xl font-black bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text">

                    300%

                  </h2>

                  <p className="dark:text-gray-400 text-gray-600 mt-2">

                    {translations.roiGrowth ||
                      "ROI Growth"}

                  </p>

                </div>

                <div>

                  <h2 className="text-5xl font-black bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text">

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

            <div className="bg-[#111c38] rounded-[40px] border border-green-500/20 p-10">

              <div className="grid grid-cols-2 gap-6">

                {marketingServices.slice(0, 4).map((service, index) => (

                  <div
                    key={index}
                    className="
                      bg-[#0f172a]
                      rounded-3xl
                      p-8
                      border
                      border-white/10
                      text-white
                      hover:border-green-400/40
                      transition-all
                      duration-500
                    "
                  >

                    <div className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-gradient-to-r
                      from-green-500
                      to-cyan-500
                      flex
                      items-center
                      justify-center
                      mb-6
                    ">

                      {service.icon}

                    </div>

                    <h3 className="text-2xl font-bold mb-4">

                      {service.title}

                    </h3>

                    <p className="text-gray-300 leading-7">

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