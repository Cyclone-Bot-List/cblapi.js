/**
 * Discord ID
 */
export type SnowFlake = string

export interface BotInfo {
    id: SnowFlake
    username: string
    avatar?: string
    prefix: string
     
}