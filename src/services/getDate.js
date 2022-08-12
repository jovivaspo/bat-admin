export const getDate = (date) => {
    const newDate = new Date(date)
    let day = newDate.getDate()
    let month = newDate.getMonth() + 1
    let year = newDate.getFullYear()

    if (month < 10) {
        month = (`0${month}`)
    }
    if (day < 10) {
        day = (`0${day}`)
    }
    
    return (`${day}-${month}-${year}`)

}