const info = (...params) => {
  if (process.env.NODE_ENV !== 'test1') { // eslint-disable-next-line no-console
    console.log(...params)
  }
}

const error = (...params) => {
  if (process.env.NODE_ENV !== 'test1') { // eslint-disable-next-line no-console
    console.error(...params)
  }
}

module.exports = {
  info, error
}