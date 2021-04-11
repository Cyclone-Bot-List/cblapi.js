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
    public response?: any

    name = 'Cyclonebots.xyz API Error'

    constructor (code: number, text: string, response?: any) {
        super(`${code} ${text}${tips[code] ? ` (${tips[code]})` : ``}`)

        this.response = response
    }
}