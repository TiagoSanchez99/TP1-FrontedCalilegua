import React from 'react';

const Proyectos: React.FC = () => {
    return (
        <div>
            <h2>Proyectos</h2>
            <br />
            <p>Aquí hay algunos proyectos pequeños que he realizado:</p>
            <br />
            <ul>
                <li>Proyecto 1: Marvel React Challenge
                    <br />
                    <a
                        href="https://github.com/TiagoSanchez99/marvel-react-challenge"
                        target="_blank"
                        style={{ color: 'red' }}
                    >
                        Ver en GitHub
                    </a>
                </li>
                <br />
                <li>Proyecto 2: Challenge Encriptador
                    <br />
                    <a
                        href="https://github.com/TiagoSanchez99/challenge-encriptador"
                        target="_blank"
                        style={{ color: 'green' }}
                    >
                        Ver en GitHub
                    </a>
                </li>
            </ul>
            <br />
            <br />
            <a
                href="http://github.com/TiagoSanchez99"
                target="_blank"
                style={{ color: 'black' }}
            >
                Enlace a mi GitHub
            </a>
        </div>
    );
};

export default Proyectos;