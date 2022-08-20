//Traje esta logica del back al front para evitar requests innecesarias.
const wellformed = (ssn) => {
    const regex = /^\d{3}-\d{2}-\d{4}$/
    return regex.test(ssn)
}

export const inputsChecker = (
    firstName,
    lastName,
    address,
    SSN
) => {
    let error = false
    let msg = ''
    if( firstName!='' && lastName!='' && address!='' && SSN!='' ){
        if( SSN.length != 11 || !wellformed(SSN) ){
            error = true
            msg = 'SSN must be like this 111-22-3333'
        }
    } else {
        error = true
        msg = 'All the inputs must be fulfilled.'
    }
    return { error, msg }
}