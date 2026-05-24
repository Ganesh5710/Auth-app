import React from "react";

import GlobalLayout from "../../components/GlobalLayout";

import {
  useLanguage,
} from "../../context/LanguageContext";

import translationsData from "../../utils/translations";

import {
  Palette,
  MonitorSmartphone,
  Sparkles,
  CheckCircle2,
  LayoutDashboard,
  ArrowRight,
  PenTool,
  Eye,
  ShieldCheck,
} from "lucide-react";

export default function UIUXDesign() {

  const {
    language,
    isRTL,
  } = useLanguage();

  const translations =
    translationsData[language];

  const features = [

    translations.modernUIDesign ||
    "Modern UI Design",

    translations.responsiveLayouts ||
    "Responsive Layouts",

    translations.userExperienceResearch ||
    "User Experience Research",

    translations.interactivePrototypes ||
    "Interactive Prototypes",

    translations.figmaDesignSystems ||
    "Figma Design Systems",

    translations.mobileFirstDesign ||
    "Mobile First Design",

    translations.darkModeInterfaces ||
    "Dark Mode Interfaces",

    translations.creativeAnimations ||
    "Creative Animations",

  ];

  const services = [

    {
      title:
        translations.responsiveUI ||
        "Responsive UI",

      desc:
        translations.responsiveUIDesc ||
        "Modern responsive enterprise interface systems.",

      icon: <MonitorSmartphone size={32} />,
    },

    {
      title:
        translations.designSystems ||
        "Design Systems",

      desc:
        translations.designSystemsDesc ||
        "Scalable reusable design component libraries.",

      icon: <LayoutDashboard size={32} />,
    },

    {
      title:
        translations.creativeInterfaces ||
        "Creative Interfaces",

      desc:
        translations.creativeInterfacesDesc ||
        "Premium enterprise user experiences and visuals.",

      icon: <Sparkles size={32} />,
    },

    {
      title:
        translations.uxResearch ||
        "UX Research",

      desc:
        translations.uxResearchDesc ||
        "Advanced user behavior and interaction research.",

      icon: <Eye size={32} />,
    },

  ];

  const process = [

    {
      title:
        translations.research ||
        "Research",

      desc:
        translations.uiResearchDesc ||
        "Understanding user behavior and business goals.",
    },

    {
      title:
        translations.wireframing ||
        "Wireframing",

      desc:
        translations.wireframingDesc ||
        "Creating scalable design structure and flows.",
    },

    {
      title:
        translations.uiDesign ||
        "UI Design",

      desc:
        translations.uiDesignDesc ||
        "Building modern premium user interfaces.",
    },

    {
      title:
        translations.testing ||
        "Testing",

      desc:
        translations.testingDesc ||
        "Optimizing user experience and accessibility.",
    },

  ];

  const stats = [

    {
      number: "350+",
      title:
        translations.designProjects ||
        "Design Projects",
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
        translations.designSupport ||
        "Design Support",
    },

    {
      number: "150+",
      title:
        translations.enterpriseClients ||
        "Enterprise Clients",
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

        {/* HERO SECTION */}

        <section className="relative py-28 px-6 overflow-hidden">

          {/* BACKGROUND EFFECTS */}

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/20 blur-[160px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[160px] rounded-full"></div>

          <div className={`
            relative
            z-10
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
                px-5
                py-3
                rounded-full
                bg-pink-500/10
                border
                border-pink-500/20
                text-pink-300
                mb-8
                ${
                  isRTL
                    ? "flex-row-reverse"
                    : ""
                }
              `}>

                <Palette size={20} />

                {translations.premiumUIUXSolutions ||
                  "Premium UI/UX Solutions"}

              </div>

              <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8">

                UI/UX

                <span className="bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">

                  {" "}
                  {translations.design ||
                    "Design"}

                </span>

              </h1>

              <p className="dark:text-gray-300 text-gray-700 text-xl leading-10 max-w-2xl">

                {translations.uiuxHeroDesc ||
                  "We create modern user experiences with premium interfaces, scalable design systems, responsive layouts, and enterprise-grade UX engineering."}

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
                  from-pink-500
                  to-purple-500
                  text-white
                  font-bold
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-2xl
                  shadow-pink-500/20
                ">

                  {translations.startDesigning ||
                    "Start Designing"}

                </button>

                <button className="
                  px-10
                  py-5
                  rounded-2xl
                  border
                  border-pink-500/20
                  hover:bg-pink-500/10
                  transition-all
                  duration-300
                ">

                  {translations.exploreServices ||
                    "Explore Services"}

                </button>

              </div>

            </div>

            {/* RIGHT */}

            <div className="bg-[#111c38] rounded-[40px] border border-pink-500/20 p-10">

              <div className="grid grid-cols-2 gap-6">

                {services.map((service, index) => (

                  <FeatureCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    desc={service.desc}
                  />

                ))}

              </div>

            </div>

          </div>

        </section>

      </div>

    </GlobalLayout>

  );

}

function FeatureCard({
  icon,
  title,
  desc,
}) {

  return (

    <div className="
      bg-[#0f172a]
      rounded-3xl
      p-8
      text-center
      border
      border-white/10
      hover:border-pink-400/40
      transition-all
      duration-500
      text-white
    ">

      <div className="
        w-20
        h-20
        mx-auto
        mb-6
        rounded-3xl
        bg-gradient-to-r
        from-pink-500
        to-purple-500
        flex
        items-center
        justify-center
      ">

        {icon}

      </div>

      <h3 className="text-2xl font-bold mb-4">

        {title}

      </h3>

      <p className="text-gray-300 leading-7">

        {desc}

      </p>

    </div>

  );

}