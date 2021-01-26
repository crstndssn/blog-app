class Utility {
    static getDate (timeStamp) {
        const d = new Date(timeStamp)
        let month = '' + (d.getMonth() + 1)
        let day = '' + d.getDate() + 1
        let year = '' + d.getFullYear()

        if (month.length < 2) month = '0' + month
        if (day.length < 2) day = '0' + day

        return [day, month, year].join('/')

    }
}