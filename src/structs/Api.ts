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
    }
}