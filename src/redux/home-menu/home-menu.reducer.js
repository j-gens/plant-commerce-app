const INITIAL_STATE = {
  sections: [
    {
      id: 1, title: 'succulents', imageUrl: 'https://plant-commerce-app.s3-us-west-1.amazonaws.com/s-1.jpg', size: '', linkUrl: 'shop/succulents',
    },
    {
      id: 2, title: 'cacti', imageUrl: 'https://plant-commerce-app.s3-us-west-1.amazonaws.com/c-1.jpg', size: '', linkUrl: 'shop/cacti',
    },
    {
      id: 3, title: 'ferns', imageUrl: 'https://plant-commerce-app.s3-us-west-1.amazonaws.com/f-1.jpg', size: '', linkUrl: 'shop/ferns',
    },
    {
      id: 4, title: 'plants', imageUrl: 'https://plant-commerce-app.s3-us-west-1.amazonaws.com/hp-1.jpg', size: 'large', linkUrl: 'shop/plants',
    },
    {
      id: 5, title: 'flowers', imageUrl: 'https://plant-commerce-app.s3-us-west-1.amazonaws.com/ff-1.jpg', size: 'large', linkUrl: 'shop/flowers',
    },
  ],
};

const homeMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


export default homeMenuReducer;
