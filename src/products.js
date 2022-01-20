export const products = [
  {
    id: 1,
    isSelected: false,
    isDisabled: false,
    data: {
      preTitle: 'Сказочное заморское яство',
      title: 'Нямушка',
      subTitle: 'с фуа-гра',
      description: '',
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
      preTitle: 'Сказочное заморское яство',
      title: 'Нямушка',
      subTitle: 'с рыбой',
      description: '',
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
      preTitle: 'Сказочное заморское яство',
      title: 'Нямушка',
      subTitle: 'с курой',
      description: '',
      composition: 'Филе из цыплят с трюфелями в бульоне.',
      image: {
        default: '/images/product/cat.jpg',
        retina: '/images/product/cat@2x.jpg'
      },
      weight: 5,
    }
  }
];
