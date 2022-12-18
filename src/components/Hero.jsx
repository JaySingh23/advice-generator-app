import { StyledHero } from "./styles/Hero.styled";
import { useState, useEffect } from "react";
import './styles/App.css'

export default function Hero() {

    const [text, setText] = useState([]);

    const fetchAdvice = async() => {
        const res = await fetch ("https://api.adviceslip.com/advice")
        const data = await res.json()

        console.log(data)

        setText(data.slip)
    }

    useEffect(() => {
        fetchAdvice()
    }, [])

    const textStyle = {
        color: "hsl(150, 100%, 66%)",
        textAlign: "center",
        letterSpacing: "0.4em",
        fontSize: "0.6em",
        fontWeight: "600",
        marginTop: "25px",
    }

    const circleStyle = {
        position: "relative",
        height: "70px",
        width: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        backgroundColor: "hsl(150, 100%, 66%)",
        marginBottom: "-40px",
        marginTop: "20px",
        marginRight: "8px"
    }

    const boxStyle = {
        width: '20px',
        height: '18px',
        borderLeft: '6px solid hsl(193, 38%, 86%)',
        borderRight: '6px solid hsl(193, 38%, 86%)',
        marginTop: '-20px',
        marginRight: '2%',
        opacity: '0.8'
    }

    const leftStyle = {
        width: "35%",
        backgroundColor: "grey", 
        marginLeft: "30px", 
        opacity: "0.5",   
    }

    const rightStyle = {
        width: "35%",
        backgroundColor: "grey", 
        marginLeft: "56%", 
        marginTop: "-9px", 
        opacity: "0.5"
    }

    return(
        <StyledHero>
            <div>
            <h3 style={textStyle}>ADVICE #{text.id}</h3>
            </div>
            <div>
            <p style={{margin: "10px 50px 20px", textAlign: "center", opacity: "0.8", color: "hsl(193, 38%, 86%)"}}>{text.advice}</p>
            </div>
            <hr style={leftStyle} />
            <div className="box" style={boxStyle}></div>
            <hr style={rightStyle} />
            <div className="circle" onClick={fetchAdvice} style={circleStyle}>
                <svg width="35" height="35" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="hsl(150, 100%, 66%)" ><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
                <style jsx>{`
                    @media (max-width: 426px) {
                    svg {
                        height: 70px;
                        width: 40px;
                        }
                    }
                `}</style>
            </div>
        </StyledHero>
    )
}