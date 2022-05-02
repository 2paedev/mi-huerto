export const STORE_MOCKS = {
  PLANTS: {
    plants: [
      {
        id: 1,
        name: 'Ajo',
        description: 'Description 1',
        imageUrl: 'Image 1',
        companions: [3, 6, 13, 16, 20, 23, 25, 26, 29, 32, 33],
        rivals: [11, 17, 18, 19, 27]
      },
      {
        id: 2,
        name: 'Acelga',
        description: 'Description 2',
        imageUrl: 'Image 2',
        companions: [5, 10, 11, 19, 20, 26, 28, 32, 33],
        rivals: [14, 15, 27]
      }
    ]
  }
}

const localStorage: { [key: string]: string } = {}
export const LOCAL_STORAGE_MOCK = {
  getItem: (key: string): string => {
    return key in localStorage ? localStorage[key] : ''
  },
  setItem: (key: string, value: string): void => {
    localStorage[key] = `${value}`
  }
}
