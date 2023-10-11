

const DateToString = (date) => {
    const tempDate = new Date(date)
    const newdate= tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear()

    return  newdate

}
export default DateToString