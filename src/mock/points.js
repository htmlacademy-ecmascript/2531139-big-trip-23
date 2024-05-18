const mockPoints = [
  {
    id: '1',
    basePrice: '10',
    dateFrom: '2019-07-10T14:30:56.845Z',
    dateTo: '2019-07-13T15:30:13.375Z',
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
    dateFrom: '2019-07-14T10:55:56.845Z',
    dateTo: '2019-07-16T11:22:13.375Z',
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
    dateFrom: '2019-09-02T16:55:56.845Z',
    dateTo: '2019-09-07T17:45:13.375Z',
    destination: '3',
    isFavorite: true,
    offers: [
      '5',
      '6',
      '7',
      '8'
    ],
    type: 'flight'
  },
  {
    id: '4',
    basePrice: '10',
    dateFrom: '2019-07-10T14:30:56.845Z',
    dateTo: '2019-07-13T15:30:13.375Z',
    destination: '4',
    isFavorite: false,
    offers: [
      '10',
      '11'
    ],
    type: 'bus'
  },
];

export function getMockPoints(){
  return mockPoints;
}
