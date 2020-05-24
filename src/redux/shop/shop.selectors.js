import { createSelector } from 'reselect';


const shopSelector = (state) => state.shop;

export const shopDataSelector = createSelector(
  [shopSelector],
  (shop) => shop.shopData,
);

export const createPreviewSelector = createSelector(
  [shopDataSelector],
  (shopData) => Object.keys(shopData).map((key) => shopData[key]),
);

export const collectionSelector = (collectionUrlParam) => {
  return createSelector(
    [shopDataSelector],
    (shopData) => shopData[collectionUrlParam],
  );
};
