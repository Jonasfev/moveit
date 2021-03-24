import { useContext } from 'react';
import styles from '../style/components/Profile.module.css';
import { challengeContext } from './../context/challengeContext';

export function Profile(){
    const {level} = useContext(challengeContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Jonasfev.png" alt="Jonas Félix"/>
            <div>
                <strong>Jonas Félix</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}