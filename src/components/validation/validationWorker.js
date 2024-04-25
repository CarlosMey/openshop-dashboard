const ValidationWorker = (values) => {
    let errors = {
        documentType: '',
        documentNumber: '',
        apPat: '',
        apMat: '',
        englishLevel: '',
        charge: '',
        birthdate: '',
        contractType: '',
        hiringDate: '',
        phoneNumber: '',
        district: '',
        province: '',
        department: '',
        familiarAssignment: '',
        techSkills: [],
        emergencyContacts: [],
    }

    if (!values.name) {
        errors.name = 'El nombre es necesario'
    } else if (values.name.length < 3) {
        errors.name = 'El nombre tiene que tener mas de 8 caracteres'
    }

    if (!values.documentType) {
        errors.documentType = 'El tipo de documento es necesario'
    } else if (values.documentType.length < 3) {
        errors.documentType = 'El tipo de documento tiene que tener mas de 5 caracteres'
    }

    if (!values.documentNumber) {
        errors.documentNumber = 'El tipo de documento es necesario'
    } else if (values.documentNumber.length < 3) {
        errors.documentNumber = 'El tipo de documento tiene que tener mas de 8 caracteres'
    }

    if (!values.apPat) {
        errors.apPat = 'El apellido paterno es necesario'
    } else if (values.apPat.length < 3) {
        errors.apPat = 'El apellido paterno tiene que tener mas de 8 caracteres'
    }

    if (!values.apMat) {
        errors.apMat = 'El apellido materno es necesario'
    } else if (values.apMat.length < 3) {
        errors.apMat = 'El apellido materno tiene que tener mas de 8 caracteres'
    }

    if (!values.englishLevel) {
        errors.englishLevel = 'El nivel de ingles es necesario'
    } else if (values.englishLevel.length < 3) {
        errors.englishLevel = 'El nivel de ingles tiene que tener mas de 8 caracteres'
    }

    if (!values.charge) {
        errors.charge = 'El cargo es necesario'
    } else if (values.charge.length < 3) {
        errors.charge = 'El cargo tiene que tener mas de 8 caracteres'
    }

    if (!values.birthdate) {
        errors.birthdate = 'La fecha de nacimiento es necesario'
    } 

    if (!values.phoneNumber) {
        errors.phoneNumber = 'El numero de celular es necesario'
    } else if (values.phoneNumber.length < 3) {
        errors.phoneNumber = 'El numero de celular tiene que tener mas de 8 caracteres'
    }

    if (!values.address) {
        errors.address = 'La direccion es necesario'
    } else if (values.address.length < 3) {
        errors.address = 'La direccion tiene que tener mas de 8 caracteres'
    }

    if (!values.district) {
        errors.district = 'El distrito es necesario'
    } else if (values.district.length < 3) {
        errors.district = 'El distrito tiene que tener mas de 8 caracteres'
    }

    if (!values.province) {
        errors.province = 'La provincia es necesario'
    } else if (values.province.length < 3) {
        errors.province = 'La provincia tiene que tener mas de 8 caracteres'
    }

    if (!values.department) {
        errors.department = 'El departamento es necesario'
    } else if (values.department.length < 3) {
        errors.department = 'El departamento tiene que tener mas de 8 caracteres'
    }

    return errors
}

export default ValidationWorker



// documentType: '',
// documentNumber: '',
// apPat: '',
// apMat: '',
// englishLevel: '',
// charge: '',
// birthdate: '',
// contractType: '',
// hiringDate: '',
// phoneNumber: '',
// district: '',
// province: '',
// department: '',
// familiarAssignment: '',
// techSkills: [],
// emergencyContacts: [],