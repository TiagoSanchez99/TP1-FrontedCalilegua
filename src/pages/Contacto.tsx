import React from 'react';

const Contacto: React.FC = () => {
    return (
        <div>
            <h2>Contacto</h2>
            <br />
            <p>Puedes contactarme a través de mi correo electrónico: tiagosan09@hotmail.com</p>
            <br />
            <a
                href="http://www.linkedin.com/in/tiago-sanchezcohen"
                target="_blank"
                style={{ color: 'blue' }}
            >
                Enlace a mi LinkedIn
            </a>
        </div>
    );
};

export default Contacto;
