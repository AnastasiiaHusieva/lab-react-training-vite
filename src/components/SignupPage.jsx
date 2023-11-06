import { useState } from 'react'
function SignupPage() {
    const [email, setEmail] = useState('')
    const [isValid, setIsValid] = useState(true)
    const [password, setPassword] = useState('')
    const [passwordStrength, setPasswordStrength] = useState('weak')
    const [selectedNationality, setSelectedNationality] = useState('en');

    const handleEmailChange = (event) => {
        const newEmail = event.target.value
        setEmail(newEmail)

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        setIsValid(emailPattern.test(newEmail))
    }

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword)

        const strongPasswordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const isStrong = strongPasswordRegex.test(newPassword)
        setPasswordStrength(isStrong ? 'strong' : 'weak')
    }

    const handleNationalityChange = (event) => {
        const newNationality = event.target.value
        setSelectedNationality(newNationality)
    }

    const getGreeting = () => {
        if (selectedNationality === 'en') return 'Hello'
        else if (selectedNationality === 'fr') return 'Bonjour'
        else if (selectedNationality === 'de') return 'Hallo'
        else return 'Hello'

    }



    return <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} style={{ borderColor: isValid ? 'green' : 'red' }} />
        {isValid ? <p>You typed a valid email</p> : <p>Email is invalid</p>}
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} style={{ borderColor: isValid ? 'green' : 'red' }} />
        {passwordStrength === <p>You typed a strong password</p> ? null : <p>Password is weak</p>}
        <div>
            <label>Nationality:</label>
            <select value={selectedNationality} onChange={handleNationalityChange}>
                <option value="en">English (en)</option>
                <option value="fr">French (fr)</option>
                <option value="de">German (de)</option>
            </select>
            <p>{getGreeting()}</p>
        </div>
        <p>Your email is {email}</p>
    </div>
}

export default SignupPage