import React from "react";
import { Link } from "react-router-dom";

import GlobalLayout from "../components/GlobalLayout";

import {
  Search,
  ArrowRight,
  Calendar,
  Clock3,
  Eye,
  TrendingUp,
  Brain,
  Cloud,
  ShieldCheck,
  Smartphone,
  Globe,
  BarChart3,
  User,
  Sparkles,
} from "lucide-react";

export default function Blog() {

  const featuredPost = {

    title:
      "How AI Agents Are Replacing Traditional Business Automation Systems",

    category: "Artificial Intelligence",

    author: "Admin",

    date: "May 22, 2026",

    readTime: "12 min read",

    views: "48.5K",

    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop",

    desc:
      "AI agents are transforming enterprise operations by automating workflows, customer support, analytics, and intelligent decision-making systems.",

  };

  const posts = [

    {
      title:
        "Future Of Cloud Infrastructure In Enterprise Platforms",

      category: "Cloud Computing",

      author: "Michael Brown",

      date: "May 20, 2026",

      readTime: "8 min read",

      views: "12K",

      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",

      icon: <Cloud size={28} className="text-cyan-400" />,

      desc:
        "Modern cloud infrastructure helps enterprises achieve scalability, security, automation, and global deployment systems.",

    },

    {
      title:
        "Cyber Security Trends Every Company Should Prepare For",

      category: "Cyber Security",

      author: "Sophia Carter",

      date: "May 18, 2026",

      readTime: "10 min read",

      views: "18K",

      image:
        "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200&auto=format&fit=crop",

      icon: <ShieldCheck size={28} className="text-cyan-400" />,

      desc:
        "Cyber threats continue evolving rapidly with ransomware, AI attacks, cloud vulnerabilities, and enterprise security breaches.",

    },

    {
      title:
        "Why Flutter Is Dominating Cross Platform App Development",

      category: "Mobile Development",

      author: "David Wilson",

      date: "May 16, 2026",

      readTime: "7 min read",

      views: "9.8K",

      image:
        "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop",

      icon: <Smartphone size={28} className="text-cyan-400" />,

      desc:
        "Flutter provides smooth UI rendering, scalable architecture, and enterprise-grade performance for mobile applications.",

    },

    {
      title:
        "Modern Web Technologies Reshaping Enterprise Platforms",

      category: "Web Development",

      author: "Emma Thomas",

      date: "May 12, 2026",

      readTime: "9 min read",

      views: "15K",

      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",

      icon: <Globe size={28} className="text-cyan-400" />,

      desc:
        "React.js, AI integrations, serverless systems, and cloud-native architectures are shaping next-generation web platforms.",

    },

    {
      title:
        "Business Intelligence & Data Analytics For Modern Enterprises",

      category: "Analytics",

      author: "James Walker",

      date: "May 10, 2026",

      readTime: "11 min read",

      views: "20K",

      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",

      icon: <BarChart3 size={28} className="text-cyan-400" />,

      desc:
        "Data analytics platforms help enterprises improve decision-making, operational efficiency, and customer insights.",

    },

    {
      title:
        "The Rise Of AI Powered Automation Systems",

      category: "Artificial Intelligence",

      author: "Daniel Smith",

      date: "May 08, 2026",

      readTime: "6 min read",

      views: "26K",

      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",

      icon: <Brain size={28} className="text-cyan-400" />,

      desc:
        "AI automation systems are replacing repetitive enterprise tasks with intelligent workflows and predictive systems.",

    },

  ];

  return (

    <GlobalLayout>

      <div className="min-h-screen text-gray-900 dark:text-white overflow-hidden">

        {/* HERO */}

        <section className="relative pt-40 pb-20 px-6 lg:px-20 overflow-hidden">

          {/* GLOW */}

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[180px] rounded-full"></div>

          <div className="relative z-10 max-w-7xl mx-auto">

            <div className="text-center mb-16">

              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 mb-8">

                <Sparkles size={18} />

                Enterprise Technology Insights

              </div>

              <h1 className="text-6xl lg:text-8xl font-black leading-tight mb-8">

                Modern

                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">

                  Technology Blog

                </span>

              </h1>

              <p className="max-w-4xl mx-auto dark:text-gray-300 text-gray-700 text-2xl leading-relaxed">

                Real enterprise articles covering Artificial Intelligence,
                Cloud Infrastructure, Cyber Security,
                Web Development, Mobile Apps, and Digital Transformation.

              </p>

            </div>

            {/* SEARCH */}

            <div className="max-w-3xl mx-auto">

              <div className="
                flex
                items-center
                gap-4
                bg-[#111c38]
                border
                border-cyan-500/20
                rounded-3xl
                px-6
                py-5
                shadow-2xl
              ">

                <Search
                  size={24}
                  className="text-cyan-400"
                />

                <input
                  type="text"
                  placeholder="Search articles, technologies, AI..."
                  className="
                    w-full
                    bg-transparent
                    outline-none
                    text-white
                    placeholder:text-gray-400
                    text-lg
                  "
                />

              </div>

            </div>

          </div>

        </section>

        {/* FEATURED */}

        <section className="px-6 lg:px-20 pb-28">

          <div className="max-w-7xl mx-auto">

            <div className="
              grid
              lg:grid-cols-2
              overflow-hidden
              rounded-[40px]
              bg-[#111c38]
              border
              border-cyan-500/20
              shadow-2xl
            ">

              {/* IMAGE */}

              <div className="overflow-hidden">

                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    hover:scale-105
                    transition-all
                    duration-700
                  "
                />

              </div>

              {/* CONTENT */}

              <div className="p-14 text-white flex flex-col justify-center">

                <div className="inline-flex items-center w-fit px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 mb-8">

                  Featured Article

                </div>

                <h2 className="text-5xl font-black leading-tight mb-8">

                  {featuredPost.title}

                </h2>

                <p className="text-gray-300 text-xl leading-10 mb-10">

                  {featuredPost.desc}

                </p>

                {/* META */}

                <div className="flex flex-wrap gap-8 text-gray-400 mb-12">

                  <div className="flex items-center gap-2">

                    <User size={18} />

                    {featuredPost.author}

                  </div>

                  <div className="flex items-center gap-2">

                    <Calendar size={18} />

                    {featuredPost.date}

                  </div>

                  <div className="flex items-center gap-2">

                    <Clock3 size={18} />

                    {featuredPost.readTime}

                  </div>

                  <div className="flex items-center gap-2">

                    <Eye size={18} />

                    {featuredPost.views}

                  </div>

                </div>

                <button className="
                  inline-flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500
                  text-white
                  font-bold
                  hover:scale-105
                  transition-all
                  duration-300
                  w-fit
                ">

                  Read Full Article

                  <ArrowRight size={22} />

                </button>

              </div>

            </div>

          </div>

        </section>

        {/* ARTICLES */}

        <section className="px-6 lg:px-20 pb-32">

          <div className="max-w-7xl mx-auto">

            <div className="flex items-center justify-between mb-16">

              <div>

                <h2 className="text-5xl font-black mb-4">

                  Latest Articles

                </h2>

                <p className="dark:text-gray-400 text-gray-600 text-lg">

                  Real enterprise technology insights & trends.

                </p>

              </div>

              <button className="
                hidden
                lg:flex
                items-center
                gap-3
                px-6
                py-3
                rounded-2xl
                border
                border-cyan-500/20
                hover:bg-cyan-500/10
                transition-all
              ">

                View All

                <ArrowRight size={18} />

              </button>

            </div>

            <div className="grid lg:grid-cols-3 gap-10">

              {posts.map((post, index) => (

                <article
                  key={index}
                  className="
                    overflow-hidden
                    rounded-[32px]
                    bg-[#111c38]
                    border
                    border-cyan-500/10
                    hover:border-cyan-400/40
                    hover:-translate-y-2
                    transition-all
                    duration-500
                    shadow-xl
                    text-white
                    group
                  "
                >

                  {/* IMAGE */}

                  <div className="overflow-hidden relative">

                    <img
                      src={post.image}
                      alt={post.title}
                      className="
                        w-full
                        h-[260px]
                        object-cover
                        group-hover:scale-110
                        transition-all
                        duration-700
                      "
                    />

                    <div className="
                      absolute
                      top-5
                      left-5
                      px-4
                      py-2
                      rounded-full
                      bg-black/40
                      backdrop-blur-lg
                      text-sm
                      border
                      border-white/10
                    ">

                      {post.category}

                    </div>

                  </div>

                  {/* CONTENT */}

                  <div className="p-10">

                    <div className="flex items-center justify-between mb-6">

                      <div>

                        {post.icon}

                      </div>

                      <div className="flex items-center gap-2 text-gray-400 text-sm">

                        <TrendingUp size={16} />

                        Trending

                      </div>

                    </div>

                    <h3 className="text-3xl font-black leading-tight mb-6 group-hover:text-cyan-400 transition-all duration-300">

                      {post.title}

                    </h3>

                    <p className="text-gray-400 leading-8 text-lg mb-8">

                      {post.desc}

                    </p>

                    {/* META */}

                    <div className="border-t border-white/10 pt-6">

                      <div className="flex flex-wrap gap-5 text-gray-400 text-sm mb-8">

                        <div className="flex items-center gap-2">

                          <User size={16} />

                          {post.author}

                        </div>

                        <div className="flex items-center gap-2">

                          <Calendar size={16} />

                          {post.date}

                        </div>

                        <div className="flex items-center gap-2">

                          <Eye size={16} />

                          {post.views}

                        </div>

                      </div>

                      <button className="
                        inline-flex
                        items-center
                        gap-3
                        text-cyan-400
                        font-semibold
                        hover:gap-5
                        transition-all
                        duration-300
                      ">

                        Read More

                        <ArrowRight size={20} />

                      </button>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

      </div>

    </GlobalLayout>

  );

}