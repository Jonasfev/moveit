import { Children, createContext, ReactNode, useContext, useState, useEffect } from 'react';
import { Countdown } from './../components/Countdown';
import { challengeContext } from './challengeContext';

interface CountdownContextData{
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;

}

interface CountdownProviderProps{
    children: ReactNode;
}

let countdownTimeOut : NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({children}: CountdownProviderProps){
    const {startNewChallenge} = useContext(challengeContext);

    const[time, setTime] = useState(25 * 60);
    const[isActive, setIsActive] = useState(false);
    const[hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);

    const seconds = time % 60;

    function startCountdown(){
        setIsActive(true);

    }

    function resetCountdown(){
        clearTimeout(countdownTimeOut);
        setIsActive(false);
        setTime(25 * 60);
        setHasFinished(false);
    }

    useEffect(()=>{
        if(isActive && time > 0){
            countdownTimeOut =  setTimeout(()=>{
                setTime(time-1);
            },1000)
        } else if(isActive && time == 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]);

    return(
        <CountdownContext.Provider value = {{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown,
        }}>
            {children}
        </CountdownContext.Provider>
    );
}
