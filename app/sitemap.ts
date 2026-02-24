import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.antworkconsultants.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.antworkconsultants.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.antworkconsultants.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://www.antworkconsultants.com/industries",
      lastModified: new Date(),
    },
    {
      url: "https://www.antworkconsultants.com/investor-zone",
      lastModified: new Date(),
    },
    {
      url: "https://www.antworkconsultants.com/contact",
      lastModified: new Date(),
    },
  ];
}

