export const relativizeURL = (str) =>
  str.replace(
    'https://layer0-docs-layer0-ecommmerce-api-example-default.layer0-limelight.link/',
    '/l0-opt?quality=30&img=https://layer0-docs-layer0-ecommmerce-api-example-default.layer0-limelight.link/'
  )

export const filterProducts = (data, filter) => {
  let temp = data
  if (filter) {
    if (filter === 'trending') {
      return shuffle(temp)
    } else if (filter === 'price-low-to-high') {
      temp.sort((a, b) => (a.price.value > b.price.value ? 1 : -1))
      return temp
    } else if (filter === 'price-high-to-low') {
      temp.sort((a, b) => (a.price.value > b.price.value ? -1 : 1))
      return temp
    }
  }
  return temp
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex = currentIndex - 1
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }
  return array
}
