import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "KNY : First Blood",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "zaxymelkt.github.io/kny/",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#1E2127", // Slightly lighter background for better contrast
          lightgray: "#3B4048", // Softer comment color
          gray: "#5B626D", // Darker cyan for reduced brightness
          darkgray: "#3FB950", // Softer green
          dark: "#BF616A", // Softer pink
          secondary: "#4FC1EA", // Softer blue
          tertiary: "#EBCB8B", // Softer yellow
          highlight: "rgba(59, 65, 73, 0.15)", // Keeping the original highlight color
        },
        darkMode: {
          light: "#1E2127", // Slightly lighter background for better contrast
          lightgray: "#3B4048", // Softer comment color
          gray: "#5B626D", // Darker cyan for reduced brightness
          darkgray: "#3FB950", // Softer green
          dark: "#BF616A", // Softer pink
          secondary: "#4FC1EA", // Softer blue
          tertiary: "#EBCB8B", // Softer yellow
          highlight: "rgba(59, 65, 73, 0.15)", // Keeping the original highlight color
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
