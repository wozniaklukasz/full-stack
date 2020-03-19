export interface ICard {
  "id": string,
  "dbfId": number,
  "name": string,
  "text": string,
  "flavor": string,
  "artist": string,
  "attack": number,
  "cardClass": string, // todo: enum
  "collectible": boolean,
  "cost": string,
  "elite": boolean,
  "faction": string, // todo: enum
  "health": string,
  "mechanics": string[], // todo: enum arr
  "rarity": string, // todo: enum
  "set": string, // todo: enum?
  "type": string // todo: enum
}
