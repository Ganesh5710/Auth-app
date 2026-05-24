import React, { useState } from "react";

import GlobalLayout from "../../components/GlobalLayout";

import {
  Cloud,
  Server,
 ShieldCheck,
  Database,
  Workflow,
  Globe, 
  BarChart3,
  Zap,
} from "lucide-react";

export default function CloudServices() {



  const cloudServices = [

    {
      title: "AWS Infrastructure",
      desc: "Enterprise AWS cloud architecture and deployment systems.",
      icon: <Cloud size={30} />,
    },

    {
      title: "Azure Solutions",
      desc: "Microsoft Azure enterprise cloud integration services.",
      icon: <Server size={30} />,
    },

    {
      title: "Google Cloud",
      desc: "Scalable Google Cloud enterprise infrastructure systems.",
      icon: <Database size={30} />,
    },

    {
      title: "Cloud Security",
      desc: "Enterprise-grade infrastructure protection and monitoring.",
      icon: <ShieldCheck size={30} />,
    },

    {
      title: "DevOps Automation",
      desc: "CI/CD pipelines and automated deployment workflows.",
      icon: <Workflow size={30} />,
    },

    {
      title: "Cloud Analytics",
      desc: "Advanced monitoring and infrastructure analytics systems.",
      icon: <BarChart3 size={30} />,
    },

    {
      title: "Enterprise Hosting",
      desc: "Scalable enterprise hosting and server management.",
      icon: <Globe size={30} />,
    },

    {
      title: "Performance Optimization",
      desc: "Cloud optimization and enterprise performance engineering.",
      icon: <Zap size={30} />,
    },

  ];

  const pricingPlans = [

    {
      name: "Starter Cloud",
      price: "$799",
      features: [
        "Basic Cloud Setup",
        "Deployment",
        "SSL Security",
        "Monitoring",
      ],
    },

    {
      name: "Business Cloud",
      price: "$2499",
      features: [
        "Enterprise Hosting",
        "Cloud Analytics",
        "Automation",
        "3 Months Support",
      ],
    },

    {
      name: "Enterprise Cloud",
      price: "$6999",
      features: [
        "Global Infrastructure",
        "Advanced Security",
        "Premium Monitoring",
        "24/7 Support",
      ],
    },

  ];

  const faqs = [

    {
      question: "Which cloud platforms do you support?",
      answer:
        "We support AWS, Microsoft Azure, Google Cloud, and hybrid cloud infrastructures.",
    },

    {
      question: "Do you provide cloud migration?",
      answer:
        "Yes. We migrate enterprise systems securely to scalable cloud environments.",
    },

    {
      question: "Do you provide cloud monitoring?",
      answer:
        "Yes. We provide enterprise-level infrastructure monitoring and analytics.",
    },

    {
      question: "Can cloud systems scale globally?",
      answer:
        "Absolutely. Our cloud systems are designed for global scalability and performance.",
    },

  ];

  return (

    <GlobalLayout>

      <div className="min-h-screen text-gray-900 dark:text-white overflow-hidden">

        {/* HERO */}

        <section className="relative py-32 px-6 overflow-hidden">

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[160px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full"></div>

          <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8">

                <Cloud size={20} />

                Enterprise Cloud Infrastructure

              </div>

              <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8">

                Scalable

                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">
                  {" "}Cloud Systems
                </span>

              </h1>

              <p className="dark:text-gray-300 text-gray-700 text-xl leading-10 max-w-2xl">

                Build secure, scalable, and enterprise-grade cloud
                infrastructure powered by AWS, Azure, Google Cloud,
                automation systems, and enterprise monitoring solutions.

              </p>

              <div className="flex flex-wrap gap-5 mt-12">

                <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/20">

                  Deploy Infrastructure

                </button>

                <button className="px-10 py-5 rounded-2xl border border-blue-500/20 hover:bg-blue-500/10 transition-all duration-300">

                  Explore Cloud Services

                </button>

              </div>

              {/* STATS */}

              <div className="grid grid-cols-3 gap-8 mt-16">

                <div>

                  <h2 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">

                    300+

                  </h2>

                  <p className="dark:text-gray-400 text-gray-600 mt-2">

                    Deployments

                  </p>

                </div>

                <div>

                  <h2 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">

                    99.9%

                  </h2>

                  <p className="dark:text-gray-400 text-gray-600 mt-2">

                    Uptime

                  </p>

                </div>

                <div>

                  <h2 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">

                    24/7

                  </h2>

                  <p className="dark:text-gray-400 text-gray-600 mt-2">

                    Monitoring

                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="bg-[#111c38] rounded-[40px] border border-blue-500/20 p-10">

              <div className="grid grid-cols-2 gap-6">

                {cloudServices.slice(0, 4).map((service, index) => (

                  <div
                    key={index}
                    className="bg-[#0f172a] rounded-3xl p-8 border border-white/10 text-white hover:border-blue-400/40 transition-all duration-500"
                  >

                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6">

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