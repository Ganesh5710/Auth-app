import React, { useState } from "react";

import GlobalLayout from "../../components/GlobalLayout";

import {
  Globe,
  Code2,
  Database,
  Smartphone,
  CheckCircle2,
  LayoutDashboard,
  Cloud,
  Layers3,
  Workflow,
  Server,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function WebDevelopment() {

  const [openFAQ, setOpenFAQ] =
    useState(null);

  const services = [

    {
      title: "Frontend Development",
      desc: "Modern React.js and Next.js enterprise interfaces.",
      icon: <Code2 size={30} />,
    },

    {
      title: "Backend APIs",
      desc: "Scalable Node.js backend infrastructure systems.",
      icon: <Database size={30} />,
    },

    {
      title: "Responsive Websites",
      desc: "Mobile-first responsive web platforms.",
      icon: <Smartphone size={30} />,
    },

    {
      title: "Cloud Deployment",
      desc: "Secure cloud-native deployment systems.",
      icon: <Cloud size={30} />,
    },

    {
      title: "Admin Dashboards",
      desc: "Advanced analytics and admin panels.",
      icon: <LayoutDashboard size={30} />,
    },

    {
      title: "Enterprise Apps",
      desc: "Large-scale business web applications.",
      icon: <Server size={30} />,
    },

    {
      title: "UI/UX Interfaces",
      desc: "Modern user-focused interface systems.",
      icon: <Layers3 size={30} />,
    },

    {
      title: "Automation Systems",
      desc: "Business workflow automation solutions.",
      icon: <Workflow size={30} />,
    },

  ];

  const pricingPlans = [

    {
      name: "Starter",
      price: "$499",
      features: [
        "Responsive Website",
        "3 Pages",
        "Basic SEO",
        "1 Month Support",
      ],
    },

    {
      name: "Professional",
      price: "$1499",
      features: [
        "Full Stack Website",
        "Admin Dashboard",
        "API Integration",
        "3 Months Support",
      ],
    },

    {
      name: "Enterprise",
      price: "$4999",
      features: [
        "Enterprise Web Platform",
        "Cloud Infrastructure",
        "Advanced Security",
        "Premium Support",
      ],
    },

  ];

  const faqs = [

    {
      question: "How long does development take?",
      answer:
        "Most enterprise projects take between 4-12 weeks depending on complexity.",
    },

    {
      question: "Do you provide cloud deployment?",
      answer:
        "Yes. We provide AWS, Azure, and Google Cloud deployment solutions.",
    },

    {
      question: "Do you support responsive design?",
      answer:
        "Absolutely. All platforms are fully optimized for mobile and desktop.",
    },

    {
      question: "Do you provide maintenance?",
      answer:
        "Yes. We provide continuous support and maintenance plans.",
    },

  ];

  return (

    <GlobalLayout>

      <div className="min-h-screen text-gray-900 dark:text-white overflow-hidden">

        {/* HERO */}

        <section className="relative py-32 px-6 overflow-hidden">

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[160px] rounded-full"></div>

          <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-8">

                <Globe size={20} />

                Web Development Services

              </div>

              <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8">

                Modern

                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                  {" "}Enterprise Websites
                </span>

              </h1>

              <p className="dark:text-gray-300 text-gray-700 text-xl leading-10 max-w-2xl">

                Build scalable, secure, and enterprise-grade
                websites with modern frontend, backend,
                cloud, and automation technologies.

              </p>

              <div className="flex flex-wrap gap-5 mt-12">

                <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/20">

                  Start Project

                </button>

                <button className="px-10 py-5 rounded-2xl border border-cyan-500/20 hover:bg-cyan-500/10 transition-all duration-300">

                  View Portfolio

                </button>

              </div>

              {/* STATS */}

              <div className="grid grid-cols-3 gap-8 mt-16">

                <div>

                  <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">

                    250+

                  </h2>

                  <p className="dark:text-gray-400 text-gray-600 mt-2">

                    Projects

                  </p>

                </div>

                <div>

                  <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">

                    98%

                  </h2>

                  <p className="dark:text-gray-400 text-gray-600 mt-2">

                    Success

                  </p>

                </div>

                <div>

                  <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">

                    24/7

                  </h2>

                  <p className="dark:text-gray-400 text-gray-600 mt-2">

                    Support

                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="bg-[#111c38] rounded-[40px] border border-cyan-500/20 p-10">

              <div className="grid grid-cols-2 gap-6">

                {services.slice(0, 4).map((service, index) => (

                  <div
                    key={index}
                    className="bg-[#0f172a] rounded-3xl p-8 border border-white/10 text-white hover:border-cyan-400/40 transition-all duration-500"
                  >

                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-6">

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

        {/* SERVICES */}

        <section className="px-6 pb-28">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20">

              <h2 className="text-5xl font-black mb-6">

                Premium Development Services

              </h2>

              <p className="dark:text-gray-400 text-gray-600 text-lg max-w-3xl mx-auto leading-8">

                Enterprise-grade development services engineered
                for performance, scalability, automation, and security.

              </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {services.map((service, index) => (

                <div
                  key={index}
                  className="bg-[#111c38] text-white rounded-3xl p-8 border border-cyan-500/10 hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-500 shadow-xl"
                >

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-6">

                    {service.icon}

                  </div>

                  <h3 className="text-2xl font-bold mb-5">

                    {service.title}

                  </h3>

                  <p className="text-gray-300 leading-8">

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

                Development Process

              </h2>

            </div>

            <div className="grid md:grid-cols-4 gap-8">

              {[
                "Planning",
                "Design",
                "Development",
                "Deployment",
              ].map((step, index) => (

                <div
                  key={index}
                  className="bg-[#111c38] text-white rounded-3xl p-10 border border-cyan-500/10"
                >

                  <div className="text-5xl font-black text-cyan-400 mb-6">

                    0{index + 1}

                  </div>

                  <h3 className="text-3xl font-bold mb-5">

                    {step}

                  </h3>

                  <p className="text-gray-300 leading-8">

                    Enterprise-grade workflow for scalable development.

                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* PRICING */}

        <section className="px-6 pb-28">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20">

              <h2 className="text-5xl font-black mb-6">

                Pricing Plans

              </h2>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

              {pricingPlans.map((plan, index) => (

                <div
                  key={index}
                  className="bg-[#111c38] text-white rounded-3xl p-10 border border-cyan-500/10"
                >

                  <h3 className="text-3xl font-black mb-4">

                    {plan.name}

                  </h3>

                  <h2 className="text-6xl font-black mb-8 text-cyan-400">

                    {plan.price}

                  </h2>

                  <div className="space-y-5">

                    {plan.features.map((feature, i) => (

                      <div
                        key={i}
                        className="flex items-center gap-3"
                      >

                        <CheckCircle2
                          className="text-cyan-400"
                          size={22}
                        />

                        <span className="text-gray-300">

                          {feature}

                        </span>

                      </div>

                    ))}

                  </div>

                  <button className="w-full mt-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 font-bold">

                    Choose Plan

                  </button>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* FAQ */}

        <section className="px-6 pb-32">

          <div className="max-w-5xl mx-auto">

            <div className="text-center mb-20">

              <h2 className="text-5xl font-black mb-6">

                Frequently Asked Questions

              </h2>

            </div>

            <div className="space-y-6">

              {faqs.map((faq, index) => (

                <div
                  key={index}
                  className="bg-[#111c38] text-white rounded-3xl border border-cyan-500/10 overflow-hidden"
                >

                  <button
                    onClick={() =>
                      setOpenFAQ(
                        openFAQ === index
                          ? null
                          : index
                      )
                    }
                    className="w-full flex items-center justify-between p-8"
                  >

                    <span className="text-2xl font-bold">

                      {faq.question}

                    </span>

                    {openFAQ === index ? (
                      <ChevronUp />
                    ) : (
                      <ChevronDown />
                    )}

                  </button>

                  {openFAQ === index && (

                    <div className="px-8 pb-8 text-gray-300 leading-8 text-lg">

                      {faq.answer}

                    </div>

                  )}

                </div>

              ))}

            </div>

          </div>

        </section>

      </div>

    </GlobalLayout>

  );

}