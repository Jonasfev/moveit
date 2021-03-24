import { useContext } from 'react';
import styles from '../style/components/ChallengeBox.module.css';
import { challengeContext } from './../context/challengeContext';
import { CountdownContext } from './../context/countdownContext';

export function ChallengeBox(){
    const {activeChallenge, resetChallenge, completedChallenge} = useContext(challengeContext);
    const{resetCountdown} = useContext(CountdownContext);

    function handleChallengeSucceeded(){
        completedChallenge();
        resetCountdown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }

    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} exp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button 
                        type="button"
                        className={styles.challengeFailButton}
                        onClick={handleChallengeFailed}

                        >
                            Falhei
                        </button>
                        <button 
                        type="button"
                        className={styles.challengeSucceededButton}
                        onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ):(
            <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Avançe de level completando desafios
                </p>
            </div>
            )}
            

        </div>
    );
}