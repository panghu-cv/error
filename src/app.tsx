import React from 'react';
import HeadRight from '../src/components/HeadRight'
import Footer from '../src/components/Footer'

export const layout=()=>{
    return {
       rightContentRender: () => <HeadRight/>,
       footerRender: () => <Footer/>,
       
    }
}
