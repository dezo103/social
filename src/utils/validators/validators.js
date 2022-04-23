export const required = value => {
    return value ? undefined : 'field is required'
}


export const maxLengthCreator = (maxLength) => (value) => {
    return value.length > maxLength ? `max length is ${maxLength} symbols` : undefined
}

