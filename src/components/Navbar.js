import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import {
  ChevronDown,
  LogOut,
  Globe,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

import translationsData from "../utils/translations";

export default function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();

  const {
    language,
    setLanguage,
    isRTL,
  } = useLanguage();

  const {
    theme,
    toggleTheme,
  } = useTheme();

  const translations =
    translationsData[language];

  const [servicesOpen, setServicesOpen] =
    useState(false);

  const [homeOpen, setHomeOpen] =
    useState(false);

  const [languageOpen, setLanguageOpen] =
    useState(false);

  const [mobileMenu, setMobileMenu] =
    useState(false);

  // ADMIN SESSION

  const isAdmin =
    localStorage.getItem("isAdmin") ===
    "true";

  useEffect(() => {

    if (
      location.pathname === "/admin"
    ) {

      localStorage.setItem(
        "isAdmin",
        "true"
      );

    }

  }, [location.pathname]);

  // NAVIGATION

  const goPage = (path) => {

    navigate(path);

    setServicesOpen(false);
    setHomeOpen(false);
    setLanguageOpen(false);
    setMobileMenu(false);

  };

  // LOGOUT

  const handleLogout = () => {

    localStorage.removeItem("isAdmin");
    localStorage.removeItem("user");

    navigate("/login");

  };

  // BACK BUTTON

  const showBackButton =
    isAdmin &&
    location.pathname !== "/admin";

  // LANGUAGE LABELS

  const languageLabels = {

    en: "English",
    ar: "العربية",
    he: "עברית",

  };

  // SERVICES

  const services = [

    {
      title:
        translations.webDevelopment,
      path:
        "/services/web-development",
    },

    {
      title:
        translations.aiSolutions,
      path:
        "/services/ai-solutions",
    },

    {
      title:
        translations.cloudServices,
      path:
        "/services/cloud-services",
    },

    {
      title:
        translations.appDevelopment,
      path:
        "/services/app-development",
    },

    {
      title:
        translations.digitalMarketing,
      path:
        "/services/digital-marketing",
    },

    {
      title:
        translations.uiuxDesign,
      path:
        "/services/uiux-design",
    },

    {
      title:
        translations.cyberSecurity,
      path:
        "/services/cyber-security",
    },

  ];

  return (

    <nav
      dir={isRTL ? "rtl" : "ltr"}
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-white/90
        dark:bg-[#040b1d]/95
        backdrop-blur-2xl
        border-b
        border-cyan-500/10
        transition-all
        duration-500
      "
    >

      <div className="
        max-w-[1800px]
        mx-auto
        h-[100px]
        px-8
        flex
        items-center
        justify-between
      ">

        {/* LEFT */}

        <div className="flex items-center gap-16">

          {/* LOGO */}

          <Link
            to={isAdmin ? "/admin" : "/"}
            className="
              flex
              items-center
              gap-4
              shrink-0
            "
          >

            <div className="
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-br
              from-cyan-500/20
              to-blue-500/20
              border
              border-cyan-400/20
              flex
              items-center
              justify-center
            ">

              <span className="
                text-cyan-400
                text-3xl
                font-black
              ">

                E

              </span>

            </div>

            <h1 className="
              text-[42px]
              font-black
              tracking-tight
              bg-gradient-to-r
              from-cyan-400
              via-sky-400
              to-blue-500
              bg-clip-text
              text-transparent
            ">

              ENKONIX

            </h1>

          </Link>

          {/* DESKTOP MENU */}

          <div className="
            hidden
            xl:flex
            items-center
            gap-4
          ">

            {/* HOME */}

            <div className="relative">

              <button
                onClick={() =>
                  setHomeOpen(!homeOpen)
                }
                className="
                  flex
                  items-center
                  gap-2
                  text-[18px]
                  font-semibold
                  text-gray-700
                  dark:text-gray-200
                  hover:text-cyan-400
                "
              >

                {translations.home}

                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    homeOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>

              {homeOpen && (

                <div className="
                  absolute
                  top-14
                  left-0
                  w-[220px]
                  bg-white
                  dark:bg-[#0d1529]
                  border
                  border-cyan-500/20
                  rounded-3xl
                  p-5
                  shadow-2xl
                  z-50
                ">

                  <div className="space-y-3">

                    <button
                      onClick={() =>
                        goPage("/home1")
                      }
                      className="
                        w-full
                        text-left
                        px-4
                        py-3
                        rounded-2xl
                        text-gray-700
                        dark:text-gray-200
                        hover:bg-cyan-500/10
                        hover:text-cyan-400
                      "
                    >

                      {translations.home} 1

                    </button>

                    <button
                      onClick={() =>
                        goPage("/home2")
                      }
                      className="
                        w-full
                        text-left
                        px-4
                        py-3
                        rounded-2xl
                        text-gray-700
                        dark:text-gray-200
                        hover:bg-cyan-500/10
                        hover:text-cyan-400
                      "
                    >

                      {translations.home} 2

                    </button>

                  </div>

                </div>

              )}

            </div>

            {/* ABOUT */}

            <button
              onClick={() =>
                goPage("/about")
              }
              className="
                text-[18px]
                font-semibold
                text-gray-700
                dark:text-gray-200
                hover:text-cyan-400
              "
            >

              {translations.about}

            </button>

            {/* SERVICES */}

            <div className="relative">

              <button
                onClick={() =>
                  setServicesOpen(!servicesOpen)
                }
                className="
                  flex
                  items-center
                  gap-2
                  text-[18px]
                  font-semibold
                  text-gray-700
                  dark:text-gray-200
                  hover:text-cyan-400
                "
              >

                {translations.services}

                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    servicesOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>

              {servicesOpen && (

                <div className="
                  absolute
                  top-14
                  left-0
                  w-[320px]
                  bg-white
                  dark:bg-[#0d1529]
                  border
                  border-cyan-500/20
                  rounded-3xl
                  p-5
                  shadow-2xl
                  z-50
                ">

                  <div className="space-y-2">

                    {services.map(
                      (service, index) => (

                        <button
                          key={index}
                          onClick={() => {

                            navigate(service.path);

                            setServicesOpen(false);

                          }}
                          className="
                            w-full
                            text-left
                            px-4
                            py-3
                            rounded-2xl
                            text-gray-700
                            dark:text-gray-200
                            hover:bg-cyan-500/10
                            hover:text-cyan-400
                            transition-all
                            duration-300
                          "
                        >

                          {service.title}

                        </button>

                      )
                    )}

                  </div>

                </div>

              )}

            </div>

            {/* BLOG */}

            <button
              onClick={() =>
                goPage("/blog")
              }
              className="
                text-[18px]
                font-semibold
                text-gray-700
                dark:text-gray-200
                hover:text-cyan-400
              "
            >

              {translations.blog}

            </button>

            {/* CONTACT */}

            <button
              onClick={() =>
                goPage("/contact")
              }
              className="
                text-[18px]
                font-semibold
                text-gray-700
                dark:text-gray-200
                hover:text-cyan-400
              "
            >

              {translations.contact}

            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="
          hidden
          xl:flex
          items-center
          gap-4
          transition-all
        ">

          {/* THEME */}

          <button
            onClick={toggleTheme}
            className="
              w-14
              h-14
              rounded-2xl
              bg-gray-100
              dark:bg-[#0d1529]
              border
              border-cyan-500/20
              transition-all
              flex
              items-center
              justify-center
              text-cyan-400
            "
          >

            {theme === "dark"
              ? <Sun size={22} />
              : <Moon size={22} />
            }

          </button>

          {/* LANGUAGE */}

          <div className="relative">

            <button
              onClick={() =>
                setLanguageOpen(!languageOpen)
              }
              className="
                flex
                items-center
                gap-2
                text-[18px]
                font-semibold
                text-gray-700
                dark:text-gray-200
                hover:text-cyan-400
              "
            >

              <Globe size={18} />

              {languageLabels[language]}

              <ChevronDown size={18} />

            </button>

            {languageOpen && (

              <div className="
                absolute
                right-0
                top-14
                w-[220px]
                bg-white
                dark:bg-[#0d1529]
                border
                border-cyan-500/20
                rounded-3xl
                p-4
                shadow-2xl
                z-50
              ">

                <div className="space-y-2">

                  {Object.entries(languageLabels).map(
                    ([key, label]) => (

                      <button
                        key={key}
                        onClick={() => {

                          setLanguage(key);
                          setLanguageOpen(false);

                        }}
                        className={`
                          w-full
                          text-left
                          px-4
                          py-3
                          rounded-2xl
                          transition-all
                          ${
                            language === key
                              ? "bg-cyan-500/20 text-cyan-400"
                              : "text-gray-700 dark:text-gray-200 hover:bg-cyan-500/10 hover:text-cyan-400"
                          }
                        `}
                      >

                        {label}

                      </button>

                    )
                  )}

                </div>

              </div>

            )}

          </div>

          {/* BACK */}

          {showBackButton && (

            <button
              onClick={() =>
                navigate("/admin")
              }
              className="
                h-[58px]
                px-7
                rounded-2xl
                bg-cyan-500/10
                border
                border-cyan-500/20
                text-cyan-400
                font-bold
              "
            >

              {translations.dashboard}

            </button>

          )}

          {/* LOGOUT */}

          <button
            onClick={handleLogout}
            className="
              h-[58px]
              px-8
              rounded-2xl
              bg-gradient-to-r
              from-pink-500
              to-red-500
              text-white
              font-bold
              flex
              items-center
              gap-3
              hover:scale-105
              transition-all
            "
          >

            <LogOut size={19} />

            {translations.logout}

          </button>

        </div>

        {/* MOBILE */}

        <button
          onClick={() =>
            setMobileMenu(!mobileMenu)
          }
          className="
            xl:hidden
            text-cyan-400
          "
        >

          {mobileMenu
            ? <X size={32} />
            : <Menu size={32} />
          }

        </button>

      </div>

    </nav>

  );

}