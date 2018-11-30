import * as mume from '@shd101wyy/mume'

import {generateConfig} from './config'

export async function generateEngine(filePath: string,
                                     projectDirectoryPath: string,
                                     flags: mume.MarkdownEngineConfig): Promise<mume.MarkdownEngine> {
  await mume.init()

  let config = generateConfig(flags)

  const engine = new mume.MarkdownEngine({
    filePath,
    projectDirectoryPath,
    config
  })

  return engine
}
