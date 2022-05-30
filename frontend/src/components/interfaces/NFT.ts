import {Author} from "./Author";

export interface NFT {
    id: number
    author: Author
    image: string
    name: string
    standard: string
    price: string
    last_seen_price: number
    year_of_production: number
    description?: string
}