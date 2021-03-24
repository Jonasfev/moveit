import styles from '../style/components/LevelUpModal.module.css' 
import { useContext } from 'react';
import { challengeContext } from './../context/challengeContext';

export function LevelUpModal(){
    const{level, closeLevelUpModal} = useContext(challengeContext);
    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>

                <button type = 'button' onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar modal"/>
                </button>
            </div>
        </div>
    );   
}