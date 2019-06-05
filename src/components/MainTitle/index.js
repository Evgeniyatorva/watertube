import React from 'react';

import './style.scss';

const MainTitle = React.forwardRef((props, ref) => {
  return(    
    <div className="main-title">
      <h1 ref={ref}>Бурение Cкважин На Воду</h1>
    </div>
  )
})

export default MainTitle;