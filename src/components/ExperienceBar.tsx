import { useContext } from 'react';
import styles from '../style/components/ExperienceBar.module.css';
import { challengeContext } from './../context/challengeContext';

export function ExperienceBar(){
    const {currentExperience, experienceToNextLevel} = useContext(challengeContext);
    const percentToNextLevel = Math.round(currentExperience *100) / experienceToNextLevel;
    return (
        <header className={styles.experienceBar}>
            <span>0 exp</span>
            <div>
                <div style={{width:`${percentToNextLevel}%`}}></div>
                <span className={styles.currentExperience} style={{left:`${percentToNextLevel}%`}}>{currentExperience} Exp</span>
            </div>
            <span>{experienceToNextLevel}Exp</span>
        </header>
    );
}