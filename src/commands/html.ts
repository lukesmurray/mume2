import {Command} from '@oclif/command'
import {MarkdownEngineConfig} from '@shd101wyy/mume'
import * as fs from 'fs-extra'
import * as globby from 'globby'
import * as path from 'path'

import {defaultFlags} from '../helpers/config'
import {generateEngine} from '../helpers/engine'

export default class Html extends Command {
  static description = 'convert markdown files to html'

  static examples = [
    '$ mume2 html \'*.md\' -o html --imageFolderPath ./img --enableScriptExecution true'
  ]

  // static arguments i.e. mume2 html filename
  static args = [
    {
      name: 'filePath',
      required: true,
      description: 'the filename to convert (can be a wildcard)',
      hidden: false
    },
    {
      name: 'projectDirectoryPath',
      required: false,
      description: 'the directory the file paths are in. Default to current directory',
      hidden: false,
      default: process.cwd()
    }
  ]

  // static flags i.e. mume2 html --codeBlockTheme='auto.css'
  static flags = {
    ...{},
    ...defaultFlags // get default flags used for everything
  }

  async run() {
    // parse input
    const {args, flags} = this.parse(Html)

    // get list of files to convert to markdown
    const files: string[] = []
    const paths = await globby(args.filePath)
    paths.forEach(p => files.push(p))

    // if necessary create the output directory
    flags.outDir && files.length && (await fs.mkdirp(flags.outDir))

    // iterate over the files to convert
    for (const md of files) {
      this.log(`rendering ${md}`)
      let engine = await generateEngine(md, args.projectDirectoryPath, flags as MarkdownEngineConfig)
      const output = await engine.htmlExport({
        offline: true,
        runAllCodeChunks: true
      })
      flags.outDir && this.log(`moving ${output} to ${flags.outDir}`)
      // if necessary move the output to the output directory
      flags.outDir && (await fs.move(output, path.join(flags.outDir, output), {
        overwrite: true
      }))
    }

    this.log('done')
    this.exit(0)
  }
}
