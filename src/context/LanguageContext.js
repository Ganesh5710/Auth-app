import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const LanguageContext =
  createContext();

const translationsData = {

  // ENGLISH

  en: {

    dashboard:
      "Dashboard",

    users:
      "Users",

    analytics:
      "Analytics",

    logout:
      "Logout",

    searchUsers:
      "Search users...",

    welcomeAdmin:
      "Welcome back Admin",

    totalUsers:
      "Total Users",

    activeUsers:
      "Active Users",

    blockedUsers:
      "Blocked Users",

    growth:
      "Growth",

    userGrowth:
      "User Growth",

    userStatus:
      "User Status",

    notifications:
      "Notifications",

    noNotifications:
      "No Notifications",

    updates:
      "Updates",

    adminDashboard:
      "Admin Dashboard",

    total:
      "Total",

    active:
      "Active",

    blocked:
      "Blocked",

    welcomeBack:
      "Welcome Back",

    loginSubtitle:
      "Securely access your dashboard and continue your journey",

    forgotPassword:
      "Forgot Password?",

    login:
      "Login",

    register:
      "Register",

    dontHaveAccount:
      "Don't have an account?",

    admin:
      "Admin",

    user:
      "User",

    email:
      "Enter your email",

    password:
      "Enter your password",

    verified:
      "Verified User",

    accountStatus:
      "Account Status",

    registered:
      "Registered",

    lastLogin:
      "Last Login",

    security:
      "Security",

    protected:
      "Protected",

    profileDetails:
      "Profile Details",

    fullName:
      "Full Name",

    securityQuestion:
      "Security Question",

    lastLogout:
      "Last Logout",

    quickActions:
      "Quick Actions",

    editProfile:
      "Edit Profile",

    changePassword:
      "Change Password",

    activityLogs:
      "Activity Logs",

    viewedLogs:
      "Viewed activity logs",

    saveChanges:
      "Save Changes",

    updatePassword:
      "Update Password",

    newPassword:
      "New Password",

    profileUpdated:
      "Profile updated successfully",

    passwordUpdated:
      "Password updated successfully",

    loggedOut:
      "Logged out from account",

    accountBlocked:
      "Your account has been blocked by admin",

  },

  // HEBREW

  he: {

    dashboard:
      "לוח בקרה",

    users:
      "משתמשים",

    analytics:
      "אנליטיקה",

    logout:
      "התנתק",

    searchUsers:
      "חפש משתמשים...",

    welcomeAdmin:
      "ברוך שובך מנהל",

    totalUsers:
      "סה״כ משתמשים",

    activeUsers:
      "משתמשים פעילים",

    blockedUsers:
      "משתמשים חסומים",

    growth:
      "צמיחה",

    userGrowth:
      "צמיחת משתמשים",

    userStatus:
      "סטטוס משתמשים",

    notifications:
      "התראות",

    noNotifications:
      "אין התראות",

    updates:
      "עדכונים",

    adminDashboard:
      "לוח ניהול",

    total:
      "סה״כ",

    active:
      "פעיל",

    blocked:
      "חסום",

    welcomeBack:
      "ברוך שובך",

    loginSubtitle:
      "היכנס כדי להמשיך ללוח הבקרה שלך",

    forgotPassword:
      "שכחת סיסמה?",

    login:
      "התחברות",

    register:
      "הרשמה",

    dontHaveAccount:
      "אין לך חשבון?",

    admin:
      "מנהל",

    user:
      "משתמש",

    email:
      "הכנס אימייל",

    password:
      "הכנס סיסמה",

    verified:
      "משתמש מאומת",

    accountStatus:
      "סטטוס חשבון",

    registered:
      "נרשם בתאריך",

    lastLogin:
      "כניסה אחרונה",

    security:
      "אבטחה",

    protected:
      "מוגן",

    profileDetails:
      "פרטי פרופיל",

    fullName:
      "שם מלא",

    securityQuestion:
      "שאלת אבטחה",

    lastLogout:
      "התנתקות אחרונה",

    quickActions:
      "פעולות מהירות",

    editProfile:
      "ערוך פרופיל",

    changePassword:
      "שנה סיסמה",

    activityLogs:
      "יומן פעילות",

    viewedLogs:
      "נצפה ביומן הפעילות",

    saveChanges:
      "שמור שינויים",

    updatePassword:
      "עדכן סיסמה",

    newPassword:
      "סיסמה חדשה",

    profileUpdated:
      "הפרופיל עודכן בהצלחה",

    passwordUpdated:
      "הסיסמה עודכנה בהצלחה",

    loggedOut:
      "התנתקת מהחשבון",

    accountBlocked:
      "החשבון שלך נחסם על ידי המנהל",

  },

  // ARABIC

  ar: {

    dashboard:
      "لوحة التحكم",

    users:
      "المستخدمون",

    analytics:
      "التحليلات",

    logout:
      "تسجيل الخروج",

    searchUsers:
      "ابحث عن مستخدم...",

    welcomeAdmin:
      "مرحباً بك أيها المدير",

    totalUsers:
      "إجمالي المستخدمين",

    activeUsers:
      "المستخدمون النشطون",

    blockedUsers:
      "المستخدمون المحظورون",

    growth:
      "النمو",

    userGrowth:
      "نمو المستخدمين",

    userStatus:
      "حالة المستخدمين",

    notifications:
      "الإشعارات",

    noNotifications:
      "لا توجد إشعارات",

    updates:
      "التحديثات",

    adminDashboard:
      "لوحة الإدارة",

    total:
      "الإجمالي",

    active:
      "نشط",

    blocked:
      "محظور",

    welcomeBack:
      "مرحباً بعودتك",

    loginSubtitle:
      "قم بتسجيل الدخول للوصول إلى لوحة التحكم الخاصة بك",

    forgotPassword:
      "هل نسيت كلمة المرور؟",

    login:
      "تسجيل الدخول",

    register:
      "تسجيل",

    dontHaveAccount:
      "ليس لديك حساب؟",

    admin:
      "المشرف",

    user:
      "المستخدم",

    email:
      "أدخل بريدك الإلكتروني",

    password:
      "أدخل كلمة المرور",

    verified:
      "مستخدم موثق",

    accountStatus:
      "حالة الحساب",

    registered:
      "تاريخ التسجيل",

    lastLogin:
      "آخر تسجيل دخول",

    security:
      "الأمان",

    protected:
      "محمي",

    profileDetails:
      "تفاصيل الملف الشخصي",

    fullName:
      "الاسم الكامل",

    securityQuestion:
      "سؤال الأمان",

    lastLogout:
      "آخر تسجيل خروج",

    quickActions:
      "إجراءات سريعة",

    editProfile:
      "تعديل الملف الشخصي",

    changePassword:
      "تغيير كلمة المرور",

    activityLogs:
      "سجل النشاط",

    viewedLogs:
      "تم عرض سجل النشاط",

    saveChanges:
      "حفظ التغييرات",

    updatePassword:
      "تحديث كلمة المرور",

    newPassword:
      "كلمة المرور الجديدة",

    profileUpdated:
      "تم تحديث الملف الشخصي بنجاح",

    passwordUpdated:
      "تم تحديث كلمة المرور بنجاح",

    loggedOut:
      "تم تسجيل الخروج من الحساب",

    accountBlocked:
      "تم حظر حسابك بواسطة المسؤول",

  },

};

export const LanguageProvider = ({
  children,
}) => {

  const [language,
    setLanguage] =
    useState(
      localStorage.getItem(
        "language"
      ) || "en"
    );

  // SAVE LANGUAGE

  useEffect(() => {

    localStorage.setItem(
      "language",
      language
    );

  }, [language]);

  // RTL SUPPORT

  const isRTL =
    language === "ar" ||
    language === "he";

  // APPLY RTL TO WHOLE APP

  useEffect(() => {

    document.documentElement.lang =
      language;

    document.documentElement.dir =
      isRTL
        ? "rtl"
        : "ltr";

    document.body.dir =
      isRTL
        ? "rtl"
        : "ltr";

    document.body.style.direction =
      isRTL
        ? "rtl"
        : "ltr";

  }, [
    language,
    isRTL,
  ]);

  const translations =
    translationsData[
      language
    ] ||
    translationsData.en;

  return (

    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        translations,
        isRTL,
      }}
    >

      {children}

    </LanguageContext.Provider>

  );

};

export const useLanguage = () =>
  useContext(LanguageContext);