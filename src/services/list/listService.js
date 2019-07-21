// TODO: Here you can make your API Calls
const items = [
  {
    name: 'Item 1',
    slug: 'a-item-slug'
  },
  {
    name: 'Item 2',
    slug: 'another-item'
  }
]
export const loadList = () => {
  return Promise.resolve(items)
}

export const loadItem = slug => {
  return Promise.resolve(items.find(i => i.slug === slug))
}
