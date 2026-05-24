import React from "react";

import GlobalLayout from "../../components/GlobalLayout";

import {
  Brain,
  Bot,
  Cpu,
  
  Database,
  Workflow,
  ArrowRight,
  CheckCircle2,
  Zap,
  Cloud,
  Lock,
  LineChart,
} from "lucide-react";

export default function AISolutions() {

  const aiServices = [

    {
      title: "AI Chatbot Development",
      desc: "Intelligent conversational AI systems for automation.",
    },

    {
      title: "Machine Learning Models",
      desc: "Custom-trained AI models for smart predictions.",
    },

    {
      title: "Predictive Analytics",
      desc: "Analyze trends and forecast future business growth.",
    },

    {
      title: "Natural Language Processing",
      desc: "Understand and process human language effectively.",
    },

    {
      title: "AI Workflow Automation",
      desc: "Automate repetitive tasks with AI intelligence.",
    },

    {
      title: "Data Intelligence Systems",
      desc: "Transform data into strategic business insights.",
    },

    {
      title: "Computer Vision Solutions",
      desc: "AI-powered image and video analysis systems.",
    },

    {
      title: "Recommendation Engines",
      desc: "Personalized recommendation systems using AI.",
    },

  ];

  return (

    <GlobalLayout>

      <div className="min-h-screen text-gray-900 dark:text-white overflow-hidden">

        {/* HERO SECTION */}

        <section className="relative py-28 px-6">

          <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-purple-500/20 blur-[140px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/20 blur-[140px] rounded-full"></div>

          <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 dark:text-purple-300 mb-8">

                <Brain size={20} />

                Artificial Intelligence Solutions

              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">

                AI

                <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                  {" "}Solutions
                </span>

              </h1>

              <p className="dark:text-gray-300 text-gray-700 text-lg md:text-xl leading-9 max-w-2xl">

                Transform your business using advanced AI technologies,
                machine learning systems, intelligent automation,
                predictive analytics, and next-generation AI platforms.

              </p>

              <div className="flex flex-wrap gap-5 mt-10">

                <button
                  className="
                    px-8
                    py-4
                    rounded-2xl
                    bg-gradient-to-r
                    from-purple-500
                    to-pink-500
                    font-bold
                    text-white
                    hover:scale-105
                    transition-all
                    duration-300
                    shadow-lg
                    shadow-purple-500/20
                  "
                >

                  Explore AI

                </button>

                <button
                  className="
                    px-8
                    py-4
                    rounded-2xl
                    border
                    border-purple-400/30
                    dark:text-white
                    text-gray-900
                    hover:bg-purple-500/10
                    transition-all
                    duration-300
                  "
                >

                  Book Demo

                </button>

              </div>

            </div>

            {/* RIGHT */}

            <div>

              <div className="bg-[#111c38] border border-purple-500/20 rounded-[40px] p-10 shadow-2xl">

                <div className="grid grid-cols-2 gap-6">

                  <FeatureCard
                    icon={<Bot size={35} />}
                    title="AI Chatbots"
                  />

                  <FeatureCard
                    icon={<Cpu size={35} />}
                    title="Machine Learning"
                  />

                  <FeatureCard
                    icon={<Database size={35} />}
                    title="Big Data AI"
                  />

                  <FeatureCard
                    icon={<Workflow size={35} />}
                    title="Automation"
                  />

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* STATS */}

        <section className="px-6 pb-24">

          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

            <StatsCard number="150+" title="AI Projects" />
            <StatsCard number="98%" title="Client Satisfaction" />
            <StatsCard number="24/7" title="AI Monitoring" />
            <StatsCard number="50+" title="Enterprise Clients" />

          </div>

        </section>

        {/* SERVICES */}

        <section className="px-6 pb-28">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20">

              <h2 className="text-5xl font-black mb-6">

                AI Capabilities

              </h2>

              <p className="dark:text-gray-400 text-gray-600 text-lg max-w-3xl mx-auto leading-8">

                Enterprise-grade AI solutions engineered for performance,
                automation, scalability, and intelligent decision-making.

              </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {aiServices.map((service, index) => (

                <div
                  key={index}
                  className="
                    bg-[#111c38]
                    text-white
                    border
                    border-purple-500/10
                    rounded-3xl
                    p-8
                    hover:border-purple-400/40
                    hover:-translate-y-2
                    transition-all
                    duration-500
                    shadow-xl
                    group
                  "
                >

                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-gradient-to-r
                      from-purple-500
                      to-pink-500
                      flex
                      items-center
                      justify-center
                      mb-6
                    "
                  >

                    <CheckCircle2 size={30} />

                  </div>

                  <h3 className="text-2xl font-bold mb-5">

                    {service.title}

                  </h3>

                  <p className="text-gray-300 leading-7">

                    {service.desc}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* PROCESS */}

        <section className="px-6 pb-28">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20">

              <h2 className="text-5xl font-black mb-6">

                AI Development Process

              </h2>

              <p className="dark:text-gray-400 text-gray-600 text-lg">

                Modern AI engineering workflow designed for enterprise scalability.

              </p>

            </div>

            <div className="grid md:grid-cols-4 gap-10">

              <ProcessCard
                number="01"
                title="Research"
                desc="Business analysis and AI opportunity identification."
              />

              <ProcessCard
                number="02"
                title="Training"
                desc="Building and training custom AI models."
              />

              <ProcessCard
                number="03"
                title="Deployment"
                desc="Integration into enterprise systems and apps."
              />

              <ProcessCard
                number="04"
                title="Optimization"
                desc="Continuous improvement and AI performance tuning."
              />

            </div>

          </div>

        </section>

        {/* BENEFITS */}

        <section className="px-6 pb-28">

          <div className="max-w-7xl mx-auto">

            <div className="bg-[#111c38] rounded-[40px] border border-purple-500/20 p-14">

              <div className="text-center mb-16">

                <h2 className="text-5xl font-black mb-6 text-white">

                  Why Choose Enkonix AI

                </h2>

                <p className="text-gray-300 text-lg">

                  Enterprise AI systems designed for innovation and growth.

                </p>

              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                <BenefitCard
                  icon={<Zap size={28} />}
                  title="Automation"
                />

                <BenefitCard
                  icon={<LineChart size={28} />}
                  title="Analytics"
                />

                <BenefitCard
                  icon={<Lock size={28} />}
                  title="Security"
                />

                <BenefitCard
                  icon={<Cloud size={28} />}
                  title="Cloud AI"
                />

              </div>

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="px-6 pb-28">

          <div className="max-w-7xl mx-auto rounded-[40px] p-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-center relative overflow-hidden">

            <div className="absolute inset-0 bg-purple-500/5 blur-3xl"></div>

            <div className="relative z-10">

              <h2 className="text-5xl font-black mb-8">

                Ready To Build Intelligent Systems?

              </h2>

              <p className="dark:text-gray-300 text-gray-700 text-xl max-w-3xl mx-auto leading-9 mb-10">

                Let Enkonix help you transform your business with
                enterprise-grade AI solutions and automation systems.

              </p>

              <button
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-10
                  py-5
                  rounded-2xl
                  bg-gradient-to-r
                  from-purple-500
                  to-pink-500
                  font-bold
                  text-lg
                  text-white
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-purple-500/30
                "
              >

                Start AI Project

                <ArrowRight size={22} />

              </button>

            </div>

          </div>

        </section>

      </div>

    </GlobalLayout>

  );

}

/* FEATURE CARD */

function FeatureCard({ icon, title }) {

  return (

    <div
      className="
        bg-[#0f172a]
        text-white
        border
        border-white/10
        rounded-3xl
        p-8
        hover:border-purple-400/40
        transition-all
        duration-500
        text-center
      "
    >

      <div
        className="
          w-20
          h-20
          rounded-3xl
          bg-gradient-to-r
          from-purple-500
          to-pink-500
          flex
          items-center
          justify-center
          mx-auto
          mb-6
        "
      >

        {icon}

      </div>

      <h3 className="text-2xl font-bold text-white">

        {title}

      </h3>

    </div>

  );

}

/* PROCESS CARD */

function ProcessCard({ number, title, desc }) {

  return (

    <div
      className="
        bg-[#111c38]
        text-white
        border
        border-purple-500/10
        rounded-3xl
        p-10
        hover:border-purple-400/30
        hover:-translate-y-2
        transition-all
        duration-500
      "
    >

      <div className="text-5xl font-black text-purple-400 mb-6">

        {number}

      </div>

      <h3 className="text-3xl font-bold mb-5">

        {title}

      </h3>

      <p className="text-gray-300 leading-8 text-lg">

        {desc}

      </p>

    </div>

  );

}

/* BENEFIT CARD */

function BenefitCard({ icon, title }) {

  return (

    <div
      className="
        bg-[#0f172a]
        text-white
        border
        border-white/10
        rounded-3xl
        p-8
        text-center
      "
    >

      <div
        className="
          w-16
          h-16
          rounded-2xl
          bg-gradient-to-r
          from-purple-500
          to-pink-500
          flex
          items-center
          justify-center
          mx-auto
          mb-6
        "
      >

        {icon}

      </div>

      <h3 className="text-2xl font-bold text-white">

        {title}

      </h3>

    </div>

  );

}

/* STATS CARD */

function StatsCard({ number, title }) {

  return (

    <div
      className="
        bg-[#111c38]
        text-white
        rounded-3xl
        p-8
        border
        border-purple-500/10
        text-center
      "
    >

      <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">

        {number}

      </h2>

      <p className="text-gray-300 text-lg">

        {title}

      </p>

    </div>

  );

}