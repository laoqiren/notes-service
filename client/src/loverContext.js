import React from 'react';

const LoverContext = React.createContext({
    hasLogin: false,
    loverInfo: {}
});
export default  LoverContext;