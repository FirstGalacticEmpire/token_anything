import {Author} from "./Author";

export interface NFT {
    id: number
    author: Author
    image: string
    name: string
    price: string
    year_of_production: number
    description?: string
}