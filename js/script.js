const generatePasswordButton = document.querySelector('#generate-password')
const generatedPasswordElement = document.querySelector('#generated-password')
const passwordElement = document.querySelector('#generated-password h3')
const copybutton = document.querySelector('#generated-password #copyButton')
const closebutton = document.querySelector('#generated-password #closeButton')

const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getNumber = () => {
    return Math.floor(Math.random() * 9).toString()
}


const getSymbols = () => {
    const symbols = '!@#$&*'
    return symbols.charAt(Math.floor(Math.random() * symbols.length))
}

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbols) => {

    let password = ''
    const passwordlength = 10

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbols
    ]


    for (let i = 0; i < passwordlength; i += 4) {

        generators.forEach(() => {

            let randomValue = generators[Math.floor(Math.random() * generators.length)]()

            password += randomValue

        })
    }
    password = password.slice(0, passwordlength)
    return password
}

generatePasswordButton.addEventListener('click', () => {

   
    generatedPasswordElement.style.display = 'block'
    
    passwordElement.textContent = generatePassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbols)

    copybutton.addEventListener('click', () => {

        const textToCopy = passwordElement.textContent
        navigator.clipboard.writeText(textToCopy)
        
        copybutton.textContent = 'Copiado!'
        
        setInterval(() => {
            copybutton.textContent = 'Copiar senha'
        }, 2500)

    })

    closebutton.addEventListener('click',() => {
        generatedPasswordElement.style.display = 'none'
    })
})

