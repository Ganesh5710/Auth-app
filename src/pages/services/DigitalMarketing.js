import React, { useState } from "react";

import GlobalLayout from "../../components/GlobalLayout";

import {
  TrendingUp,
  Target,
  BarChart3,
  Globe,
  
  Workflow,
  
  LineChart,
  Search,
  Megaphone,
} from "lucide-react";

export default function DigitalMarketing() {


  const marketingServices = [

    {
      title: "SEO Optimization",
      desc: "Improve search rankings and organic visibility.",
      icon: <Search size={30} />,
    },

    {
      title: "Social Media Marketing",
      desc: "Advanced social media growth strategies.",
      icon: <Megaphone size={30} />,
    },

    {
      title: "Performance Analytics",
      desc: "Enterprise analytics and marketing intelligence.",
      icon: <BarChart3 size={30} />,
    },

    {
      title: "Lead Generation",
      desc: "AI-powered lead acquisition systems.",
      icon: <Target size={30} />,
    },

    {
      title: "Growth Campaigns",
      desc: "Data-driven marketing growth strategies.",
      icon: <TrendingUp size={30} />,
    },

    {
      title: "Automation Systems",
      desc: "Marketing automation and CRM workflows.",
      icon: <Workflow size={30} />,
    },

    {
      title: "Global Branding",
      desc: "Worldwide enterprise branding solutions.",
      icon: <Globe size={30} />,
    },

    {
      title: "Market Intelligence",
      desc: "Business intelligence and audience analytics.",
      icon: <LineChart size={30} />,
    },

  ];

  const pricingPlans = [

    {
      name: "Starter Marketing",
      price: "$699",
      features: [
        "SEO Optimization",
        "Social Media Setup",
        "Analytics Dashboard",
        "1 Month Support",
      ],
    },

    {
      name: "Business Marketing",
      price: "$2499",
      features: [
        "Growth Campaigns",
        "Lead Generation",
        "Automation",
        "3 Months Support",
      ],
    },

    {
      name: "Enterprise Marketing",
      price: "$7999",
      features: [
        "Global Branding",
        "Advanced Analytics",
        "AI Marketing Systems",
        "Premium Support",
      ],
    },

  ];

  const faqs = [

    {
      question: "Do you provide SEO services?",
      answer:
        "Yes. We provide enterprise SEO optimization and search visibility solutions.",
    },

    {
      question: "Can you manage social media campaigns?",
      answer:
        "Absolutely. We manage enterprise-level social media and advertising campaigns.",
    },

    {
      question: "Do you provide analytics dashboards?",
      answer:
        "Yes. We provide marketing analytics and performance intelligence dashboards.",
    },

    {
      question: "Can marketing campaigns scale globally?",
      answer:
        "Yes. Our campaigns are designed for global reach and enterprise scalability.",
    },

  ];

  return (

    <GlobalLayout>

      <div className="min-h-screen text-gray-900 dark:text-white overflow-hidden">

        {/* HERO */}

        <section className="relative py-32 px-6 overflow-hidden">

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/20 blur-[160px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full"></div>

          <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 mb-8">

                <TrendingUp size={20} />

                Digital Marketing Solutions

              </div>

              <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8">

                Business

                <span className="bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text">
                  {" "}Growth Systems
                </span>

              </h1>

              <p className="dark:text-gray-300 text-gray-700 text-xl leading-10 max-w-2xl">

                Scale your business using enterprise digital marketing,
                SEO optimization, lead generation, analytics,
                automation, and intelligent marketing systems.

              </p>

              <div className="flex flex-wrap gap-5 mt-12">

                <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold hover:scale-105 transition-all duration-300 shadow-2xl shadow-green-500/20">

                  Launch Campaign

                </button>

                <button className="px-10 py-5 rounded-2xl border border-green-500/20 hover:bg-green-500/10 transition-all duration-300">

                  Explore Marketing

                </button>

              </div>

              {/* STATS */}

              <div className="grid grid-cols-3 gap-8 mt-16">

                <div>

                  <h2 className="text-5xl font-black bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text">

                    500+

                  </h2>

                  <p className="dark:text-gray-400 text-gray-600 mt-2">

                    Campaigns

                  </p>

                </div>

                <div>

                  <h2 className="text-5xl font-black bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text">

                    300%

                  </h2>

                  <p className="dark:text-gray-400 text-gray-600 mt-2">

                    ROI Growth

                  </p>

                </div>

                <div>

                  <h2 className="text-5xl font-black bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text">

                    24/7

                  </h2>

                  <p className="dark:text-gray-400 text-gray-600 mt-2">

                    Monitoring

                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="bg-[#111c38] rounded-[40px] border border-green-500/20 p-10">

              <div className="grid grid-cols-2 gap-6">

                {marketingServices.slice(0, 4).map((service, index) => (

                  <div
                    key={index}
                    className="bg-[#0f172a] rounded-3xl p-8 border border-white/10 text-white hover:border-green-400/40 transition-all duration-500"
                  >

                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center mb-6">

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

      </div>

    </GlobalLayout>

  );

}