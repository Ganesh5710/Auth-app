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
  TrendingUp,
  Target,
  BarChart3,
  Globe,
  Workflow,
  LineChart,
  Search,
  Megaphone,
  ArrowRight,
  CheckCircle2,
  Users,
  Rocket,
  ShieldCheck,
  PlayCircle,
  Star,
  Camera,
  MousePointerClick,
  MonitorSmartphone,
} from "lucide-react";

export default function DigitalMarketing() {

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

  const testimonials = [

    {
      name: "Michael Johnson",
      role: "CEO, NexaTech",

      review:
        "Enkonix transformed our digital growth with enterprise marketing automation and SEO optimization systems.",
    },

    {
      name: "Sarah Williams",
      role: "Startup Founder",

      review:
        "Amazing social media marketing campaigns with outstanding lead generation performance.",
    },

    {
      name: "David Smith",
      role: "Marketing Director",

      review:
        "Professional enterprise analytics dashboards and AI-powered campaign automation.",
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
                text-green-600
                dark:text-green-400
                mb-8
              `}>

                <TrendingUp size={30} />

                Digital Marketing Solutions

              </div>

              <h1 className="
                text-6xl
                md:text-7xl
                font-black
                leading-tight
                mb-8
              ">

                Business

                <span className="
                  bg-gradient-to-r
                  from-green-400
                  to-cyan-500
                  text-transparent
                  bg-clip-text
                ">

                  {" "}
                  Growth Systems

                </span>

              </h1>

              <p className="
                dark:text-gray-300
                text-gray-700
                text-xl
                leading-10
                max-w-2xl
              ">

                Scale your business using enterprise digital marketing, SEO optimization, lead generation, analytics, automation, and intelligent marketing systems.

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
                    from-green-500
                    to-cyan-500
                    text-white
                    font-bold
                    hover:scale-105
                    transition-all
                    duration-300
                    shadow-2xl
                    shadow-green-500/20
                    inline-flex
                    items-center
                    gap-3
                  "
                >

                  Launch Campaign

                  <ArrowRight size={20} />

                </Link>

                <button className="
                  px-10
                  py-5
                  rounded-2xl
                  border
                  border-green-500/20
                  hover:bg-green-500/10
                  transition-all
                  duration-300
                  inline-flex
                  items-center
                  gap-3
                ">

                  <PlayCircle size={22} />

                  Explore Marketing

                </button>

              </div>

              {/* STATS */}

              <div className="
                grid
                grid-cols-3
                gap-8
                mt-16
              ">

                <div>

                  <h2 className="
                    text-5xl
                    font-black
                    bg-gradient-to-r
                    from-green-400
                    to-cyan-500
                    text-transparent
                    bg-clip-text
                  ">

                    500+

                  </h2>

                  <p className="
                    dark:text-gray-400
                    text-gray-600
                    mt-2
                  ">

                    Campaigns

                  </p>

                </div>

                <div>

                  <h2 className="
                    text-5xl
                    font-black
                    bg-gradient-to-r
                    from-green-400
                    to-cyan-500
                    text-transparent
                    bg-clip-text
                  ">

                    300%

                  </h2>

                  <p className="
                    dark:text-gray-400
                    text-gray-600
                    mt-2
                  ">

                    ROI Growth

                  </p>

                </div>

                <div>

                  <h2 className="
                    text-5xl
                    font-black
                    bg-gradient-to-r
                    from-green-400
                    to-cyan-500
                    text-transparent
                    bg-clip-text
                  ">

                    24/7

                  </h2>

                  <p className="
                    dark:text-gray-400
                    text-gray-600
                    mt-2
                  ">

                    Monitoring

                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="
              bg-white
              dark:bg-[#111c38]
              rounded-[40px]
              border
              border-green-500/20
              p-10
            ">

              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop"
                alt="Digital Marketing"
                className="
                  w-full
                  h-[500px]
                  object-cover
                  rounded-[32px]
                "
              />

            </div>

          </div>

        </section>

        {/* SECTION 2 SERVICES */}

        <section className="px-6 py-28">

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

                Marketing Services

              </h2>

            </div>

            <div className="
              grid
              md:grid-cols-2
              lg:grid-cols-4
              gap-8
            ">

              {marketingServices.map((service, index) => (

                <div
                  key={index}
                  className="
                    bg-white
                    dark:bg-[#111c38]
                    rounded-[32px]
                    border
                    border-green-500/20
                    p-10
                    hover:-translate-y-3
                    hover:border-green-400/40
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
                    from-green-500
                    to-cyan-500
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

        {/* SECTION 3 FEATURES */}

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
            lg:grid-cols-2
            gap-16
            items-center
          ">

            <div>

              <h2 className="
                text-6xl
                font-black
                mb-8
              ">

                AI Marketing Features

              </h2>

              <p className="
                text-xl
                leading-10
                text-gray-700
                dark:text-gray-400
                mb-10
              ">

                Intelligent enterprise marketing systems powered by automation, analytics and AI-driven optimization.

              </p>

              <div className="
                flex
                flex-col
                gap-5
              ">

                {[
                  "SEO Optimization",
                  "Lead Generation",
                  "Campaign Automation",
                  "Performance Analytics",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >

                    <CheckCircle2
                      size={24}
                      className="text-green-400"
                    />

                    <span className="text-xl">

                      {item}

                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div className="
              grid
              grid-cols-2
              gap-8
            ">

              {[
                {
                  icon: <Camera size={36} />,
                  title: "Social Media",
                },

                {
                  icon: <Rocket size={36} />,
                  title: "Growth Campaigns",
                },

                {
                  icon: <ShieldCheck size={36} />,
                  title: "Secure CRM",
                },

                {
                  icon: <MonitorSmartphone size={36} />,
                  title: "Multi Platform",
                },

              ].map((item, index) => (

                <div
                  key={index}
                  className="
                    bg-white
                    dark:bg-[#111c38]
                    rounded-[32px]
                    border
                    border-green-500/20
                    p-10
                    text-center
                  "
                >

                  <div className="
                    flex
                    justify-center
                    mb-6
                    text-green-400
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

        {/* SECTION 4 ANALYTICS */}

        <section className="px-6 py-28">

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
                icon: <BarChart3 size={38} />,
                title: "Analytics Dashboard",
              },

              {
                icon: <MousePointerClick size={38} />,
                title: "CTR Optimization",
              },

              {
                icon: <Workflow size={38} />,
                title: "Automation System",
              },

              {
                icon: <Globe size={38} />,
                title: "Global Reach",
              },

            ].map((item, index) => (

              <div
                key={index}
                className="
                  bg-white
                  dark:bg-[#111c38]
                  border
                  border-green-500/20
                  rounded-[32px]
                  p-10
                  text-center
                "
              >

                <div className="
                  flex
                  justify-center
                  text-green-400
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

        {/* SECTION 5 PRICING */}

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

                Pricing Plans

              </h2>

            </div>

            <div className="
              grid
              lg:grid-cols-3
              gap-8
            ">

              {[
                {
                  title: "Starter",
                  price: "$699",
                },

                {
                  title: "Business",
                  price: "$2499",
                },

                {
                  title: "Enterprise",
                  price: "$7999",
                },

              ].map((plan, index) => (

                <div
                  key={index}
                  className="
                    bg-white
                    dark:bg-[#111c38]
                    border
                    border-green-500/20
                    rounded-[32px]
                    p-10
                    text-center
                  "
                >

                  <h3 className="
                    text-3xl
                    font-bold
                    mb-6
                  ">

                    {plan.title}

                  </h3>

                  <h2 className="
                    text-6xl
                    font-black
                    text-green-400
                    mb-8
                  ">

                    {plan.price}

                  </h2>

                  <button className="
                    w-full
                    py-4
                    rounded-2xl
                    bg-gradient-to-r
                    from-green-500
                    to-cyan-500
                    text-white
                    font-bold
                  ">

                    Choose Plan

                  </button>

                </div>

              ))}

            </div>

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

              Marketing Experts

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
                    border-green-500/20
                    rounded-[32px]
                    p-10
                  "
                >

                  <div className="
                    w-28
                    h-28
                    rounded-full
                    bg-gradient-to-r
                    from-green-500
                    to-cyan-500
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

                    Growth Strategist

                  </h3>

                  <p className="
                    text-green-400
                    mb-5
                  ">

                    Digital Marketing Expert

                  </p>

                  <p className="
                    text-gray-700
                    dark:text-gray-400
                    leading-8
                  ">

                    Enterprise marketing specialists building AI-powered growth systems.

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
            from-green-500
            via-cyan-500
            to-emerald-500
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

              Ready To Grow Your Business?

            </h2>

            <p className="
              text-2xl
              leading-10
              max-w-4xl
              mx-auto
              mb-12
            ">

              Launch enterprise marketing campaigns powered by AI automation, SEO optimization and growth analytics.

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
                text-green-600
                rounded-2xl
                text-xl
                font-black
                hover:scale-105
                transition-all
                duration-300
              "
            >

              Contact Marketing Team

              <ArrowRight size={22} />

            </Link>

          </div>

        </section>

      </div>

    </GlobalLayout>

  );

}