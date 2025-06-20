import { useState } from 'react'
import { Input } from '../../components/input/input'
import { Navbar } from '../../components/navbar/navbar'
import styles from './home.module.css'
import { Card } from "../../components/Card/card";
import { Button } from "../../components/Button/button";

export function HomePage() {
    // sempre comecar com letra maiscula ex: HomePage e nao homepage
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [counter, setCounter] = useState(0)
    const [show, setShow] = useState(false);

    const series = [
        "Ted Lasso",
        "You",
        "Gilmore Girls",
        "Severance",
        "Stranger Things",
        "Breaking Bad",
        "Fleabag",
    ];

    // const handleInputChange = (event) => {
    //   setNome(event.target.value);
    //   console.log(e.target.value);
    // };

    // console.log(nome)

    const handleCounter = () => {
        setCounter(counter + 1)
    }

    const handleClick = () => {
        console.log("clicou no botão");
    };

    const handleAlternarMensagem = () => {
        setShow(!show)
    }

    return (
        // <h1 className={styles.titulo}> Oiii</h1>

        // <div className={styles.container}>
        //     <Navbar />
        //     <Input
        //         type="text"
        //         placeholder="Escreva seu nome"
        //         value={nome}
        //         onChange={handleInputChange}
        //     />
        //     <Input
        //         type="text"
        //         placeholder="Escreva seu email"
        //         value={email}
        //         onChange={(e) => setEmail(e.target.value)}
        //     />
        //      

        // </div>
        <div>
            <div className={styles.container}>
                <Navbar />

                <h1 className={styles.titulo}>Minhas séries favoritas:</h1>

                <div className={styles.cardsContainer}>
                    {series.map((serie, index) => (
                        <>
                            <Card key={index}>
                                <p>{serie}</p>
                            </Card>
                        </>
                    ))}
                    <Button onClick={handleClick} title={"Clique aqui"} type="button" />
                </div>
                <Button onClick={handleAlternarMensagem} title={show ? 'Esconder mensagem' : 'mostrar mensagem'} type="button" />
                {
                    show && <p style={{ color: 'black' }}>oie</p>
                }
 <div> <h1 style={{ color: "black" }}>Contador:{counter}</h1>
                <button type="button" onClick={handleCounter}>incrementar</button></div>
            </div>

            <footer className={styles.footer}> Serratec 2025</footer>
        </div>

    )
    // agora preciso chamar essa pagina no meu app.jsx

}
