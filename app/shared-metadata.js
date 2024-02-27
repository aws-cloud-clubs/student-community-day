import { prefix } from "@/constants";

export const openGraphImage = {
  images: [`${prefix}/images/og-image.png`],
};

export const metadataTitle = "ACC Student Community Day 2024";
export const metadataDescription = "2024.04.06 CENTER FIELD EAST 13:00 ~ 19:00";

export const defaultMetadata = {
  title: metadataTitle,
  description: metadataDescription,
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    ...openGraphImage,
  },
};
