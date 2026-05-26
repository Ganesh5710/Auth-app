import React from "react";

import GlobalLayout from "../../components/GlobalLayout";

import {
  useLanguage,
} from "../../context/LanguageContext";

import translationsData from "../../utils/translations";

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

  const {
    language,
    isRTL,
  } = useLanguage();

  const translations =
    translationsData[language];

  const aiServices = [

    {
      title:
        translations.aiChatbotDevelopment ||
        "AI Chatbot Development",

      desc:
        translations.aiChatbotDevelopmentDesc ||
        "Intelligent conversational AI systems for automation.",
    },

    {
      title:
        translations.machineLearningModels ||
        "Machine Learning Models",

      desc:
        translations.machineLearningModelsDesc ||
        "Custom-trained AI models for smart predictions.",
    },

    {
      title:
        translations.predictiveAnalytics ||
        "Predictive Analytics",

      desc:
        translations.predictiveAnalyticsDesc ||
        "Analyze trends and forecast future business growth.",
    },

    {
      title:
        translations.naturalLanguageProcessing ||
        "Natural Language Processing",

      desc:
        translations.naturalLanguageProcessingDesc ||
        "Understand and process human language effectively.",
    },

    {
      title:
        translations.aiWorkflowAutomation ||
        "AI Workflow Automation",

      desc:
        translations.aiWorkflowAutomationDesc ||
        "Automate repetitive tasks with AI intelligence.",
    },

    {
      title:
        translations.dataIntelligenceSystems ||
        "Data Intelligence Systems",

      desc:
        translations.dataIntelligenceSystemsDesc ||
        "Transform data into strategic business insights.",
    },

    {
      title:
        translations.computerVisionSolutions ||
        "Computer Vision Solutions",

      desc:
        translations.computerVisionSolutionsDesc ||
        "AI-powered image and video analysis systems.",
    },

    {
      title:
        translations.recommendationEngines ||
        "Recommendation Engines",

      desc:
        translations.recommendationEnginesDesc ||
        "Personalized recommendation systems using AI.",
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

        <section className="relative py-28 px-6">

          <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-purple-500/20 blur-[140px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/20 blur-[140px] rounded-full"></div>

          <div className={`
            relative z-10
            max-w-7xl mx-auto
            grid lg:grid-cols-2
            gap-16 items-center
            ${
              isRTL
                ? "text-right"
                : "text-left"
            }
          `}>

            {/* LEFT */}

            <div>

              <div className={`
                inline-flex items-center gap-3
                px-6 py-3 rounded-full
                bg-purple-500/10
                border border-purple-500/20
                text-purple-500
                dark:text-purple-300
                mb-8
                ${
                  isRTL
                    ? "flex-row-reverse"
                    : ""
                }
              `}>

                <Brain size={20} />

                {translations.aiSolutions ||
                  "Artificial Intelligence Solutions"}

              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">

                AI

                <span className="
                  bg-gradient-to-r
                  from-purple-400
                  to-pink-500
                  text-transparent
                  bg-clip-text
                ">

                  {" "}
                  {translations.solutions ||
                    "Solutions"}

                </span>

              </h1>

              <p className="
                dark:text-gray-300
                text-gray-700
                text-lg md:text-xl
                leading-9
                max-w-2xl
              ">

                {translations.aiHeroDescription ||
                  "Transform your business using advanced AI technologies, machine learning systems, intelligent automation, predictive analytics, and next-generation AI platforms."}

              </p>

              <div className={`
                flex flex-wrap gap-5 mt-10
                ${
                  isRTL
                    ? "justify-end"
                    : ""
                }
              `}>

                <button
                  className={`
                    px-8 py-4 rounded-2xl
                    bg-gradient-to-r
                    from-purple-500
                    to-pink-500
                    font-bold text-white
                    hover:scale-105
                    transition-all duration-300
                    flex items-center gap-3
                    ${
                      isRTL
                        ? "flex-row-reverse"
                        : ""
                    }
                  `}
                >

                  {translations.exploreAI ||
                    "Explore AI"}

                  <ArrowRight size={18} />

                </button>

                <button
                  className="
                    px-8 py-4 rounded-2xl
                    border border-purple-400/30
                    dark:text-white
                    text-gray-900
                    hover:bg-purple-500/10
                    transition-all duration-300
                  "
                >

                  {translations.bookDemo ||
                    "Book Demo"}

                </button>

              </div>

            </div>

            {/* RIGHT */}

            <div>

              <div className="
                bg-[#111c38]
                border border-purple-500/20
                rounded-[40px]
                p-10
                shadow-2xl
              ">

                <div className="
                  grid grid-cols-2 gap-6
                ">

                  <FeatureCard
                    icon={<Bot size={35} />}
                    title={
                      translations.aiChatbots ||
                      "AI Chatbots"
                    }
                  />

                  <FeatureCard
                    icon={<Cpu size={35} />}
                    title={
                      translations.machineLearning ||
                      "Machine Learning"
                    }
                  />

                  <FeatureCard
                    icon={<Database size={35} />}
                    title={
                      translations.bigDataAI ||
                      "Big Data AI"
                    }
                  />

                  <FeatureCard
                    icon={<Workflow size={35} />}
                    title={
                      translations.automation ||
                      "Automation"
                    }
                  />

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* STATS */}

        <section className="px-6 pb-24">

          <div className="
            max-w-7xl mx-auto
            grid grid-cols-2 md:grid-cols-4
            gap-8
          ">

            <StatsCard
              number="150+"
              title={
                translations.aiProjects ||
                "AI Projects"
              }
            />

            <StatsCard
              number="98%"
              title={
                translations.clientSatisfaction ||
                "Client Satisfaction"
              }
            />

            <StatsCard
              number="24/7"
              title={
                translations.aiMonitoring ||
                "AI Monitoring"
              }
            />

            <StatsCard
              number="50+"
              title={
                translations.enterpriseClients ||
                "Enterprise Clients"
              }
            />

          </div>

        </section>

        {/* AI SERVICES */}

        <section className="px-6 pb-28">

          <div className="max-w-7xl mx-auto">

            <div className={`
              mb-20
              ${
                isRTL
                  ? "text-right"
                  : "text-center"
              }
            `}>

              <h2 className="
                text-5xl font-black mb-6
              ">

                {translations.aiServicesTitle ||
                  "AI Powered Services"}

              </h2>

            </div>

            <div className="
              grid grid-cols-1
              md:grid-cols-2
              lg:grid-cols-4
              gap-8
            ">

              {aiServices.map((service, index) => (

                <div
                  key={index}
                  className="
                    bg-[#111c38]
                    border border-purple-500/10
                    rounded-3xl
                    p-8
                    text-white
                    hover:-translate-y-2
                    transition-all duration-500
                  "
                >

                  <div className="
                    w-16 h-16 rounded-2xl
                    bg-gradient-to-r
                    from-purple-500
                    to-pink-500
                    flex items-center justify-center
                    mb-6
                  ">

                    <CheckCircle2 size={28} />

                  </div>

                  <h3 className="
                    text-2xl font-bold mb-4
                  ">

                    {service.title}

                  </h3>

                  <p className="
                    text-gray-300 leading-8
                  ">

                    {service.desc}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* WHY CHOOSE AI */}

        <section className="px-6 pb-28">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20">

              <h2 className="
                text-5xl font-black mb-6
              ">

                {translations.whyChooseAI ||
                  "Why Choose AI Solutions"}

              </h2>

            </div>

            <div className="
              grid grid-cols-1
              md:grid-cols-2
              lg:grid-cols-4
              gap-8
            ">

              <WhyCard
                icon={<Zap size={32} />}
                title="Fast Automation"
                desc="Automate repetitive workflows instantly."
              />

              <WhyCard
                icon={<Cloud size={32} />}
                title="Cloud AI"
                desc="Cloud-native scalable AI systems."
              />

              <WhyCard
                icon={<Lock size={32} />}
                title="Secure AI"
                desc="Enterprise-grade AI security systems."
              />

              <WhyCard
                icon={<LineChart size={32} />}
                title="Analytics"
                desc="Advanced predictive analytics systems."
              />

            </div>

          </div>

        </section>

        {/* DEVELOPMENT PROCESS */}

        <section className="px-6 pb-28">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20">

              <h2 className="
                text-5xl font-black mb-6
              ">

                {translations.aiDevelopmentProcess ||
                  "AI Development Process"}

              </h2>

            </div>

            <div className="
              grid grid-cols-1
              md:grid-cols-2
              lg:grid-cols-4
              gap-8
            ">

              <ProcessCard
                step="01"
                title="Research"
              />

              <ProcessCard
                step="02"
                title="Design"
              />

              <ProcessCard
                step="03"
                title="Development"
              />

              <ProcessCard
                step="04"
                title="Deployment"
              />

            </div>

          </div>

        </section>

        {/* TECHNOLOGIES */}

        <section className="px-6 pb-28">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20">

              <h2 className="
                text-5xl font-black mb-6
              ">

                {translations.aiTechnologies ||
                  "AI Technologies"}

              </h2>

            </div>

            <div className="
              grid grid-cols-2
              md:grid-cols-4
              gap-8
            ">

              <TechCard title="Python" />
              <TechCard title="TensorFlow" />
              <TechCard title="OpenAI" />
              <TechCard title="PyTorch" />
              <TechCard title="LangChain" />
              <TechCard title="AWS AI" />
              <TechCard title="Azure AI" />
              <TechCard title="Google AI" />

            </div>

          </div>

        </section>

        {/* BENEFITS */}

        <section className="px-6 pb-28">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20">

              <h2 className="
                text-5xl font-black mb-6
              ">

                {translations.aiBenefits ||
                  "Benefits of AI"}

              </h2>

            </div>

            <div className="
              grid grid-cols-1
              md:grid-cols-2
              gap-8
            ">

              <BenefitCard title="Cost Reduction" />
              <BenefitCard title="High Efficiency" />
              <BenefitCard title="Business Automation" />
              <BenefitCard title="Real-Time Insights" />

            </div>

          </div>

        </section>

        {/* SECURITY */}

        <section className="px-6 pb-28">

          <div className="max-w-7xl mx-auto">

            <div className="
              bg-[#111c38]
              rounded-[40px]
              p-12
              border border-purple-500/20
              text-center
              text-white
            ">

              <Lock
                size={60}
                className="
                  mx-auto mb-8 text-pink-400
                "
              />

              <h2 className="
                text-5xl font-black mb-6
              ">

                {translations.enterpriseAISecurity ||
                  "Enterprise AI Security"}

              </h2>

              <p className="
                text-gray-300
                text-lg
                leading-8
                max-w-4xl
                mx-auto
              ">

                {translations.enterpriseAISecurityDesc ||
                  "Advanced enterprise-grade AI protection and monitoring systems."}

              </p>

            </div>

          </div>

        </section>

      </div>

    </GlobalLayout>

  );

}

/* FEATURE CARD */

function FeatureCard({
  icon,
  title,
}) {

  return (

    <div className="
      bg-[#0f172a]
      text-white
      border border-white/10
      rounded-3xl
      p-8
      text-center
    ">

      <div className="
        w-20 h-20
        rounded-3xl
        bg-gradient-to-r
        from-purple-500
        to-pink-500
        flex items-center justify-center
        mx-auto mb-6
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

/* STATS CARD */

function StatsCard({
  number,
  title,
}) {

  return (

    <div className="
      bg-[#111c38]
      text-white
      rounded-3xl
      p-8
      border border-purple-500/10
      text-center
    ">

      <h2 className="
        text-5xl font-black mb-4
        bg-gradient-to-r
        from-purple-400
        to-pink-500
        text-transparent
        bg-clip-text
      ">

        {number}

      </h2>

      <p className="
        text-gray-300 text-lg
      ">

        {title}

      </p>

    </div>

  );

}

/* WHY CARD */

function WhyCard({
  icon,
  title,
  desc,
}) {

  return (

    <div className="
      bg-[#111c38]
      border border-purple-500/10
      rounded-3xl
      p-8
      text-white
    ">

      <div className="
        w-16 h-16
        rounded-2xl
        bg-gradient-to-r
        from-purple-500
        to-pink-500
        flex items-center justify-center
        mb-6
      ">

        {icon}

      </div>

      <h3 className="
        text-2xl font-bold mb-4
      ">

        {title}

      </h3>

      <p className="
        text-gray-300 leading-8
      ">

        {desc}

      </p>

    </div>

  );

}

/* PROCESS CARD */

function ProcessCard({
  step,
  title,
}) {

  return (

    <div className="
      bg-[#111c38]
      border border-purple-500/10
      rounded-3xl
      p-8
      text-center
      text-white
    ">

      <h2 className="
        text-6xl font-black mb-6
        bg-gradient-to-r
        from-purple-400
        to-pink-500
        text-transparent
        bg-clip-text
      ">

        {step}

      </h2>

      <h3 className="
        text-2xl font-bold
      ">

        {title}

      </h3>

    </div>

  );

}

/* TECH CARD */

function TechCard({
  title,
}) {

  return (

    <div className="
      bg-[#111c38]
      border border-purple-500/10
      rounded-3xl
      p-8
      text-center
      text-white
    ">

      <h3 className="
        text-2xl font-bold
      ">

        {title}

      </h3>

    </div>

  );

}

/* BENEFIT CARD */

function BenefitCard({
  title,
}) {

  return (

    <div className="
      bg-[#111c38]
      border border-purple-500/10
      rounded-3xl
      p-8
      text-white
      flex items-center gap-5
    ">

      <CheckCircle2
        size={28}
        className="text-pink-400"
      />

      <h3 className="
        text-2xl font-bold
      ">

        {title}

      </h3>

    </div>

  );

}