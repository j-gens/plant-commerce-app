import { createSelector } from 'reselect';


const homeMenuSelector = (state) => state.homeMenu;

const sectionsSelector = createSelector(
  [homeMenuSelector],
  (homeMenu) => homeMenu.sections,
);


export default sectionsSelector;
