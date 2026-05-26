import React, {
  useState,
  useEffect,
} from "react";

import {
  Link,
} from "react-router-dom";

import GlobalLayout from "../../components/GlobalLayout";

import {
  useLanguage,
} from "../../context/LanguageContext";

import translationsData from "../../utils/translations";

import {
  Palette,
  MonitorSmartphone,
  Sparkles,
  CheckCircle2,
  LayoutDashboard,
  ArrowRight,
  PenTool,
  Eye,
  PlayCircle,
  Users,
  Star,
  Layers3,
  MousePointerClick,
  Smartphone,
  Globe,
  Rocket,
  Brush,
  Laptop,
  ShieldCheck,
} from "lucide-react";

export default function UIUXDesign() {

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

  const features = [

    "Modern UI Design",
    "Responsive Layouts",
    "User Experience Research",
    "Interactive Prototypes",
    "Design Systems",
    "Mobile First Design",
    "Dark Mode Interfaces",
    "Creative Animations",

  ];

  const services = [

    {
      title: "Responsive UI",
      desc: "Modern responsive enterprise interface systems.",
      icon: <MonitorSmartphone size={32} />,
    },

    {
      title: "Design Systems",
      desc: "Reusable scalable component systems.",
      icon: <LayoutDashboard size={32} />,
    },

    {
      title: "Creative Interfaces",
      desc: "Premium user experience and visual systems.",
      icon: <Sparkles size={32} />,
    },

    {
      title: "UX Research",
      desc: "Advanced user interaction and behavior analysis.",
      icon: <Eye size={32} />,
    },

  ];

  const testimonials = [

    {
      name: "Michael Johnson",
      role: "CEO, NexaTech",
      review:
        "Outstanding enterprise UI/UX systems with modern design language and excellent scalability.",
    },

    {
      name: "Sarah Williams",
      role: "Startup Founder",
      review:
        "Professional design systems and premium user experiences with creative animations.",
    },

    {
      name: "David Smith",
      role: "Product Manager",
      review:
        "Amazing UI architecture with responsive layouts and enterprise-grade accessibility.",
    },

  ];

  return (

    <GlobalLayout>

      <div
        dir={isRTL ? "rtl" : "ltr"}
        className="
          min-h-screen
          bg-white
          text-gray-900
          dark:bg-[#050b1a]
          dark:text-white
          overflow-hidden
          transition-all
          duration-500
        "
      >

        

        {/* SECTION 1 HERO */}

        <section className="relative py-28 px-6 overflow-hidden">

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/20 blur-[160px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[160px] rounded-full"></div>

          <div className="
            relative
            z-10
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
                px-5
                py-3
                rounded-full
                bg-pink-500/10
                border
                border-pink-500/20
                text-pink-500
                mb-8
              ">

                <Palette size={30} />

                Premium UI/UX Solutions

              </div>

              <h1 className="
                text-6xl
                md:text-7xl
                font-black
                leading-tight
                mb-8
              ">

                UI/UX

                <span className="
                  bg-gradient-to-r
                  from-pink-400
                  to-purple-500
                  text-transparent
                  bg-clip-text
                ">

                  {" "}
                  Design

                </span>

              </h1>

              <p className="
                dark:text-gray-300
                text-gray-700
                text-xl
                leading-10
                max-w-2xl
              ">

                We create modern user experiences with scalable interfaces and premium enterprise design systems.

              </p>

              <div className="
                flex
                flex-wrap
                gap-5
                mt-12
              ">

                <Link
                  to="/contact"
                  className="
                    px-10
                    py-5
                    rounded-2xl
                    bg-gradient-to-r
                    from-pink-500
                    to-purple-500
                    text-white
                    font-bold
                    hover:scale-105
                    transition-all
                    duration-300
                    inline-flex
                    items-center
                    gap-3
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
                  border-pink-500/20
                  hover:bg-pink-500/10
                  transition-all
                  duration-300
                  inline-flex
                  items-center
                  gap-3
                ">

                  <PlayCircle size={22} />

                  Explore Services

                </button>

              </div>

            </div>

            <div className="
              bg-white
              dark:bg-[#111c38]
              rounded-[40px]
              border
              border-pink-500/20
              p-10
            ">

              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop"
                alt="UI UX"
                className="
                  w-full
                  h-[500px]
                  object-cover
                  rounded-[32px]
                "
              />

            </div>

          </div>

        </section>

        {/* SECTION 2 SERVICES */}

        <section className="px-6 py-28">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20">

              <h2 className="
                text-6xl
                font-black
                mb-6
              ">

                UI/UX Services

              </h2>

            </div>

            <div className="
              grid
              md:grid-cols-2
              lg:grid-cols-4
              gap-8
            ">

              {services.map((service, index) => (

                <FeatureCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  desc={service.desc}
                />

              ))}

            </div>

          </div>

        </section>

        {/* SECTION 3 FEATURES */}

        <section className="
          px-6
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

              <h2 className="
                text-6xl
                font-black
                mb-8
              ">

                Premium Design Features

              </h2>

              <p className="
                text-xl
                leading-10
                text-gray-700
                dark:text-gray-400
                mb-10
              ">

                Enterprise-level user experience systems with scalable design architecture and premium interactions.

              </p>

              <div className="
                flex
                flex-col
                gap-5
              ">

                {features.slice(0, 4).map((item, index) => (

                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >

                    <CheckCircle2
                      size={24}
                      className="text-pink-400"
                    />

                    <span className="text-xl">

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

              {[
                {
                  icon: <Brush size={36} />,
                  title: "Creative UI",
                },

                {
                  icon: <Rocket size={36} />,
                  title: "Fast UX",
                },

                {
                  icon: <Laptop size={36} />,
                  title: "Responsive",
                },

                {
                  icon: <ShieldCheck size={36} />,
                  title: "Secure Systems",
                },

              ].map((item, index) => (

                <div
                  key={index}
                  className="
                    bg-white
                    dark:bg-[#111c38]
                    rounded-[32px]
                    border
                    border-pink-500/20
                    p-10
                    text-center
                  "
                >

                  <div className="
                    flex
                    justify-center
                    mb-6
                    text-pink-400
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

        {/* SECTION 4 */}

        <section className="px-6 py-28">

          <div className="
            max-w-7xl
            mx-auto
            grid
            md:grid-cols-2
            gap-10
          ">

            <img
              src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop"
              alt="Design"
              className="
                w-full
                h-[450px]
                object-cover
                rounded-[32px]
              "
            />

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              alt="UX"
              className="
                w-full
                h-[450px]
                object-cover
                rounded-[32px]
              "
            />

          </div>

        </section>

        {/* SECTION 5 */}

        <section className="
          px-6
          py-28
          bg-gray-100
          dark:bg-[#081225]
        ">

          <div className="
            max-w-7xl
            mx-auto
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
          ">

            {features.map((item, index) => (

              <div
                key={index}
                className="
                  bg-white
                  dark:bg-[#111c38]
                  rounded-[32px]
                  border
                  border-pink-500/20
                  p-8
                "
              >

                <CheckCircle2
                  size={30}
                  className="
                    text-pink-400
                    mb-5
                  "
                />

                <h3 className="
                  text-2xl
                  font-bold
                ">

                  {item}

                </h3>

              </div>

            ))}

          </div>

        </section>

        {/* SECTION 6 */}

        <section className="px-6 py-28">

          <div className="max-w-7xl mx-auto text-center">

            <h2 className="
              text-6xl
              font-black
              mb-20
            ">

              Our Process

            </h2>

            <div className="
              grid
              md:grid-cols-4
              gap-8
            ">

              {[
                "Research",
                "Wireframe",
                "Prototype",
                "Launch",
              ].map((step, index) => (

                <div
                  key={index}
                  className="
                    bg-white
                    dark:bg-[#111c38]
                    border
                    border-pink-500/20
                    rounded-[32px]
                    p-10
                  "
                >

                  <div className="
                    w-16
                    h-16
                    rounded-full
                    bg-gradient-to-r
                    from-pink-500
                    to-purple-500
                    flex
                    items-center
                    justify-center
                    text-white
                    text-2xl
                    font-bold
                    mx-auto
                    mb-6
                  ">

                    {index + 1}

                  </div>

                  <h3 className="
                    text-2xl
                    font-bold
                  ">

                    {step}

                  </h3>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* SECTION 7 */}

        <section className="
          px-6
          py-28
          bg-gray-100
          dark:bg-[#081225]
        ">

          <div className="max-w-7xl mx-auto">

            <div className="
              grid
              lg:grid-cols-3
              gap-8
            ">

              {testimonials.map((item, index) => (

                <div
                  key={index}
                  className="
                    bg-white
                    dark:bg-[#111c38]
                    rounded-[32px]
                    border
                    border-pink-500/20
                    p-10
                  "
                >

                  <div className="
                    flex
                    gap-2
                    mb-6
                  ">

                    {[1, 2, 3, 4, 5].map((star) => (

                      <Star
                        key={star}
                        size={20}
                        className="
                          text-yellow-400
                          fill-yellow-400
                        "
                      />

                    ))}

                  </div>

                  <p className="
                    text-lg
                    leading-8
                    text-gray-700
                    dark:text-gray-400
                    mb-8
                  ">

                    {item.review}

                  </p>

                  <h3 className="
                    text-2xl
                    font-bold
                  ">

                    {item.name}

                  </h3>

                  <p className="
                    text-pink-400
                    mt-2
                  ">

                    {item.role}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* SECTION 8 */}

        <section className="px-6 py-28">

          <div className="
            max-w-7xl
            mx-auto
            bg-gradient-to-r
            from-pink-500
            via-purple-500
            to-fuchsia-500
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

              Ready To Design Your Product?

            </h2>

            <p className="
              text-2xl
              leading-10
              max-w-4xl
              mx-auto
              mb-12
            ">

              Build premium user experiences with modern interfaces and scalable design systems.

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
                text-pink-600
                rounded-2xl
                text-xl
                font-black
                hover:scale-105
                transition-all
                duration-300
              "
            >

              Contact Design Team

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
  desc,
}) {

  return (

    <div className="
      bg-white
      dark:bg-[#0f172a]
      rounded-3xl
      p-8
      text-center
      border
      border-pink-500/20
      hover:border-pink-400/40
      hover:-translate-y-2
      transition-all
      duration-500
      shadow-xl
    ">

      <div className="
        w-20
        h-20
        mx-auto
        mb-6
        rounded-3xl
        bg-gradient-to-r
        from-pink-500
        to-purple-500
        flex
        items-center
        justify-center
        text-white
      ">

        {icon}

      </div>

      <h3 className="
        text-2xl
        font-bold
        mb-4
      ">

        {title}

      </h3>

      <p className="
        text-gray-600
        dark:text-gray-300
        leading-7
      ">

        {desc}

      </p>

    </div>

  );

}