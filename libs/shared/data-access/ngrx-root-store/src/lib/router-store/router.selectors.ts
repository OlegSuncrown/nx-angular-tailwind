// import { getSelectors, RouterReducerState, RouterState } from '@ngrx/router-store';
import { createSelector } from '@ngrx/store';
import { RouterStateUrl } from './router.reducer';

export const selectRouterState = createSelector(
  (state: any) => state.router,
  (value) => value?.state
);
export const selectUrl = createSelector(
  selectRouterState,
  (routerState: RouterStateUrl) => routerState?.url
);

// Can cause console worning
// "createFeatureSelector cannot access feature name "router""
// export const selectRouter =
//   createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');
// export const selectUrl = createSelector(
//   selectRouter,
//   (routerState: RouterReducerState<RouterStateUrl>) => routerState?.state?.url
// );
