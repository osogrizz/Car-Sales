export const ADD_FEATURE = 'ADD_FEATURE'
export const REMOVE_FEATURE = 'REMOVE_FEATURE'
export const UPDATE_TOTAL= 'UPDATE_TOTAL'

export const addFeature = item => {
  console.log(item)
  return {
    type: ADD_FEATURE,
    payload: item
  }
}

export const removeFeature = item => {
  console.log(item)
  return {
    type: REMOVE_FEATURE,
    payload: item
  }
}

export const updateTotal = total => {
  return {
    type: UPDATE_TOTAL,
    payload: total
  }
}