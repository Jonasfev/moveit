import { useContext } from "react";
import styles from "../style/components/CompletedChallenges.module.css";
import { challengeContext } from './../context/challengeContext';


export function CompletedChallenges(){
    const {challengesCompleted} = useContext(challengeContext);
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafio Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}