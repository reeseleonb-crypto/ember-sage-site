import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sachetbags.com/",
      lastModified: new Date(),
    },
  ];
}
