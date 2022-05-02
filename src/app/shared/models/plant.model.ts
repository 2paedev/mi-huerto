export interface Plant {
  id: number
  name: string
  description: string
  imageUrl: string
  companions: Array<number>
  rivals: Array<number>
}
