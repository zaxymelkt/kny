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
          light: "#1E2127", // Darker background for light mode to mimic night
          lightgray: "#3B4048", // Slightly lighter gray for comments
          gray: "#5D647B", // A cool gray tone
          darkgray: "#7F8C98", // Lighter shade for contrast
          dark: "#ABB2BF", // A soft blue-gray for darker elements
          secondary: "#61AFEF", // Brighter blue for secondary highlights
          tertiary: "#E6C07B", // Warm yellow for tertiary highlights, avoiding green
          highlight: "rgba(97, 175, 239, 0.15)", // Blue-based highlight to match secondary
        },
        darkMode: {
          light: "#1E2127", // Consistent with light mode for background
          lightgray: "#3B4048", // Consistent comment color
          gray: "#5D647B", // Consistent gray tone
          darkgray: "#7F8C98", // Consistent lighter shade
          dark: "#ABB2BF", // Consistent soft blue-gray
          secondary: "#61AFEF", // Consistent brighter blue
          tertiary: "#E6C07B", // Consistent warm yellow
          highlight: "rgba(97, 175, 239, 0.15)", // Consistent blue-based highlight
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
