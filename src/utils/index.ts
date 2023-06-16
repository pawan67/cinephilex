export const getYearFromDate = (date: string) => {
  const d = new Date(date);
  return d.getFullYear();
};

export const getMonthDateYear = (date: string) => {
  const d = new Date(date);
  return d.toDateString().split(" ").slice(1).join(" ");
};
export const urlConstructor = (id: number = 0, name: string = "") => {
  return id + "-" + name.replace(/\s+/g, "-").toLowerCase();
};

export const getIdFromUrl = (url: string) => {
  return url.split("-")[0];
};

export const getAge = (date: string) => {
  const d = new Date(date);
  const today = new Date();

  const age = today.getFullYear() - d.getFullYear();
  const m = today.getMonth() - d.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < d.getDate())) {
    return age - 1;
  }
  return age;
};

export const randomizeResults = (movie: any, tv: any) => {
  const results = [...movie, ...tv];
  return results.sort(() => Math.random() - 0.5);
};

export const metaTagsGenerator = (
  title?: string,
  description?: string,
  image?: string,
  url?: string
) => {
  const metaObject = {
    title: title || "Cinephilex | Movie and TV Show Database",
    description:
      description ||
      "Cinephilex is a movie and tv show database. Find information about your favorite movies and tv shows.",

    openGraph: {
      type: "website",
      locale: "en_IE",
      url: url || "https://cinephilex.vercel.app/",
      title: title || "Cinephilex | Movie and TV Show Database",
      description:
        description ||
        "Cinephilex is a movie and tv show database. Find information about your favorite movies and tv shows.",
      image: image || "https://i.imgur.com/8Oz2bMh.png",
      site_name: "Cinephilex",
    },
  };

  return metaObject;
};
