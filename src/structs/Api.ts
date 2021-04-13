import fetch, {Headers} from 'node-fetch'
import ApiError from '../utils/ApiError'
import qs from 'querystring'
import { EventEmitter} from 'events'

import { SnowFlake, BotInfo } from '../typings'

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
}

