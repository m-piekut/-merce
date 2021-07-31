import { createReducer, on } from "@ngrx/store";

import { getPosts } from "./posts.actions";
import { initialState } from "./posts.state";

const _postsReducer = createReducer(initialState,
  on(getPosts, (state, action) => {
    console.log(action.posts)
    return{
      ...state,
      posts: action.posts
    }
  })

  )
  export function postsReducer(state:any, action:any){
    return _postsReducer(state, action)
  }
