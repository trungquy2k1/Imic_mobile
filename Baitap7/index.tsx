// import React from "react";
// import Calculate from "./calculate/Calculate";


// export default function Index() {
    

//     return (
//         <Calculate />
//     )
// }

import React from 'react';
import Calculate from './calculate/Calculate';
import {Provider} from 'react-redux';
import {store} from './store';
export interface Props {}

const index: React.FC<Props> = () => {
  return (
    <Provider store={store}>
      <Calculate />
    </Provider>
  );
};

export default index;