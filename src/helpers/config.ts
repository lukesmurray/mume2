import {flags} from '@oclif/command'
import {MarkdownEngineConfig} from '@shd101wyy/mume'
import {defaultMarkdownEngineConfig} from '@shd101wyy/mume/out/src/markdown-engine-config'

// based on https://sourcegraph.com/github.com/shd101wyy/mume/-/blob/src/markdown-engine-config.ts#L32:14
// and https://github.com/shd101wyy/mume README
// TODO: mathInlineDelimiters and mathBlockDelimiters
export const defaultFlags = {
  // these are my own flags
  help: flags.help({char: 'h'}),
  outDir: flags.string({
    char: 'o',
    required: false,
    description: 'output directory to store files in'
  }),
  // these are mume flags
  usePandocParser: flags.boolean(
    {
      default: false,
      description: 'Enable this option will render markdown by pandoc instead of markdown-it',
    }
  ),
  breakOnSingleNewLine: flags.boolean(
    {
      default: true,
      description: 'In Markdown, a single newline character doesn\'t cause a line break in the generated HTML. In GitHub Flavored Markdown, that is not true. Enable this config option to insert line breaks in rendered HTML for single newlines in Markdown source.'
    }
  ),
  enableTypographer: flags.boolean(
    {
      default: false,
      description: 'Enable smartypants and other sweet transforms.'
    }
  ),
  enableWikiLinkSyntax: flags.boolean(
    {
      default: true,
      description: 'Enable Wiki Link syntax support. More information can be found a  https://help.github.com/articles/adding-links-to-wikis/'
    }
  ),
  enableLinkify: flags.boolean(
    {
      default: true,
      description: 'Enable conversion of URL-like text to links in the markdown preview.'
    }
  ),
  enableEmojiSyntax: flags.boolean(
    {
      default: true,
      description: 'Enable emoji & font-awesome plugin. This only works for markdown-it parser, but not pandoc parser.'
    }
  ),
  enableExtendedTableSyntax: flags.boolean(
    {
      default: false,
      description: 'Enable extended table syntax to support merging table cells.'
    }
  ),
  enableCriticMarkupSyntax: flags.boolean(
    {
      default: false,
      description: 'Enable CriticMarkup syntax. Only works with markdown-it parser. Please check http://criticmarkup.com/users-guide.php for more information.'
    }
  ),
  wikiLinkFileExtension: flags.string(
    {
      default: '.md',
      description: 'By default, the extension for wikilink is `.md`. For example: [[test]] will direct to file path `test.md`.'
    }
  ),
  protocolsWhiteList: flags.string(
    {
      // tslint:disable-next-line:no-http-string
      default: 'http://, https://, atom://, file://, mailto:, tel:',
      description: 'Accepted protocols for links'
    }
  ),
  mathRenderingOption: flags.enum(
    {
      default: 'KaTeX',
      description: 'mathematical library used for type setting',
      options: ['KaTeX', 'MathJax', 'None']
    }
  ),
  codeBlockTheme: flags.enum(
    {
      default: 'auto.css',
      description: 'If `auto.css` is chosen, then the code block theme that best matches the current preview theme will be picked.',
      options: [
        'auto.css',
        'default.css',
        'atom-dark.css',
        'atom-light.css',
        'atom-material.css',
        'coy.css',
        'darcula.css',
        'dark.css',
        'funky.css',
        'github.css',
        'hopscotch.css',
        'monokai.css',
        'okaidia.css',
        'one-dark.css',
        'one-light.css',
        'pen-paper-coffee.css',
        'pojoaque.css',
        'solarized-dark.css',
        'solarized-light.css',
        'twilight.css',
        'vue.css',
        'vs.css',
        'xonokai.css'
      ]
    }
  ),
  previewTheme: flags.enum(
    {
      default: 'github-light.css',
      description: 'css theme to use to render the preview',
      options: [
        'atom-dark.css',
        'atom-light.css',
        'atom-material.css',
        'github-dark.css',
        'github-light.css',
        'gothic.css',
        'medium.css',
        'monokai.css',
        'newsprint.css',
        'night.css',
        'none.css',
        'one-dark.css',
        'one-light.css',
        'solarized-dark.css',
        'solarized-light.css',
        'vue.css'
      ]
    }
  ),
  revealjsTheme: flags.enum(
    {
      default: 'white.css',
      description: 'revealjs theme to use',
      options: [
        'beige.css',
        'black.css',
        'blood.css',
        'league.css',
        'moon.css',
        'night.css',
        'serif.css',
        'simple.css',
        'sky.css',
        'solarized.css',
        'white.css',
        'none.css'
      ]
    }
  ),
  mermaidTheme: flags.enum(
    {
      default: 'mermaid.css',
      description: 'mermaid theme to use',
      options: [
        'mermaid.css', 'mermaid.dark.css', 'mermaid.forest.css'
      ]
    }
  ),
  frontMatterRenderingOption: flags.enum(
    {
      default: 'none',
      description: 'means to render yaml front matter',
      options: [
        'none', 'table', 'code block'
      ]
    }
  ),
  imageFolderPath: flags.string(
    {
      default: '/assets',
      description: 'When using Image Helper to copy images, by default images will be copied to root image folder path `/assets`'
    }
  ),
  printBackground: flags.boolean(
    {
      default: false,
      description: 'Whether to print background for file export or not. If set to `false`, then `github-light` preview theme will b  used. You can also set `print_background` in front-matter for individual files.'
    }
  ),
  phantomPath: flags.string(
    {
      default: 'phantomjs',
      description: 'phantomjs executable path'
    }
  ),
  pandocPath: flags.string(
    {
      default: 'pandoc',
      description: 'pandoc executable path'
    }
  ),
  pandocMarkdownFlavor: flags.string(
    {
      default: 'markdown-raw_tex+tex_math_single_backslash',
      description: 'pandoc markdown flavor'
    }
  ),
  pandocArguments: flags.string(
    {
      default: '[]',
      description: 'Pandoc arguments e.g. [\'--smart\', \'--filter=/bin/exe\']. Please use long argument names.'
    }
  ),
  latexEngine: flags.string(
    {
      default: 'pdflatex',
      description: 'Default latex engine for Pandoc export and latex code chunk.'
    }

  ),
  enableScriptExecution: flags.boolean(
    {
      default: false,
      description: 'Enables executing code chunks and importing javascript files. USE WITH CAUTION'
    }
  )
}

export function generateConfig(flags: MarkdownEngineConfig): MarkdownEngineConfig {
  let defaultConfig: MarkdownEngineConfig = defaultMarkdownEngineConfig
  let config: MarkdownEngineConfig = flags
  return {...defaultConfig, ...config}
}
