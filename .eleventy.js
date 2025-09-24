module.exports = async function (eleventyConfig) {
    const { HtmlBasePlugin } = await import("@11ty/eleventy");

    const isPages = process.env.BUILD_TARGET === "pages";
    const pathPrefix = isPages ? "/acm-tamusa/" : "/";

    eleventyConfig.addPlugin(HtmlBasePlugin);
    eleventyConfig.addPassthroughCopy('./src/img');
    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/js');
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    return { pathPrefix, dir: { input: "src", output: "_site" } };
};
