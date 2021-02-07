export interface Item{
  itemId:string,
  "lastUpdate": number,
  item: {
      "name": string,
      "description": string,
      "type": string,
      "rarity": string,
      "series": string,
      "cost": string,
      "upcoming": boolean,
      images: {
          icon: string,
          featured: null| string,
          background: string,
          information: string
      },
      backpack: {},
      obtained: string,
      obtained_type: string,
      ratings: {
          avgStars: number,
          totalPoints: number,
          numberVotes: number
      },
      costmeticId: string
  }
}