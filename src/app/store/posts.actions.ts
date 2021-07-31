import { createAction, props } from "@ngrx/store";


export const getPosts = createAction('getPosts', props<{posts: any}>())
