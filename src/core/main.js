import {LiberPrimusSolver} from './liberPrimusSolver'

export const main = async () => {
    const translator = new LiberPrimusSolver()
    await translator.run()
}