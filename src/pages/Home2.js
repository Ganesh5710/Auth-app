import React, {
  useState,
  useEffect,
} from "react";

import { Link } from "react-router-dom";

import GlobalLayout from "../components/GlobalLayout";

import {
  useLanguage,
} from "../context/LanguageContext";

import translationsData from "../utils/translations";

import {
  ArrowRight,
  Sparkles,
  Brain,
  Cloud,
  Shield,
  Bot,
  Globe,
  Smartphone,
  Cpu,
  Rocket,
  Workflow,
  Database,
  BarChart3,
  Layers3,
  Server,
  CheckCircle2,
  Star,
  TrendingUp,
  Play,
  Zap,
  MonitorSmartphone,
  Code2,
  Users,
} from "lucide-react";

export default function Home2() {

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

  const solutions = [

    {
      icon: <Brain size={42} className="text-pink-400" />,
      title: "AI Automation",
      desc:
        "Enterprise AI systems designed for automation and analytics.",
    },

    {
      icon: <Cloud size={42} className="text-cyan-400" />,
      title: "Cloud Infrastructure",
      desc:
        "Secure and scalable enterprise cloud ecosystems.",
    },

    {
      icon: <Shield size={42} className="text-purple-400" />,
      title: "Cyber Security",
      desc:
        "Advanced enterprise security and monitoring systems.",
    },

    {
      icon: <Bot size={42} className="text-blue-400" />,
      title: "AI Chatbots",
      desc:
        "Intelligent AI assistants and smart support systems.",
    },

  ];

  const services = [

    {
      icon: <Globe size={38} className="text-cyan-400" />,
      title: "Web Development",
    },

    {
      icon: <Smartphone size={38} className="text-pink-400" />,
      title: "Mobile Applications",
    },

    {
      icon: <MonitorSmartphone size={38} className="text-purple-400" />,
      title: "UI/UX Systems",
    },

    {
      icon: <Server size={38} className="text-blue-400" />,
      title: "Enterprise Servers",
    },

  ];

  const technologies = [

    "React.js",
    "Node.js",
    "MongoDB",
    "AWS",
    "Docker",
    "Python",
    "Flutter",
    "AI/ML",

  ];

  const stats = [

    {
      value: "50+",
      label: "Projects Delivered",
    },

    {
      value: "98%",
      label: "Success Rate",
    },

    {
      value: "120+",
      label: "Enterprise Clients",
    },

    {
      value: "24/7",
      label: "Monitoring",
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

        <section className="
          relative
          pt-40
          pb-32
          px-8
          overflow-hidden
        ">

          <div className="
            absolute
            top-0
            left-0
            w-[600px]
            h-[600px]
            bg-cyan-500/20
            blur-[180px]
            rounded-full
          "></div>

          <div className="
            absolute
            bottom-0
            right-0
            w-[600px]
            h-[600px]
            bg-purple-500/20
            blur-[180px]
            rounded-full
          "></div>

          <div className="
            relative
            max-w-7xl
            mx-auto
            grid
            lg:grid-cols-2
            gap-16
            items-center
          ">

            <div>

              <div className="
                inline-flex
                items-center
                gap-3
                bg-cyan-500/10
                border
                border-cyan-500/20
                px-6
                py-3
                rounded-full
                text-cyan-700
                mb-8
              ">

                <Sparkles size={28} />

                Future Enterprise Technology

              </div>

              <h1 className="
                text-7xl
                lg:text-8xl
                font-black
                leading-tight
                mb-10
              ">

                Intelligent

                <span className="
                  block
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-400
                  to-purple-500
                  bg-clip-text
                  text-transparent
                ">

                  Digital Ecosystem

                </span>

              </h1>

              <p className="
                text-2xl
                leading-10
                text-gray-700
                dark:text-gray-300
                mb-12
              ">

                Enkonix builds AI-powered enterprise platforms with futuristic cloud systems, cybersecurity and scalable digital infrastructure.

              </p>

              <div className="
                flex
                flex-wrap
                gap-6
              ">

                <Link
                  to="/contact"
                  className="
                    px-10
                    py-5
                    rounded-2xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-600
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

                  Get Started

                  <ArrowRight size={20} />

                </Link>

                <button className="
                  px-10
                  py-5
                  rounded-2xl
                  border
                  border-cyan-500/20
                  bg-white/5
                  dark:bg-white/5
                  font-semibold
                  flex
                  items-center
                  gap-3
                  hover:bg-cyan-500/10
                  transition-all
                ">

                  <Play size={20} />

                  Watch Demo

                </button>

              </div>

            </div>

            {/* RIGHT HERO */}

            <div className="
              grid
              grid-cols-2
              gap-8
            ">

              {solutions.map((item, index) => (

                <div
                  key={index}
                  className="
                    bg-white
                    dark:bg-[#111c38]
                    border
                    border-cyan-500/20
                    rounded-[32px]
                    p-10
                    hover:-translate-y-3
                    hover:border-cyan-500/40
                    hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
                    transition-all
                    duration-500
                  "
                >

                  <div className="mb-8">

                    {item.icon}

                  </div>

                  <h2 className="
                    text-3xl
                    font-bold
                    mb-5
                  ">

                    {item.title}

                  </h2>

                  <p className="
                    text-gray-600
                    dark:text-gray-400
                    leading-8
                    text-lg
                  ">

                    {item.desc}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* SECTION 2 SERVICES */}

        <section className="px-8 py-28">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20">

              <h2 className="
                text-6xl
                font-black
                mb-6
              ">

                Enterprise Services

              </h2>

            </div>

            <div className="
              grid
              md:grid-cols-2
              lg:grid-cols-4
              gap-8
            ">

              {services.map((item, index) => (

                <div
                  key={index}
                  className="
                    bg-white
                    dark:bg-[#111c38]
                    border
                    border-cyan-500/20
                    rounded-[32px]
                    p-10
                    text-center
                    hover:-translate-y-3
                    hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
                    transition-all
                    duration-500
                  "
                >

                  <div className="
                    flex
                    justify-center
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

          </div>

        </section>

        {/* SECTION 3 AI FEATURES */}

        <section className="
          px-8
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

              <div className="
                inline-flex
                items-center
                gap-3
                bg-cyan-500/10
                border
                border-cyan-500/20
                px-6
                py-3
                rounded-full
                text-cyan-400
                mb-8
              ">

                <Bot size={18} />

                AI Powered Systems

              </div>

              <h2 className="
                text-6xl
                font-black
                mb-8
              ">

                Intelligent Enterprise Automation

              </h2>

              <p className="
                text-gray-700
                dark:text-gray-400
                text-xl
                leading-10
                mb-10
              ">

                AI-driven enterprise systems designed for automation, analytics and intelligent business workflows.

              </p>

              <div className="
                flex
                flex-col
                gap-5
              ">

                {[
                  "AI Automation",
                  "Predictive Analytics",
                  "Workflow Intelligence",
                  "Cloud Monitoring",
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
                      className="text-cyan-400"
                      size={24}
                    />

                    <span className="
                      text-xl
                    ">

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

              <FeatureCard
                icon={<Database size={40} />}
                title="Big Data"
              />

              <FeatureCard
                icon={<Workflow size={40} />}
                title="Automation"
              />

              <FeatureCard
                icon={<Rocket size={40} />}
                title="Scalability"
              />

              <FeatureCard
                icon={<Layers3 size={40} />}
                title="Enterprise"
              />

            </div>

          </div>

        </section>

        {/* SECTION 4 TECHNOLOGY STACK */}

        <section className="px-8 py-28">

          <div className="max-w-7xl mx-auto text-center">

            <h2 className="
              text-6xl
              font-black
              mb-20
            ">

              Technology Stack

            </h2>

            <div className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-8
            ">

              {technologies.map((tech, index) => (

                <div
                  key={index}
                  className="
                    bg-white
                    dark:bg-[#111c38]
                    border
                    border-cyan-500/20
                    rounded-[32px]
                    p-10
                    hover:-translate-y-2
                    hover:border-cyan-400/40
                    transition-all
                    duration-300
                  "
                >

                  <Code2
                    className="
                      mx-auto
                      text-cyan-400
                      mb-6
                    "
                    size={42}
                  />

                  <h3 className="
                    text-2xl
                    font-bold
                  ">

                    {tech}

                  </h3>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* SECTION 5 ANALYTICS */}

        <section className="px-8 py-28">

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
                  border
                  border-cyan-500/20
                  rounded-[32px]
                  p-12
                  text-center
                  hover:-translate-y-2
                  hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]
                  transition-all
                  duration-500
                "
              >

                <h2 className="
                  text-6xl
                  font-black
                  text-cyan-400
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

       

        {/* SECTION 7 TEAM */}

        <section className="px-8 py-28">

          <div className="max-w-7xl mx-auto text-center">

            <h2 className="
              text-6xl
              font-black
              mb-20
            ">

              Expert Team

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
                    border-cyan-500/20
                    rounded-[32px]
                    p-10
                    hover:-translate-y-3
                    transition-all
                    duration-500
                  "
                >

                  <div className="
                    w-28
                    h-28
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-500
                    mx-auto
                    mb-8
                    flex
                    items-center
                    justify-center
                  ">

                    <Users size={40} />

                  </div>

                  <h3 className="
                    text-3xl
                    font-bold
                    mb-3
                  ">

                    Enterprise Expert

                  </h3>

                  <p className="
                    text-cyan-400
                    mb-5
                  ">

                    AI & Cloud Specialist

                  </p>

                  <p className="
                    text-gray-700
                    dark:text-gray-400
                    leading-8
                  ">

                    Professional enterprise technology specialists building scalable digital ecosystems.

                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* SECTION 8 CTA */}

        <section className="px-8 py-28">

          <div className="
            max-w-7xl
            mx-auto
            bg-gradient-to-r
            from-cyan-500
            via-blue-500
            to-purple-500
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

              Build The Future With Enkonix

            </h2>

            <p className="
              text-2xl
              leading-10
              max-w-4xl
              mx-auto
              mb-12
            ">

              Start your digital transformation journey with intelligent enterprise solutions and futuristic technologies.

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
                text-cyan-600
                rounded-2xl
                text-xl
                font-black
                hover:scale-105
                transition-all
                duration-300
              "
            >

              Contact Us

              <ArrowRight size={22} />

            </Link>

          </div>

        </section>

      </div>

    </GlobalLayout>

  );

}

function FeatureCard({
  icon,
  title,
}) {

  return (

    <div className="
      bg-white
      dark:bg-[#111c38]
      border
      border-cyan-500/20
      rounded-[32px]
      p-10
      text-center
      hover:-translate-y-3
      hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
      transition-all
      duration-500
    ">

      <div className="
        flex
        justify-center
        text-cyan-400
        mb-6
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