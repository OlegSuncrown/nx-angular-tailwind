import { Params } from "@angular/router";
import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";

export interface RouterStateUrl {
  url: string,
  queryParams: Params,
  params: Params;
  fragment: string | null;
}

export interface RouterState {
  router: RouterReducerState<RouterStateUrl>;
}
  
export const routerReducers: ActionReducerMap<RouterState> = {
  router: routerReducer
};