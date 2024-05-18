const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: '1',
        title: 'Upgrade to a Comfort class',
        price: 50
      }
    ]
  },
  {
    type: 'taxi',
    offers: [
      {
        id: '2',
        title: 'Upgrade to a Business class',
        price: 120
      }
    ]
  },
  {
    type: 'taxi',
    offers: [
      {
        id: '3',
        title: 'Upgrade to a Elite class',
        price: 250
      }
    ]
  },
  {
    type: 'taxi',
    offers: [
      {
        id: '4',
        title: 'Upgrade to a Royal class',
        price: 1200
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: '5',
        title: 'Upgrade to a First class',
        price: 5000
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: '6',
        title: 'Add luggage',
        price: 200
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: '7',
        title: 'Add meal',
        price: 150
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: '8',
        title: 'Choose seats',
        price: 50
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: '9',
        title: 'Rent a car',
        price: 250
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: '10',
        title: 'Choose seats',
        price: 50
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: '11',
        title: 'Drive faster',
        price: 1000
      }
    ]
  }
];

export function getMockOffers(){
  return mockOffers;
}
