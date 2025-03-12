import { useState } from 'react';

const ContactForm = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div>
            <form>
                <input id="name" />
                <input id="email" />
                <input id="message" />
            </form>
        </div>
    );
}

export default ContactForm;