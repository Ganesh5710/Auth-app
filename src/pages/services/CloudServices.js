import React, {
  useState,
  useEffect,
} from "react";

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
  ArrowRight,
  CheckCircle2,
  Cpu,
  Lock,
  Rocket,
  Layers3,
  Users,
  MonitorSmartphone,
  Star,
  PlayCircle,
} from "lucide-react";

export default function CloudServices() {

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

  const features = [

    {
      icon: <Cpu size={34} />,
      title: "AI Infrastructure",
      desc:
        "AI-powered enterprise cloud ecosystems.",
    },

    {
      icon: <Lock size={34} />,
      title: "Zero Trust Security",
      desc:
        "Advanced enterprise infrastructure security.",
    },

    {
      icon: <Rocket size={34} />,
      title: "Scalable Deployment",
      desc:
        "Deploy globally with scalable architecture.",
    },

    {
      icon: <Layers3 size={34} />,
      title: "Cloud Automation",
      desc:
        "Modern automated DevOps systems.",
    },

  ];

  const stats = [

    {
      value: "300+",
      label: "Deployments",
    },

    {
      value: "99.9%",
      label: "Uptime",
    },

    {
      value: "24/7",
      label: "Monitoring",
    },

    {
      value: "120+",
      label: "Enterprise Clients",
    },

  ];

  const testimonials = [

    {
      name: "Michael Johnson",
      role: "CTO, NexaTech",

      review:
        "Enkonix delivered enterprise-grade cloud infrastructure with incredible scalability and monitoring systems.",
    },

    {
      name: "Sarah Williams",
      role: "Cloud Architect",

      review:
        "Professional cloud automation and secure infrastructure systems with excellent deployment workflows.",
    },

    {
      name: "David Smith",
      role: "Founder, SkyCore",

      review:
        "Highly scalable enterprise cloud solutions with AI-powered monitoring and analytics.",
    },

  ];

  return (

    <GlobalLayout>

      <div
        dir={isRTL ? "rtl" : "ltr"}
        className="
          min-h-screen
          bg-white
          text-black
          dark:bg-[#050b1a]
          dark:text-white
          overflow-hidden
          transition-all
          duration-500
        "
      >     
        {/* SECTION 1 HERO */}

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
                text-blue-600
                dark:text-blue-400
                mb-8
              `}>

                <Cloud size={30} />

                Enterprise Cloud Infrastructure

              </div>

              <h1 className="
                text-6xl
                md:text-7xl
                font-black
                leading-tight
                mb-8
              ">

                Scalable

                <span className="
                  bg-gradient-to-r
                  from-blue-400
                  to-cyan-500
                  text-transparent
                  bg-clip-text
                ">

                  {" "}
                  Cloud Systems

                </span>

              </h1>

              <p className="
                dark:text-gray-300
                text-gray-700
                text-xl
                leading-10
                max-w-2xl
              ">

                Build secure, scalable, and enterprise-grade cloud infrastructure powered by AWS, Azure, Google Cloud and automation systems.

              </p>

              <div className="
                flex
                flex-wrap
                gap-5
                mt-12
              ">

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
                ">

                  Deploy Infrastructure

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
                  flex
                  items-center
                  gap-3
                ">

                  <PlayCircle size={22} />

                  Watch Demo

                </button>

              </div>

            </div>

            <div className="
              bg-white
              dark:bg-[#111c38]
              rounded-[40px]
              border
              border-blue-500/20
              p-10
              shadow-[0_0_40px_rgba(34,211,238,0.10)]
            ">

              <div className="
                grid
                grid-cols-2
                gap-6
              ">

                {cloudServices.slice(0, 4).map((service, index) => (

                  <div
                    key={index}
                    className="
                      bg-gray-100
                      dark:bg-[#0f172a]
                      rounded-3xl
                      p-8
                      border
                      border-blue-500/10
                      hover:border-blue-400/40
                      hover:-translate-y-2
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
                      dark:text-gray-300
                      leading-7
                    ">

                      {service.desc}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* SECTION 2 SERVICES */}

        <section className="px-6 py-28">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20">

              <h2 className="
                text-6xl
                font-black
                mb-6
              ">

                Cloud Solutions

              </h2>

              <p className="
                text-xl
                text-gray-600
                dark:text-gray-400
                max-w-3xl
                mx-auto
              ">

                Enterprise cloud services designed for scalability, automation and performance.

              </p>

            </div>

            <div className="
              grid
              md:grid-cols-2
              lg:grid-cols-4
              gap-8
            ">

              {cloudServices.map((service, index) => (

                <div
                  key={index}
                  className="
                    bg-white
                    dark:bg-[#111c38]
                    rounded-[32px]
                    border
                    border-blue-500/20
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
                    from-blue-500
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

          <div className="max-w-7xl mx-auto">

            <div className="
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

                  AI Cloud Features

                </h2>

                <p className="
                  text-xl
                  leading-10
                  text-gray-700
                  dark:text-gray-400
                  mb-10
                ">

                  AI-powered infrastructure automation and enterprise-grade cloud monitoring systems.

                </p>

                <div className="
                  flex
                  flex-col
                  gap-5
                ">

                  {[
                    "AI Infrastructure",
                    "Cloud Automation",
                    "Real-Time Monitoring",
                    "Global Scalability",
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
                        className="text-cyan-400"
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

                {features.map((item, index) => (

                  <div
                    key={index}
                    className="
                      bg-white
                      dark:bg-[#111c38]
                      rounded-[32px]
                      p-10
                      border
                      border-blue-500/20
                      text-center
                    "
                  >

                    <div className="
                      flex
                      justify-center
                      mb-6
                      text-cyan-400
                    ">

                      {item.icon}

                    </div>

                    <h3 className="
                      text-2xl
                      font-bold
                      mb-4
                    ">

                      {item.title}

                    </h3>

                    <p className="
                      text-gray-600
                      dark:text-gray-400
                      leading-7
                    ">

                      {item.desc}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* SECTION 4 STATS */}

        <section className="px-6 py-28">

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
                  dark:bg-[#111c38]
                  rounded-[32px]
                  border
                  border-blue-500/20
                  p-12
                  text-center
                "
              >

                <h2 className="
                  text-6xl
                  font-black
                  bg-gradient-to-r
                  from-blue-400
                  to-cyan-500
                  text-transparent
                  bg-clip-text
                  mb-4
                ">

                  {item.value}

                </h2>

                <p className="
                  text-xl
                  text-gray-600
                  dark:text-gray-400
                ">

                  {item.label}

                </p>

              </div>

            ))}

          </div>

        </section>

        {/* SECTION 5 TECHNOLOGY */}

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

              Cloud Technologies

            </h2>

            <div className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-8
            ">

              {[
                "AWS",
                "Azure",
                "Docker",
                "Kubernetes",
                "Node.js",
                "Python",
                "Terraform",
                "MongoDB",
              ].map((tech, index) => (

                <div
                  key={index}
                  className="
                    bg-white
                    dark:bg-[#111c38]
                    rounded-[32px]
                    border
                    border-blue-500/20
                    p-10
                    text-center
                  "
                >

                  <h3 className="
                    text-3xl
                    font-bold
                    text-cyan-400
                  ">

                    {tech}

                  </h3>

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

              Expert Cloud Team

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
                    rounded-[32px]
                    border
                    border-blue-500/20
                    p-10
                  "
                >

                  <div className="
                    w-28
                    h-28
                    rounded-full
                    bg-gradient-to-r
                    from-blue-500
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

                    Cloud Architect

                  </h3>

                  <p className="
                    text-cyan-400
                    mb-5
                  ">

                    Enterprise Specialist

                  </p>

                  <p className="
                    text-gray-700
                    dark:text-gray-400
                    leading-8
                  ">

                    Professional cloud engineers building scalable enterprise ecosystems.

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
            from-blue-500
            via-cyan-500
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

              Ready To Scale Your Infrastructure?

            </h2>

            <p className="
              text-2xl
              leading-10
              max-w-4xl
              mx-auto
              mb-12
            ">

              Start building enterprise-grade cloud infrastructure with AI-powered monitoring and scalable deployment systems.

            </p>

            <button className="
              inline-flex
              items-center
              gap-3
              px-12
              py-6
              bg-white
              text-blue-600
              rounded-2xl
              text-xl
              font-black
              hover:scale-105
              transition-all
              duration-300
            ">

              Contact Cloud Team

              <ArrowRight size={22} />

            </button>

          </div>

        </section>

      </div>

    </GlobalLayout>

  );

}