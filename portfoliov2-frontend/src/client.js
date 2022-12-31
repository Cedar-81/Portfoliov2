import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
    projectId: process.env.REACT_APP_PORTFOLIO_BACKEND_PROJECT_ID,
    dataset: "production",
    apiVersion: "2022-11-30",
    useCdn: true,
    token: process.env.REACT_APP_PORTFOLIO_BACKEND_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)