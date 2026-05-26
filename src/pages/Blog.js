import React from "react";
import { Link } from "react-router-dom";

import GlobalLayout from "../components/GlobalLayout";

import {
  useLanguage,
} from "../context/LanguageContext";

import translationsData from "../utils/translations";

import {
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
  CheckCircle2,
  Bot,
  Database,
  Rocket,
  Layers3,
  Star,
  PlayCircle,
  Cpu,
} from "lucide-react";

export default function Blog() {

  const {
    language,
    isRTL,
  } = useLanguage();

  const translations =
    translationsData[language];

  const featuredPost = {

    title:
      "How AI Agents Are Transforming Enterprise Operations",

    category:
      "Artificial Intelligence",

    author:
      "Admin",

    date:
      "May 22, 2026",

    readTime:
      "12 min read",

    views:
      "48.5K",

    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop",

    desc:
      "AI agents are replacing traditional workflows with autonomous systems capable of automation, analytics, customer support and enterprise intelligence.",

  };

  const posts = [

    {
      title:
        "Future Of Cloud Infrastructure In Enterprise Platforms",

      category:
        "Cloud Computing",

      author:
        "Michael Brown",

      date:
        "May 20, 2026",

      readTime:
        "8 min read",

      views:
        "12K",

      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",

      icon:
        <Cloud size={28} className="text-cyan-400" />,

      desc:
        "Modern cloud infrastructure helps enterprises achieve scalability and secure deployments.",

    },

    {
      title:
        "Cyber Security Trends Every Company Should Prepare For",

      category:
        "Cyber Security",

      author:
        "Sophia Carter",

      date:
        "May 18, 2026",

      readTime:
        "10 min read",

      views:
        "18K",

      image:
        "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200&auto=format&fit=crop",

      icon:
        <ShieldCheck size={28} className="text-cyan-400" />,

      desc:
        "Cyber threats continue evolving rapidly with AI attacks and cloud vulnerabilities.",

    },

    {
      title:
        "Why Flutter Is Dominating Cross Platform Development",

      category:
        "Mobile Development",

      author:
        "David Wilson",

      date:
        "May 16, 2026",

      readTime:
        "7 min read",

      views:
        "9.8K",

      image:
        "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop",

      icon:
        <Smartphone size={28} className="text-cyan-400" />,

      desc:
        "Flutter provides scalable architecture and enterprise-grade performance for mobile apps.",

    },

     {
      title:
        " A style that breaks standard UI rules to stand out.",

      category:
        "UI/UX Design",

      author:
        "Don  Lee",

      date:
        "May 22, 2026",

      readTime:
        "10 min read",

      views:
        "14K",

      image:
        "https://cdn.dribbble.com/userupload/45001160/file/98a165fd75923f93d3473d2277b75b4a.png?resize=752x&vertical=center",

      icon:
        <Globe size={28} className="text-cyan-400" />,

      desc:
        "Modern enterprise interfaces focus on accessibility, AI interactions and immersive experiences.",

    },

    {
      title:
        "Top Enterprise UI/UX Trends In 2026",

      category:
        "UI/UX Design",

      author:
        "Jessica Lee",

      date:
        "May 12, 2026",

      readTime:
        "6 min read",

      views:
        "14K",

      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",

      icon:
        <Globe size={28} className="text-cyan-400" />,

      desc:
        "Modern enterprise interfaces focus on accessibility, AI interactions and immersive experiences.",

    },

    {
      title:
        "Big Data Analytics For Modern Businesses",

      category:
        "Analytics",

      author:
        "Chris Martin",

      date:
        "May 10, 2026",

      readTime:
        "11 min read",

      views:
        "16K",

      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",

      icon:
        <BarChart3 size={28} className="text-cyan-400" />,

      desc:
        "Big data analytics helps enterprises improve decision-making using AI-driven insights.",

    },

  ];

  return (

    <GlobalLayout>

      <div
        dir={isRTL ? "rtl" : "ltr"}
        className="
          min-h-screen
          overflow-hidden
          bg-white
          text-black
          dark:bg-[#050b1a]
          dark:text-white
          transition-all
          duration-500
        "
      >

        {/* HERO */}

        <section className="
          relative
          pt-40
          pb-28
          px-6
          lg:px-20
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
            bg-blue-500/20
            blur-[180px]
            rounded-full
          "></div>

          <div className="
            relative
            z-10
            max-w-7xl
            mx-auto
            text-center
          ">

            <div className="
              inline-flex
              items-center
              gap-3
              px-6
              py-3
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-500/20
              text-cyan-400
              mb-8
            ">

              <Sparkles size={20} />

              AI Integrated Enterprise Blog

            </div>

            <h1 className="
              text-7xl
              lg:text-8xl
              font-black
              leading-tight
              mb-8
            ">

              Future Of

              <span className="
                block
                bg-gradient-to-r
                from-cyan-400
                via-blue-400
                to-purple-500
                text-transparent
                bg-clip-text
                pb-10
              ">

                Enterprise Technology

              </span>

            </h1>

            <p className="
              max-w-4xl
              mx-auto
              text-2xl
              text-gray-700
              dark:text-gray-300
              leading-10
              mb-12
            ">

              Explore enterprise AI, cloud systems, cybersecurity, automation, analytics, modern web technologies and digital transformation strategies.

            </p>

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
              bg-white
              dark:bg-[#111c38]
              border
              border-cyan-500/20
            ">

              <div className="relative">

                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

              </div>

              <div className="
                p-14
                flex
                flex-col
                justify-center
              ">

                <div className="
                  inline-flex
                  items-center
                  gap-3
                  px-5
                  py-2
                  rounded-full
                  bg-cyan-500/10
                  border
                  border-cyan-500/20
                  text-cyan-300
                  mb-8
                  w-fit
                ">

                  Featured Article

                </div>

                <h2 className="
                  text-5xl
                  font-black
                  leading-tight
                  mb-8
                ">

                  {featuredPost.title}

                </h2>

                <p className="
                  text-gray-600
                  dark:text-gray-300
                  text-xl
                  leading-10
                  mb-10
                ">

                  {featuredPost.desc}

                </p>

                <div className="
                  flex
                  flex-wrap
                  gap-8
                  text-gray-500
                  dark:text-gray-400
                  mb-10
                ">

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
                  to-blue-600
                  text-white
                  font-bold
                  hover:scale-105
                  transition-all
                  duration-300
                  w-fit
                ">

                  Read Full Article

                  <ArrowRight size={20} />

                </button>

              </div>

            </div>

          </div>

        </section>

        {/* TRENDING ARTICLES */}

        <section className="px-6 lg:px-20 pb-28">

          <div className="max-w-7xl mx-auto">

            <div className="mb-16">

              <h2 className="
                text-6xl
                font-black
                mb-4
              ">

                Trending Articles

              </h2>

              <p className="
                text-gray-600
                dark:text-gray-400
                text-lg
              ">

                Most viewed enterprise insights this week.

              </p>

            </div>

            <div className="
              grid
              lg:grid-cols-3
              gap-8
            ">

              {posts.map((post, index) => (

                <article
                  key={index}
                  className="
                    overflow-hidden
                    rounded-[32px]
                    bg-white
                    dark:bg-[#111c38]
                    border
                    border-cyan-500/20
                    hover:border-cyan-400/40
                    hover:-translate-y-3
                    hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
                    transition-all
                    duration-500
                    group
                  "
                >

                  <div className="relative overflow-hidden">

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

                  </div>

                  <div className="p-10">

                    <div className="
                      flex
                      items-center
                      justify-between
                      mb-6
                    ">

                      {post.icon}

                      <div className="
                        flex
                        items-center
                        gap-2
                        text-cyan-400
                      ">

                        <TrendingUp size={18} />

                        Trending

                      </div>

                    </div>

                    <h3 className="
                      text-3xl
                      font-black
                      leading-tight
                      mb-6
                      group-hover:text-cyan-400
                      transition-all
                    ">

                      {post.title}

                    </h3>

                    <p className="
                      text-gray-600
                      dark:text-gray-400
                      text-lg
                      leading-8
                      mb-8
                    ">

                      {post.desc}

                    </p>

                    <div className="
                      flex
                      flex-wrap
                      gap-5
                      text-gray-500
                      dark:text-gray-400
                      text-sm
                      mb-8
                    ">

                      <div className="
                        flex
                        items-center
                        gap-2
                      ">

                        <User size={16} />

                        {post.author}

                      </div>

                      <div className="
                        flex
                        items-center
                        gap-2
                      ">

                        <Calendar size={16} />

                        {post.date}

                      </div>

                      <div className="
                        flex
                        items-center
                        gap-2
                      ">

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
                    ">

                      Read More

                      <ArrowRight size={18} />

                    </button>

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