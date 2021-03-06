import { Response } from 'node-fetch'
const tips = {
    401: "You need a token for this endpoint",
    403: "You don't have access to this endpoint."
}

/**
 * API Error
 */
export default class CyclonebotsAPIError extends Error {
    /**
     * Posiible response from Request
     */
    public response?: Response;

    constructor (code: number, text: string, response: Response) {
        if (code in tips) {
            super(`${code} ${text} (${tips[code as keyof typeof tips]})`);
        } else {
            super(`${code} ${text}`);
        }
        this.response = response;
    }
}