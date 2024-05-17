const mockDestinations = [
  {
    id: '1',
    description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Chamonix',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: 'Chamonix parliament building'
      }
    ]
  },
  {
    id: '2',
    description: 'Parish bla bla bla',
    name: 'Parish',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: 'Parish parliament building'
      }
    ]
  },
  {
    id: '3',
    description: 'Moscow bla bla bla',
    name: 'Moscow',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: 'Moscow parliament building'
      }
    ]
  },
  {
    id: '4',
    description: 'Seul bla bla bla',
    name: 'Seul',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: 'Seul parliament building'
      }
    ]
  },
];

export function getMockDestinations(){
  return mockDestinations;
}