import React from "react";

import {
  useLanguage,
} from "../context/LanguageContext";

import translationsData from "../utils/translations";

export default function Footer() {

  const {
    language,
    isRTL,
  } = useLanguage();

  const translations =
    translationsData[language];

  return (

    <footer
      dir={isRTL ? "rtl" : "ltr"}
      className="
        bg-[#050b1a]
        border-t
        border-cyan-500/20
        text-white
        pt-16
        pb-8
        mt-0
      "
    >

      <div className="
        max-w-7xl
        mx-auto
        px-6
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-12
      ">

        {/* BRAND */}

        <div className={`
          ${
            isRTL
              ? "text-right"
              : "text-left"
          }
        `}>

          <h1 className="
            text-4xl
            font-black
            text-cyan-400
            mb-5
          ">

            ENKONIX

          </h1>

          <p className="
            text-gray-400
            leading-8
            text-lg
          ">

            {translations.footerDescription ||
              "AI-powered digital transformation platform helping businesses scale globally with modern web, cloud, and AI solutions."}

          </p>

        </div>

        {/* QUICK LINKS */}

        <div className={`
          ${
            isRTL
              ? "text-right"
              : "text-left"
          }
        `}>

          <h2 className="
            text-2xl
            font-bold
            mb-6
          ">

            {translations.quickLinks ||
              "Quick Links"}

          </h2>

          <div className="
            flex
            flex-col
            gap-4
            text-gray-400
          ">

            <a
              href="/"
              className="hover:text-cyan-400 transition-all"
            >
              {translations.home ||
                "Home"}
            </a>

            <a
              href="/about"
              className="hover:text-cyan-400 transition-all"
            >
              {translations.about ||
                "About"}
            </a>

            <a
              href="/blog"
              className="hover:text-cyan-400 transition-all"
            >
              {translations.blog ||
                "Blog"}
            </a>

            <a
              href="/contact"
              className="hover:text-cyan-400 transition-all"
            >
              {translations.contact ||
                "Contact"}
            </a>

            <a
              href="/services"
              className="hover:text-cyan-400 transition-all"
            >
              {translations.services ||
                "Services"}
            </a>

          </div>

        </div>

        {/* SERVICES */}

        <div className={`
          ${
            isRTL
              ? "text-right"
              : "text-left"
          }
        `}>

          <h2 className="
            text-2xl
            font-bold
            mb-6
          ">

            {translations.services ||
              "Services"}

          </h2>

          <div className="
            flex
            flex-col
            gap-4
            text-gray-400
          ">

            <a
              href="/services/web-development"
              className="hover:text-cyan-400 transition-all"
            >
              {translations.webDevelopment ||
                "Web Development"}
            </a>

            <a
              href="/services/ai-solutions"
              className="hover:text-cyan-400 transition-all"
            >
              {translations.aiSolutions ||
                "AI Solutions"}
            </a>

            <a
              href="/services/cloud-services"
              className="hover:text-cyan-400 transition-all"
            >
              {translations.cloudServices ||
                "Cloud Services"}
            </a>

            <a
              href="/services/app-development"
              className="hover:text-cyan-400 transition-all"
            >
              {translations.appDevelopment ||
                "App Development"}
            </a>

            <a
              href="/services/digital-marketing"
              className="hover:text-cyan-400 transition-all"
            >
              {translations.digitalMarketing ||
                "Digital Marketing"}
            </a>

            <a
              href="/services/uiux-design"
              className="hover:text-cyan-400 transition-all"
            >
              {translations.uiuxDesign ||
                "UI/UX Design"}
            </a>

            <a
              href="/services/cyber-security"
              className="hover:text-cyan-400 transition-all"
            >
              {translations.cyberSecurity ||
                "Cyber Security"}
            </a>

          </div>

        </div>

        {/* CONTACT */}

        <div className={`
          ${
            isRTL
              ? "text-right"
              : "text-left"
          }
        `}>

          <h2 className="
            text-2xl
            font-bold
            mb-6
          ">

            {translations.contact ||
              "Contact"}

          </h2>

          <div className="
            flex
            flex-col
            gap-5
            text-gray-400
            leading-8
          ">

            <p>

  {translations.companyAddress}

</p>

<p>

  {translations.supportEmail}

</p>

<p>

  {translations.supportPhone}

</p>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="
        border-t
        border-gray-800
        mt-14
        pt-6
        text-center
        text-gray-500
        px-4
      ">

        © 2026 Enkonix.{" "}

        {translations.allRightsReserved ||
          "All rights reserved."}

      </div>

    </footer>

  );

}