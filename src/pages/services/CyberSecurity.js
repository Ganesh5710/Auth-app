import React from "react";

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
} from "lucide-react";

export default function CyberSecurity() {

  const {
    language,
    isRTL,
  } = useLanguage();

  const translations =
    translationsData[language];

  const services = [

    translations.threatDetectionService ||
    "Threat Detection",

    translations.cloudSecurity ||
    "Cloud Security",

    translations.networkProtection ||
    "Network Protection",

    translations.dataEncryption ||
    "Data Encryption",

    translations.penetrationTesting ||
    "Penetration Testing",

    translations.monitoring ||
    "24/7 Monitoring",

    translations.identityProtection ||
    "Identity Protection",

    translations.securityAudits ||
    "Security Audits",

  ];

  const stats = [

    {
      number: "500+",
      title:
        translations.protectedSystems ||
        "Protected Systems",
    },

    {
      number: "99.99%",
      title:
        translations.threatDetection ||
        "Threat Detection",
    },

    {
      number: "24/7",
      title:
        translations.monitoring ||
        "Monitoring",
    },

    {
      number: "150+",
      title:
        translations.enterpriseClients ||
        "Enterprise Clients",
    },

  ];

  const features = [

    {
      icon: <Lock size={32} />,
      title:
        translations.dataProtection ||
        "Data Protection",

      desc:
        translations.dataProtectionDesc ||
        "Enterprise-grade encryption and infrastructure security.",
    },

    {
      icon: <Fingerprint size={32} />,
      title:
        translations.identitySecurity ||
        "Identity Security",

      desc:
        translations.identitySecurityDesc ||
        "Advanced authentication and access management systems.",
    },

    {
      icon: <Bug size={32} />,
      title:
        translations.threatDetection ||
        "Threat Detection",

      desc:
        translations.threatDetectionDesc ||
        "AI-powered real-time cybersecurity threat monitoring.",
    },

    {
      icon: <Eye size={32} />,
      title:
        translations.monitoring ||
        "24/7 Monitoring",

      desc:
        translations.monitoringDesc ||
        "Continuous enterprise security infrastructure monitoring.",
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

        <section className="relative py-32 px-6 overflow-hidden">

          {/* BACKGROUND EFFECTS */}

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

            {/* LEFT CONTENT */}

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
                text-cyan-300
                mb-8
                ${
                  isRTL
                    ? "flex-row-reverse"
                    : ""
                }
              `}>

                <ShieldCheck size={20} />

                {translations.enterpriseSecuritySolutions ||
                  "Enterprise Security Solutions"}

              </div>

              <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8">

                {translations.advanced ||
                  "Advanced"}

                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">

                  {" "}
                  {translations.advancedCyberSecurity ||
                    "Cyber Security"}

                </span>

              </h1>

              <p className="dark:text-gray-300 text-gray-700 text-xl leading-10 max-w-2xl">

                {translations.cyberSecurityHeroDesc ||
                  "Protect enterprise infrastructure using advanced cybersecurity, AI-powered threat intelligence, cloud security, encryption, and real-time enterprise monitoring systems."}

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

                <button className={`
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
                  flex
                  items-center
                  gap-3
                  ${
                    isRTL
                      ? "flex-row-reverse"
                      : ""
                  }
                `}>

                  {translations.secureInfrastructure ||
                    "Secure Infrastructure"}

                  <ArrowRight size={20} />

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

                  {translations.exploreSolutions ||
                    "Explore Solutions"}

                </button>

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="bg-[#111c38] rounded-[40px] border border-cyan-500/20 p-10">

              <div className="grid grid-cols-2 gap-6">

                <FeatureBox
                  icon={<Cloud size={32} />}
                  title={
                    translations.cloudSecurity ||
                    "Cloud Security"
                  }
                />

                <FeatureBox
                  icon={<Database size={32} />}
                  title={
                    translations.dataProtection ||
                    "Data Protection"
                  }
                />

                <FeatureBox
                  icon={<Cpu size={32} />}
                  title={
                    translations.aiIntelligence ||
                    "AI Intelligence"
                  }
                />

                <FeatureBox
                  icon={<Workflow size={32} />}
                  title={
                    translations.automation ||
                    "Automation"
                  }
                />

              </div>

            </div>

          </div>

        </section>

        {/* STATS */}

        <section className="px-6 pb-24">

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {stats.map((item, index) => (

              <div
                key={index}
                className="
                  bg-[#111c38]
                  text-white
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

                <p className="text-gray-300 text-lg">

                  {item.title}

                </p>

              </div>

            ))}

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