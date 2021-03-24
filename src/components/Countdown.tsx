import { useState, useEffect, useContext } from 'react';
import style from '../style/components/Countdown.module.css';
import { challengeContext } from './../context/challengeContext';
import { CountdownContext } from './../context/countdownContext';




export function Countdown(){
    const {minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown} = useContext(CountdownContext);
   
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

   

    return (
        <div>
            <div className={style.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>  
            </div>

            {hasFinished ? (
                <button 
                disabled
                className={style.countdownButton}>
                Ciclo Encerrado
                <img src="https://t3.ftcdn.net/jpg/02/02/78/72/240_F_202787278_pmKPuW2ZZa0BkAZW8ccMNMjEHA6UgeoL.jpg" alt="rightIcon"/>
                </button>
            ) : (
                <>
                    {isActive ? (
                    <button type="button"
                    className={`${style.countdownButton} ${style.countdownButtonActive}`}
                    onClick={resetCountdown}>   
                    Abandonar ciclo
                    </button>) : (
                    <button
                    type="button" 
                    className={style.countdownButton}
                    onClick={startCountdown}>   
                    Iniciar um ciclo</button>
                    )}
                </>
            )}
            
        </div>
    );
}