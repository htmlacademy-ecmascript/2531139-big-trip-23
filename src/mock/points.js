const mockPoints = [
  {
    id: '1',
    basePrice: '10',
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: '1',
    isFavorite: false,
    offers: [
      '1',
      '2',
      '3',
      '4'
    ],
    type: 'taxi'
  },
  {
    id: '2',
    basePrice: '250',
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: '2',
    isFavorite: false,
    offers: [
      '9'
    ],
    type: 'drive'
  },
  {
    id: '3',
    basePrice: '3000',
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: '3',
    isFavorite: true,
    offers: [
      '5',
      '6',
      '7',
      '8'
    ],
    type: 'flight'
  }
];

export function getMockPoints(){
  return mockPoints;
}