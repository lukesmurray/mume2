mume2
=====

command line interface for the mume markdown converter.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/mume2.svg)](https://npmjs.org/package/mume2)
[![CircleCI](https://circleci.com/gh/lukesmurray/mume2/tree/master.svg?style=shield)](https://circleci.com/gh/lukesmurray/mume2/tree/master)
[![Codecov](https://codecov.io/gh/lukesmurray/mume2/branch/master/graph/badge.svg)](https://codecov.io/gh/lukesmurray/mume2)
[![Downloads/week](https://img.shields.io/npm/dw/mume2.svg)](https://npmjs.org/package/mume2)
[![License](https://img.shields.io/npm/l/mume2.svg)](https://github.com/lukesmurray/mume2/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mume2
$ mume2 COMMAND
running command...
$ mume2 (-v|--version|version)
mume2/0.1.1 linux-x64 node-v11.1.0
$ mume2 --help [COMMAND]
USAGE
  $ mume2 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mume2 autocomplete [SHELL]`](#mume-2-autocomplete-shell)
* [`mume2 help [COMMAND]`](#mume-2-help-command)
* [`mume2 html FILEPATH [PROJECTDIRECTORYPATH]`](#mume-2-html-filepath-projectdirectorypath)
* [`mume2 update [CHANNEL]`](#mume-2-update-channel)

## `mume2 autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ mume2 autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ mume2 autocomplete
  $ mume2 autocomplete bash
  $ mume2 autocomplete zsh
  $ mume2 autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.1.0/src/commands/autocomplete/index.ts)_

## `mume2 help [COMMAND]`

display help for mume2

```
USAGE
  $ mume2 help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.4/src/commands/help.ts)_

## `mume2 html FILEPATH [PROJECTDIRECTORYPATH]`

convert markdown files to html

```
USAGE
  $ mume2 html FILEPATH [PROJECTDIRECTORYPATH]

ARGUMENTS
  FILEPATH              the filename to convert (can be a wildcard)

  PROJECTDIRECTORYPATH  [default: /home/lukemurray/Documents/repos/github/lukesmurray/mume2] the directory the file
                        paths are in. Default to current directory

OPTIONS
  -h, --help
      show CLI help

  -o, --outDir=outDir
      output directory to store files in

  --breakOnSingleNewLine
      In Markdown, a single newline character doesn't cause a line break in the generated HTML. In GitHub Flavored 
      Markdown, that is not true. Enable this config option to insert line breaks in rendered HTML for single newlines in 
      Markdown source.

  --codeBlockTheme=(auto.css|default.css|atom-dark.css|atom-light.css|atom-material.css|coy.css|darcula.css|dark.css|fun
  ky.css|github.css|hopscotch.css|monokai.css|okaidia.css|one-dark.css|one-light.css|pen-paper-coffee.css|pojoaque.css|s
  olarized-dark.css|solarized-light.css|twilight.css|vue.css|vs.css|xonokai.css)
      [default: auto.css] If `auto.css` is chosen, then the code block theme that best matches the current preview theme 
      will be picked.

  --enableCriticMarkupSyntax
      Enable CriticMarkup syntax. Only works with markdown-it parser. Please check http://criticmarkup.com/users-guide.php 
      for more information.

  --enableEmojiSyntax
      Enable emoji & font-awesome plugin. This only works for markdown-it parser, but not pandoc parser.

  --enableExtendedTableSyntax
      Enable extended table syntax to support merging table cells.

  --enableLinkify
      Enable conversion of URL-like text to links in the markdown preview.

  --enableScriptExecution
      Enables executing code chunks and importing javascript files. USE WITH CAUTION

  --enableTypographer
      Enable smartypants and other sweet transforms.

  --enableWikiLinkSyntax
      Enable Wiki Link syntax support. More information can be found a  
      https://help.github.com/articles/adding-links-to-wikis/

  --frontMatterRenderingOption=(none|table|code block)
      [default: none] means to render yaml front matter

  --imageFolderPath=imageFolderPath
      [default: /assets] When using Image Helper to copy images, by default images will be copied to root image folder 
      path `/assets`

  --latexEngine=latexEngine
      [default: pdflatex] Default latex engine for Pandoc export and latex code chunk.

  --mathRenderingOption=(KaTeX|MathJax|None)
      [default: KaTeX] mathematical library used for type setting

  --mermaidTheme=(mermaid.css|mermaid.dark.css|mermaid.forest.css)
      [default: mermaid.css] mermaid theme to use

  --pandocArguments=pandocArguments
      [default: []] Pandoc arguments e.g. ['--smart', '--filter=/bin/exe']. Please use long argument names.

  --pandocMarkdownFlavor=pandocMarkdownFlavor
      [default: markdown-raw_tex+tex_math_single_backslash] pandoc markdown flavor

  --pandocPath=pandocPath
      [default: pandoc] pandoc executable path

  --phantomPath=phantomPath
      [default: phantomjs] phantomjs executable path

  --previewTheme=(atom-dark.css|atom-light.css|atom-material.css|github-dark.css|github-light.css|gothic.css|medium.css|
  monokai.css|newsprint.css|night.css|none.css|one-dark.css|one-light.css|solarized-dark.css|solarized-light.css|vue.css
  )
      [default: github-light.css] css theme to use to render the preview

  --printBackground
      Whether to print background for file export or not. If set to `false`, then `github-light` preview theme will b  
      used. You can also set `print_background` in front-matter for individual files.

  --protocolsWhiteList=protocolsWhiteList
      [default: http://, https://, atom://, file://, mailto:, tel:] Accepted protocols for links

  --revealjsTheme=(beige.css|black.css|blood.css|league.css|moon.css|night.css|serif.css|simple.css|sky.css|solarized.cs
  s|white.css|none.css)
      [default: white.css] revealjs theme to use

  --usePandocParser
      Enable this option will render markdown by pandoc instead of markdown-it

  --wikiLinkFileExtension=wikiLinkFileExtension
      [default: .md] By default, the extension for wikilink is `.md`. For example: [[test]] will direct to file path 
      `test.md`.

EXAMPLE
  $ mume2 html '*.md' -o html --imageFolderPath ./img --enableScriptExecution true
```

_See code: [src/commands/html.ts](https://github.com/lukesmurray/mume2/blob/v0.1.1/src/commands/html.ts)_

## `mume2 update [CHANNEL]`

update the mume2 CLI

```
USAGE
  $ mume2 update [CHANNEL]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v1.3.9/src/commands/update.ts)_
<!-- commandsstop -->
