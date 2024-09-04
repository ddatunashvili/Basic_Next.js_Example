import Head from 'next/head';

// Meta component to handle dynamic SEO meta tags
export const Meta = ({ title = "Web Development", keywords = "web, code, development", description = "A description of the web development page" }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
        </Head>
    );
};
