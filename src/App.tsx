import { useState, ChangeEvent } from 'react';
import './App.css';
import logo from './assets/logo.png';

function App() {
    const [percentage, setPercentage] = useState<number>(60);
    const [flour, setFlour] = useState<number>(300);
    const handlePercentage = (e: ChangeEvent<HTMLInputElement>) => {
        const perc = parseInt(e.target.value);
        if (perc > 80) {
            setPercentage(80);
        } else {
            setPercentage(parseInt(e.target.value));
        }
    };
    const handleFlour = (e: ChangeEvent<HTMLInputElement>) => {
        setFlour(parseInt(e.target.value));
    };
    const perCent = flour / 100;
    const water = perCent * percentage;
    const yeast = perCent * 1;
    const oil = perCent * 3;
    const salt = perCent * 2;

    const remainingFlour = flour - water;
    return (
        <>
            <img className="logo" src={logo} alt="pizza logo" />
            <div className="ingredientBox">
                <label>
                    Percentage:{' '}
                    <input
                        type="number"
                        onChange={handlePercentage}
                        value={percentage}
                    />
                    %
                </label>
                <label>
                    Flour:{' '}
                    <input type="number" onChange={handleFlour} value={flour} />
                </label>
                <p>Yeast: {yeast}</p>
                <p>Water: {water}</p>
                <p>Oil: {oil}</p>
                <p>Salt: {salt}</p>
                <p>Remaining flour: {remainingFlour}</p>
            </div>
        </>
    );
}

export default App;

// oil is 3% of flour weight
// wather is 70% of flour weight
// Salt: 2% of the flour weight.
// Yeast: 0.5% to 1% of the flour weight for active dry yeast or instant yeast.
