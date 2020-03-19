const delay = (time = 1000) => new Promise<boolean>(resolve => {
  setTimeout(() => {
    resolve(true)
  }, time)
})

export default delay
