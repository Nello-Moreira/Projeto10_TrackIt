function isFormEmpty(formInputsObject) {
    const emptyInputs = Object.values(formInputsObject).filter((value) => value === '');
    return emptyInputs.length > 0;
}

export { isFormEmpty };