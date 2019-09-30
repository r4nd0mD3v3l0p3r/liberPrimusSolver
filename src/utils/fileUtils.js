import config from '../config/config'
import * as path from 'path'
import * as fs from 'fs'
import {Logger} from '../utils/logger'
import {RunesAlphabet} from '../core/runesAlphabet'

const logger = new Logger()
const runesAlphabet = new RunesAlphabet()

export const writeFile = (fileName, data) => {
    const fullFilePath = path.join(config.solver.outputDataFolder, fileName)

    const englishData = runesAlphabet.translate(data)
    const fileStream = fs.createWriteStream(fullFilePath, {flags: 'w'})
    fileStream.write(englishData)
    fileStream.close()

    logger.log('FileUtils', `File created: ${fullFilePath}`)
}