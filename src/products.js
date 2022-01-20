export const products = [
  {
    id: 1,
    isSelected: false,
    isDisabled: false,
    data: {
      title: 'Нямушка',
      subTitle: 'с фуа-гра',
      features: [
        '<strong>10</strong> порций',
        'мышь в подарок'
      ],
      composition: 'Печень утки разварная с артишоками.',
      image: {
        default: '/images/product/cat.jpg',
        retina: '/images/product/cat@2x.jpg'
      },
      weight: 0.5,
    }
  },
  {
    id: 2,
    isSelected: true,
    isDisabled: false,
    data: {
      title: 'Нямушка',
      subTitle: 'с рыбой',
      features: [
        '<strong>40</strong> порций',
        '<strong>2</strong> мыши в подарок'
      ],
      composition: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      image: {
        default: '/images/product/cat.jpg',
        retina: '/images/product/cat@2x.jpg'
      },
      weight: 2,
    }
  },
  {
    id: 3,
    isSelected: false,
    isDisabled: true,
    data: {
      title: 'Нямушка',
      subTitle: 'с курой',
      features: [
        '<strong>100</strong> порций',
        '<strong>5</strong> мышей в подарок',
        'заказчик доволен'
      ],
      composition: 'Филе из цыплят с трюфелями в бульоне.',
      image: {
        default: '/images/product/cat.jpg',
        retina: '/images/product/cat@2x.jpg'
      },
      weight: 5,
    }
  }
];
