const INITIAL_STATE = {
  sections: [
    {id: 1, title: 'hats', imageUrl: 'pug-background.jpg' , size: '', linkUrl: 'hats'},
    {id: 2, title: 'jackets', imageUrl: 'pug-background.jpg', size: '', linkUrl: 'jackets'},
    {id: 3, title: 'sneakers', imageUrl: 'pug-background.jpg', size: '', linkUrl: 'sneakers'},
    {id: 4, title: 'womens', imageUrl: 'pug-background.jpg', size: 'large', linkUrl: 'womens'},
    {id: 5, title: 'mens', imageUrl: 'pug-background.jpg', size: 'large', linkUrl: 'mens'}
  ],
};

const homeMenuReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
}


export default homeMenuReducer;
