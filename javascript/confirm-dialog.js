/*Open a chayns dialog, which the user needs to confirm.*/
chayns.dialog.confirm('headline', 'message').then((result) => {
    if (result === 1){
        // User confirmed
    } else {
        // User canceled
    }
})
