import fetch, { Headers } from 'node-fetch'
import ApiError from '../utils/ApiError'
import qs from 'querystring'
import { EventEmitter } from 'events'

import { BotStats, BotInfo, UserInfo } from '../typings'

interface APIOptions {
    token?: string
}

export class Api extends EventEmitter {
    private options: APIOptions

    constructor (token: string, options: APIOptions = {}) {
        super()
        this.options = {
            token: token,
            ...options
        }
    }

    private async _request (method: string, path: string, body?: object): Promise<any> {
        const headers = new Headers()
        if (this.options.token) headers.set('Authorization', this.options.token)
        if (method !== 'GET') headers.set('Content-Type', 'application/json')

        let url = `https://cyclonebotlist.xyz/api/${path}`

        //@ts-ignore
        if (body && method == 'GET') url += `?${qs.stringify(body)}`

        const response = await fetch(url, {
            method,
            headers,
            body: body && method !== 'GET' ? JSON.stringify(body) : null
        })

        let responseBody
        if (responseBody.headers.get('Content-Type')?.startsWith('application/json')) {
            responseBody = await response.json()
        } else {
            responseBody = await response.text()
        }

        if (!response.ok) {
            throw new ApiError(response.status, response.statusText, responseBody)
        }

        return responseBody
    }
}
