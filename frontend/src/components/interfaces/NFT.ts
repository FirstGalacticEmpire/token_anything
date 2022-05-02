interface Author {
    first_name: string
    last_name: string
}

export interface NFT {
    author: Author
    image: string
    name: string
    price: string
    year_of_production: number
}