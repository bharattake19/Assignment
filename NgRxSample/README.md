Cover bellow Topics
====================
1.Use async pipe
2.Store from @ngrx/store
3.Create action
4.Create Reducer


File Details
=============
1.counter.reducer.ts
    -createReducer from ngrx/store
    -const _counterReducer = createReducer(initialState,
        on(increment, state => state + 1),
        on(decrement, state => state - 1),
        on(reset, state => 0),
    );
    -counterReducer(state, action)
2.counter.actions.ts
    -create action for increment,decrement and reset
3.app.module.ts
    -Configured StoreModule.forRoot({ count: counterReducer })
    -Component
4.my-counter.component
    -Increment, Decrement and Reset Button
    

