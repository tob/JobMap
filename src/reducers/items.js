



export default (state = items, { type, payload } = {}) => {
  const items = [
    {
      company: 'Technogym',
      startDate:'july 2011',
      endDate:'july 2012',
      role:'Project Manager',
      summary: 'working out a lot',
      active: false,
      open: true,
      current: true,
    },]
    
  return state
}
