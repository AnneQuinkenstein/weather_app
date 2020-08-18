import React, { useState, useEffect } from 'react';
import Search from './Search';


const Title = (props) => {
  const [didMount, setDidMount] = useState(false)
  const [style, setStyle] = useState({ visibility: 'visible' })

  useEffect(() => {
    if (didMount) {
      setStyle({ visibility: 'hidden' });
    } else setDidMount(true)
  }, [props])

  return (
    <>
      <div className="title">
        <p>Weather >>  </p>
        <Search {...props} />
        {props.err && <p className="tooltip"> {props.err.message}</p>}
        <p className="tooltip" style={style}> type here for other cities</p>
      </div>
    </>
  )
}

export default Title;
