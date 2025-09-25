module.exports = async function (eleventyConfig) {
    const { HtmlBasePlugin } = await import("@11ty/eleventy");

    eleventyConfig.addPlugin(HtmlBasePlugin);

    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/js");

    // SHORTCODES
    eleventyConfig.addNunjucksShortcode("year", () => `${new Date().getFullYear()}`);

    return {
        pathPrefix: process.env.NODE_ENV === "production" ? "/acm-tamusa/" : "/",
        dir: { input: "src", output: "_site", includes: "_includes" }
    };
};
