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
  Lock,
  Zap,
  MonitorSmartphone,
  Server,
  Sparkles,
  Users,
  TrendingUp,
  Award,
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
      icon: <Globe size={40} className="text-cyan-400" />,
      title:
        translations.webDevelopment ||
        "Web Development",

      desc:
        translations.webDevelopmentDesc ||
        "Modern scalable websites and enterprise applications.",
    },

    {
      icon: <Smartphone size={40} className="text-cyan-400" />,
      title:
        translations.mobileApps ||
        "Mobile Apps",

      desc:
        translations.mobileAppsDesc ||
        "Android & iOS apps with premium UX.",
    },

    {
      icon: <Brain size={40} className="text-cyan-400" />,
      title:
        translations.aiSolutions ||
        "AI Solutions",

      desc:
        translations.aiSolutionsDesc ||
        "Enterprise AI systems and automation.",
    },

    {
      icon: <Cloud size={40} className="text-cyan-400" />,
      title:
        translations.cloudServices ||
        "Cloud Services",

      desc:
        translations.cloudServicesDesc ||
        "Scalable cloud infrastructure systems.",
    },

    {
      icon: <ShieldCheck size={40} className="text-cyan-400" />,
      title:
        translations.cyberSecurity ||
        "Cyber Security",

      desc:
        translations.cyberSecurityDesc ||
        "Enterprise-grade security protection.",
    },

    {
      icon: <BarChart3 size={40} className="text-cyan-400" />,
      title:
        translations.digitalMarketing ||
        "Digital Marketing",

      desc:
        translations.digitalMarketingDesc ||
        "SEO and growth-focused campaigns.",
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
        "Understanding business requirements and strategy.",
    },

    {
      number: "02",
      title:
        translations.planning ||
        "Planning",

      desc:
        translations.planningDesc ||
        "Building scalable workflows and architecture.",
    },

    {
      number: "03",
      title:
        translations.development ||
        "Development",

      desc:
        translations.developmentDesc ||
        "Developing enterprise-grade digital systems.",
    },

    {
      number: "04",
      title:
        translations.deployment ||
        "Deployment",

      desc:
        translations.deploymentDesc ||
        "Launch, monitoring and performance optimization.",
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

        {/* SECTION 1 - HERO */}

        <section className="relative pt-40 pb-32 px-6 lg:px-20 overflow-hidden">

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[160px] rounded-full"></div>

          <div className={`
            relative z-10
            grid lg:grid-cols-2
            gap-20 items-center
            ${
              isRTL
                ? "text-right"
                : "text-left"
            }
          `}>

            <div>

              <div className="
                inline-flex items-center gap-3
                bg-cyan-500/10
                border border-cyan-500/20
                px-6 py-3 rounded-full
                mb-8 text-cyan-600
              ">

                <Sparkles size={30} />

                {translations.aiPoweredTransformation ||
                  "AI Powered Digital Transformation"}

              </div>

              <h1 className="
                text-6xl lg:text-8xl
                font-black
                leading-tight
                mb-8
              ">

                {translations.build ||
                  "Build"}

                <span className="
                  block
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500
                  text-transparent
                  bg-clip-text
                ">

                  {translations.futureReady ||
                    "Future Ready"}

                </span>

                {translations.digitalSolutions ||
                  "Digital Solutions"}

              </h1>

              <p className="
                dark:text-gray-300
                text-gray-700
                text-xl
                leading-10
                mb-10
                max-w-2xl
              ">

                {translations.homeHeroDesc ||
                  "Enterprise AI systems, scalable cloud platforms, cybersecurity, web applications and intelligent automation for modern businesses."}

              </p>

              <div className="
                flex flex-wrap gap-5
                mb-12
              ">

                <Link
                  to="/contact"
                  className="
                    px-8 py-4
                    rounded-2xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-500
                    text-white
                    font-bold
                    flex items-center gap-3
                    hover:scale-105
                    transition-all duration-300
                  "
                >

                  {translations.getStarted ||
                    "Get Started"}

                  <ArrowRight size={20} />

                </Link>

                <Link
                  to="/services"
                  className="
                    px-8 py-4
                    rounded-2xl
                    border border-cyan-500/20
                    hover:bg-cyan-500/10
                    transition-all duration-300
                  "
                >

                  {translations.exploreServices ||
                    "Explore Services"}

                </Link>

              </div>

              <div className="
                grid grid-cols-2 md:grid-cols-4 gap-5
              ">

                {stats.map((item, index) => (

                  <div
                    key={index}
                    className="
                      bg-[#111c38]
                      border border-cyan-500/10
                      rounded-3xl
                      p-5
                      text-white
                    "
                  >

                    <h2 className="
                      text-3xl
                      font-black
                      text-cyan-400
                      mb-2
                    ">

                      {item.value}

                    </h2>

                    <p className="text-gray-400 text-sm">

                      {item.label}

                    </p>

                  </div>

                ))}

              </div>

            </div>

            <div className="
              bg-[#111c38]
              border border-cyan-500/20
              rounded-[40px]
              p-10
            ">

              <div className="
                grid grid-cols-2 gap-6
              ">

                {services.map((service, index) => (

                  <div
                    key={index}
                    className="
                      bg-[#0f172a]
                      border border-white/10
                      rounded-3xl
                      p-8
                      text-white
                      hover:border-cyan-400/40
                      hover:-translate-y-2
                      transition-all duration-500
                    "
                  >

                    <div className="mb-6">

                      {service.icon}

                    </div>

                    <h3 className="
                      text-2xl font-bold mb-3
                    ">

                      {service.title}

                    </h3>

                    <p className="
                      text-gray-400 leading-7
                    ">

                      {service.desc}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* SECTION 2 - WHY CHOOSE */}

        <section className="px-6 lg:px-20 py-28">

          <div className="text-center mb-20">

            <h2 className="
              text-5xl font-black mb-6
            ">

              Why Choose Enkonix

            </h2>

          </div>

          <div className="
            grid md:grid-cols-2 lg:grid-cols-4 gap-8
          ">

            {[
              {
                icon: <Zap size={36} className="text-cyan-400" />,
                title: "Fast Performance",
              },

              {
                icon: <Lock size={36} className="text-cyan-400" />,
                title: "Enterprise Security",
              },

              {
                icon: <Cloud size={36} className="text-cyan-400" />,
                title: "Cloud Infrastructure",
              },

              {
                icon: <Users size={36} className="text-cyan-400" />,
                title: "24/7 Support",
              },

            ].map((item, index) => (

              <div
                key={index}
                className="
                  bg-[#111c38]
                  border border-cyan-500/10
                  rounded-3xl
                  p-8
                  text-white
                  hover:-translate-y-2
                  transition-all duration-500
                "
              >

                <div className="mb-6">

                  {item.icon}

                </div>

                <h3 className="
                  text-2xl font-bold
                ">

                  {item.title}

                </h3>

              </div>

            ))}

          </div>

        </section>

        {/* SECTION 3 - TECHNOLOGIES */}

        <section className="px-6 lg:px-20 py-28">

          <div className="text-center mb-20">

            <h2 className="
              text-5xl font-black mb-6
            ">

              Technologies We Use

            </h2>

          </div>

          <div className="
            grid grid-cols-2 md:grid-cols-4 gap-8
          ">

            {technologies.map((tech, index) => (

              <div
                key={index}
                className="
                  bg-[#111c38]
                  border border-cyan-500/10
                  rounded-3xl
                  p-8
                  text-center
                  text-white
                "
              >

                <Cpu
                  className="
                    mx-auto
                    text-cyan-400
                    mb-5
                  "
                  size={36}
                />

                <h3 className="
                  text-2xl font-bold
                ">

                  {tech}

                </h3>

              </div>

            ))}

          </div>

        </section>

        {/* SECTION 4 - PROCESS */}

        <section className="px-6 lg:px-20 py-28">

          <div className="text-center mb-20">

            <h2 className="
              text-5xl font-black mb-6
            ">

              Our Process

            </h2>

          </div>

          <div className="
            grid md:grid-cols-2 lg:grid-cols-4 gap-8
          ">

            {process.map((item, index) => (

              <div
                key={index}
                className="
                  bg-[#111c38]
                  border border-cyan-500/10
                  rounded-3xl
                  p-8
                  text-white
                "
              >

                <h2 className="
                  text-6xl
                  font-black
                  text-cyan-400
                  mb-6
                ">

                  {item.number}

                </h2>

                <h3 className="
                  text-2xl font-bold mb-4
                ">

                  {item.title}

                </h3>

                <p className="
                  text-gray-400 leading-8
                ">

                  {item.desc}

                </p>

              </div>

            ))}

          </div>

        </section>

        {/* SECTION 5 - AI SYSTEMS */}

        <section className="px-6 lg:px-20 py-28">

          <div className="
            grid lg:grid-cols-2
            gap-16 items-center
          ">

            <div>

              <div className="
                inline-flex items-center gap-3
                bg-cyan-500/10
                border border-cyan-500/20
                px-6 py-3 rounded-full
                mb-8 text-cyan-300
              ">

                <Brain size={20} />

                Smart AI Systems

              </div>

              <h2 className="
                text-5xl font-black mb-8
              ">

                Next Generation AI Solutions

              </h2>

              <p className="
                dark:text-gray-400
                text-gray-600
                text-lg
                leading-9
                mb-10
              ">

                AI-powered enterprise systems designed for automation, analytics and scalable digital transformation.

              </p>

              <div className="
                flex flex-col gap-5
              ">

                {[
                  "AI Automation",
                  "Predictive Analytics",
                  "Workflow Intelligence",
                  "Smart Monitoring",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="
                      flex items-center gap-4
                    "
                  >

                    <CheckCircle2
                      className="text-cyan-400"
                      size={24}
                    />

                    <span className="
                      text-lg font-medium
                    ">

                      {item}

                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div className="
              bg-[#111c38]
              border border-cyan-500/20
              rounded-[40px]
              p-10
            ">

              <div className="
                grid grid-cols-2 gap-8
              ">

                <FeatureBox
                  icon={<Database size={40} />}
                  title="Big Data"
                />

                <FeatureBox
                  icon={<Workflow size={40} />}
                  title="Automation"
                />

                <FeatureBox
                  icon={<Rocket size={40} />}
                  title="Scalability"
                />

                <FeatureBox
                  icon={<Layers3 size={40} />}
                  title="Enterprise"
                />

              </div>

            </div>

          </div>

        </section>


        {/* SECTION 7 - ENTERPRISE */}

        <section className="px-6 lg:px-20 py-28">

          <div className="
            grid md:grid-cols-2 lg:grid-cols-4 gap-8
          ">

            <EnterpriseCard
              icon={<MonitorSmartphone size={40} />}
              title="Modern UI/UX"
            />

            <EnterpriseCard
              icon={<Server size={40} />}
              title="Cloud Hosting"
            />

            <EnterpriseCard
              icon={<TrendingUp size={40} />}
              title="Business Growth"
            />

            <EnterpriseCard
              icon={<Award size={40} />}
              title="Premium Quality"
            />

          </div>

        </section>

        {/* SECTION 8 - CTA */}

        <section className="px-6 lg:px-20 pb-28">

          <div className="
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            rounded-[40px]
            p-14
            text-center
            text-white
          ">

            <h2 className="
              text-5xl font-black mb-8
            ">

              Ready To Build Your Future?

            </h2>

            <p className="
              text-xl
              leading-9
              max-w-3xl
              mx-auto
              mb-10
            ">

              Start your enterprise digital transformation journey with Enkonix today.

            </p>

            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                gap-3
                px-10 py-5
                bg-white
                text-cyan-600
                rounded-2xl
                font-black
                hover:scale-105
                transition-all duration-300
              "
            >

              Contact Us

              <ArrowRight size={20} />

            </Link>

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
      text-center
      text-white
    ">

      <div className="
        text-cyan-400
        mb-5
        flex justify-center
      ">

        {icon}

      </div>

      <h3 className="
        text-2xl font-bold
      ">

        {title}

      </h3>

    </div>

  );

}

function EnterpriseCard({
  icon,
  title,
}) {

  return (

    <div className="
      bg-[#111c38]
      border border-cyan-500/10
      rounded-3xl
      p-8
      text-center
      text-white
      hover:-translate-y-2
      transition-all duration-500
    ">

      <div className="
        flex justify-center
        text-cyan-400
        mb-6
      ">

        {icon}

      </div>

      <h3 className="
        text-2xl font-bold
      ">

        {title}

      </h3>

    </div>

  );

}