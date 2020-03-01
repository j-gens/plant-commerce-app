import { createSelector } from 'reselect';

const homeMenuSelector = (state) => state.homeMenu;

export const sectionsSelector = createSelector(
  [homeMenuSelector],
  (homeMenu) => homeMenu.sections,
);
