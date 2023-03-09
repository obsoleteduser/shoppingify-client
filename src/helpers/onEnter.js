const onEnter  = (callback)=>{

return event => {
    if (event.keyCode === 13) {
     
      callback()
     
    }
  }

}

export default onEnter