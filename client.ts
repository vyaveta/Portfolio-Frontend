import  SanityClient  from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";



export const client = SanityClient({
    projectId: process.env.NEXT_APP__SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.NEXT_APP__SANITY_TOKEN
})

const builder = ImageUrlBuilder(client)

export const urlFor  = (source : any) : string | any => builder.image(source)