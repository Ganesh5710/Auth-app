import React from "react";

import {
  useLanguage,
} from "../context/LanguageContext";

function LanguageSwitcher() {

  const {
    language,
    setLanguage,
  } = useLanguage();

  return (

    <div>

      <select
        value={language}
        onChange={(e) =>
          setLanguage(
            e.target.value
          )
        }
        className="
          bg-[#111827]
          border
          border-white/10
          text-white
          px-5
          py-3
          rounded-2xl
          outline-none
          font-semibold
          cursor-pointer
        "
      >

        <option value="en">
          English
        </option>

        <option value="ar">
          عربي
        </option>

        <option value="he">
           עברית
        </option>

      </select>

    </div>

  );

}

export default LanguageSwitcher;