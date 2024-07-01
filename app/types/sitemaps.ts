export type Sitemap = {
  url: string;
  lastModified: Date | string;
  changeFrequency:
    | "yearly"
    | "weekly"
    | "always"
    | "hourly"
    | "daily"
    | "monthly"
    | "never";
  priority: number;
};
