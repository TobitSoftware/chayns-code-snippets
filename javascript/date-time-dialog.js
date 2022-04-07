/*Open a chayns dialog, in which the user can select a date and time. The selection is output as number in seconds since 01.01.1970*/
chayns.dialog.date({
    dateType: chayns.dialog.dateType.DATE_TIME, // change this if you dont need time selection
    message: 'Wähle einen Termin.',
    minDate: new Date(), // this is the minimum date that can be selected
}).then((result) => {
    var date = new Date(result.value*1000); // convert date in seconds to date object
})
