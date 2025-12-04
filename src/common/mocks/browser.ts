import { setupWorker } from 'msw/browser'
import { handlers } from './handlers.js'


export async function initializeMocking() {

    const worker = setupWorker(...handlers)
   
    return await worker.start()
}