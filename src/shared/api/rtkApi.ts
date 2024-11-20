import { PayloadAction } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Action } from 'redux';
// import { USER_LOCALSTORAGE_KEY } from '@shared/const/localstorage';
// function isHydrateAction(action: Action): action is PayloadAction<RootState> {
//     return action.type === HYDRATE
// }
  
type RootState = any // normally inferred from state
export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__ //process.env.NEXT_PUBLIC_DEV_URL //__API__,
        // prepareHeaders: (headers) => {
        //     // const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
        //     // if (token) {
        //     //     headers.set('Authorization', token);
        //     // }
        //     return headers;
        // },
    }),
    // extractRehydrationInfo(action, { reducerPath }): any {
    //     if (isHydrateAction(action)) {
    //       return action.payload[reducerPath]
    //     }
    //   },
    endpoints: (builder) => ({}),
});
