// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Method
// ----------------------------------------------------------------------------
/** */
const formattedDate = (timestamp, format = 'default') => {
  const date = new Date(timestamp * 1000)
  const weekDay = date.getDay()
  const dayNumber = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  let r = 'working...'

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  if (format === 'default') {
    r = `${daysOfWeek[weekDay]}, ${monthNames[month]} ${dayNumber}, ${year}`
  }
  if (format === 'withMinutes') {
    const hour = date.getHours()
    const minutes = date.getMinutes()

    r = `${hour}:${minutes}, ${daysOfWeek[weekDay]}, ${
      monthNames[month]
    } ${dayNumber}, ${year}`
  }

  return r
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default formattedDate
