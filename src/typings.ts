/**
 * Discord ID
 */
export type SnowFlake = string

export interface BotInfo {
    id: SnowFlake
    username: string
    avatar?: string
    prefix: string
    discriminator: string
    tags: string[]
    website?: string 
    support?: string
    github?: string
    owners: SnowFlake[]
     
}

export interface BotStats {
    serverCount?: number;
    shards?: number[];
    shardId: number;
    shardCount: number;
}

export interface UserInfo {
}