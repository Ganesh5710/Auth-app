import React from "react";

import GlobalLayout from "../../components/GlobalLayout";

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

  const services = [
    "Threat Detection",
    "Cloud Security",
    "Network Protection",
    "Data Encryption",
    "Penetration Testing",
    "24/7 Monitoring",
    "Identity Protection",
    "Security Audits",
  ];

  const stats = [
    {
      number: "500+",
      title: "Protected Systems",
    },
    {
      number: "99.99%",
      title: "Threat Detection",
    },
    {
      number: "24/7",
      title: "Monitoring",
    },
    {
      number: "150+",
      title: "Enterprise Clients",
    },
  ];

  const features = [
    {
      icon: <Lock size={32} />,
      title: "Data Protection",
      desc: "Enterprise-grade encryption and infrastructure security.",
    },
    {
      icon: <Fingerprint size={32} />,
      title: "Identity Security",
      desc: "Advanced authentication and access management systems.",
    },
    {
      icon: <Bug size={32} />,
      title: "Threat Detection",
      desc: "AI-powered real-time cybersecurity threat monitoring.",
    },
    {
      icon: <Eye size={32} />,
      title: "24/7 Monitoring",
      desc: "Continuous enterprise security infrastructure monitoring.",
    },
  ];

  return (

    <GlobalLayout>

      <div className="min-h-screen text-gray-900 dark:text-white overflow-hidden">

        {/* HERO SECTION */}

        <section className="relative py-32 px-6 overflow-hidden">

          {/* BACKGROUND EFFECTS */}

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[160px] rounded-full"></div>

          <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT CONTENT */}

            <div>

              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 mb-8">

                <ShieldCheck size={20} />

                Enterprise Security Solutions

              </div>

              <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8">

                Advanced

                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                  {" "}Cyber Security
                </span>

              </h1>

              <p className="dark:text-gray-300 text-gray-700 text-xl leading-10 max-w-2xl">

                Protect enterprise infrastructure using advanced cybersecurity,
                AI-powered threat intelligence, cloud security, encryption,
                and real-time enterprise monitoring systems.

              </p>

              <div className="flex flex-wrap gap-5 mt-12">

                <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/20">

                  Secure Infrastructure

                </button>

                <button className="px-10 py-5 rounded-2xl border border-cyan-500/20 hover:bg-cyan-500/10 transition-all duration-300">

                  Explore Solutions

                </button>

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="bg-[#111c38] rounded-[40px] border border-cyan-500/20 p-10">

              <div className="grid grid-cols-2 gap-6">

                <FeatureBox
                  icon={<Cloud size={32} />}
                  title="Cloud Security"
                />

                <FeatureBox
                  icon={<Database size={32} />}
                  title="Data Protection"
                />

                <FeatureBox
                  icon={<Cpu size={32} />}
                  title="AI Intelligence"
                />

                <FeatureBox
                  icon={<Workflow size={32} />}
                  title="Automation"
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
                className="bg-[#111c38] text-white rounded-3xl p-10 border border-cyan-500/10 text-center"
              >

                <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-4">

                  {item.number}

                </h2>

                <p className="text-gray-300 text-lg">

                  {item.title}

                </p>

              </div>

            ))}

          </div>

        </section>

        {/* FEATURE CARDS */}

        <section className="px-6 pb-28">

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {features.map((feature, index) => (

              <SecurityCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                desc={feature.desc}
              />

            ))}

          </div>

        </section>

        {/* SERVICES */}

        <section className="px-6 pb-28">

          <div className="max-w-7xl mx-auto">

            <div className="bg-[#111c38] rounded-[40px] p-14 border border-cyan-500/20">

              <div className="text-center mb-16">

                <h2 className="text-5xl font-black mb-6 text-white">

                  Enterprise Security Services

                </h2>

                <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-8">

                  Enterprise-grade cybersecurity solutions engineered
                  for scalability, cloud infrastructure protection,
                  AI threat monitoring, and intelligent security systems.

                </p>

              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                {services.map((item, index) => (

                  <div
                    key={index}
                    className="bg-[#0f172a] rounded-3xl p-8 border border-white/10 hover:border-cyan-400/40 transition-all duration-500 hover:-translate-y-2"
                  >

                    <ServerCrash
                      className="text-cyan-400 mb-5"
                      size={35}
                    />

                    <h3 className="text-2xl font-bold text-white mb-4">

                      {item}

                    </h3>

                    <p className="text-gray-400 leading-7">

                      Enterprise-grade protection systems for modern
                      business infrastructure and cloud environments.

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* WHY CHOOSE US */}

        <section className="px-6 pb-28">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20">

              <h2 className="text-5xl font-black mb-6">

                Why Choose Enkonix Security

              </h2>

              <p className="dark:text-gray-400 text-gray-600 text-lg max-w-3xl mx-auto leading-8">

                Enterprise cybersecurity engineered for advanced
                infrastructure protection and intelligent monitoring.

              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-10">

              <div className="bg-[#111c38] rounded-3xl p-10 border border-cyan-500/10 text-white">

                <CheckCircle2
                  className="text-cyan-400 mb-6"
                  size={35}
                />

                <h3 className="text-3xl font-bold mb-5">

                  Enterprise Infrastructure

                </h3>

                <p className="text-gray-300 leading-8 text-lg">

                  Enterprise-grade security architecture designed
                  for scalability, cloud infrastructure protection,
                  and intelligent threat monitoring.

                </p>

              </div>

              <div className="bg-[#111c38] rounded-3xl p-10 border border-cyan-500/10 text-white">

                <BarChart3
                  className="text-cyan-400 mb-6"
                  size={35}
                />

                <h3 className="text-3xl font-bold mb-5">

                  AI Threat Intelligence

                </h3>

                <p className="text-gray-300 leading-8 text-lg">

                  AI-powered enterprise monitoring systems
                  capable of detecting and analyzing threats
                  in real time.

                </p>

              </div>

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="px-6 pb-32">

          <div className="max-w-7xl mx-auto rounded-[40px] p-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-center relative overflow-hidden">

            <div className="absolute inset-0 bg-cyan-500/5 blur-3xl"></div>

            <div className="relative z-10">

              <h2 className="text-5xl font-black mb-8">

                Secure Your Business Today

              </h2>

              <p className="dark:text-gray-300 text-gray-700 text-xl leading-9 max-w-3xl mx-auto mb-12">

                Protect enterprise systems using advanced cybersecurity,
                AI threat monitoring, cloud infrastructure protection,
                and enterprise-grade security intelligence.

              </p>

              <button className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/20">

                Get Started

                <ArrowRight size={22} />

              </button>

            </div>

          </div>

        </section>

      </div>

    </GlobalLayout>

  );

}

function SecurityCard({
  icon,
  title,
  desc,
}) {

  return (

    <div className="bg-[#111c38] rounded-3xl p-10 border border-cyan-500/10 text-center hover:border-cyan-400/40 transition-all duration-500 hover:-translate-y-2 text-white">

      <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto flex items-center justify-center mb-6">

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

function FeatureBox({
  icon,
  title,
}) {

  return (

    <div className="bg-[#0f172a] rounded-3xl p-8 border border-white/10 text-center text-white hover:border-cyan-400/40 transition-all duration-500">

      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-5">

        {icon}

      </div>

      <h3 className="text-xl font-bold">

        {title}

      </h3>

    </div>

  );

}