const nextMonth = new Date(
  new Date().getFullYear(),
  new Date().getMonth() + 1,
  1
);
const nextMonthName = nextMonth.toLocaleDateString("en-GB", { month: "long" });

export const SITE = {
  // websiteUrl: "https://escuela.dev/",
  author: "Gianfranco Palumbo",
  desc: `A Coding school in Malaga, Spain - Enroll to the next batch in ${nextMonthName} ${new Date().getFullYear()} - Escuela de Programación y Desarrollo Web`,
  seoTitle: "Escuela.dev - Coding school",
  title: "Escuela.dev",
  ogImage: "escuela.dev-coding-school.png",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};
