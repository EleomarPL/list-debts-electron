export const updateArray = ({ array, newData, id }) => {
  const cloneArray = [...array]
  const index = cloneArray.findIndex(item => item.id === id)
  if (index !== -1) cloneArray[index] = { ...cloneArray[index], ...newData }
  return cloneArray
}
