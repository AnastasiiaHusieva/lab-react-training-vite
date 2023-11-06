function Greetings ({lang, children}) {
    const greetings = {
        en: 'Hello',
        de: 'Hallo',
        es: 'Hola',
        fr: 'Bonjour',
    }
    return <div>
        {greetings[lang] ? (
            <p>
                {greetings[lang]}, {children}!
            </p>
        ) : (<p>Unsupported language: {lang}</p>)}
    </div>

}

export default Greetings