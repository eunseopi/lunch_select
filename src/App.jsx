import { useState } from 'react';
import './App.css';

const App = () => {
    const [foodList, setFoodList] = useState([]);
    const [newFood, setNewFood] = useState('');
    const [spinResult, setSpinResult] = useState('');
    const [spinning, setSpinning] = useState(false);


    const addFood = () => {
        if (newFood) {
            setFoodList([...foodList, newFood]);
            setNewFood('');
        }
    };

    const deleteFood = (index) => {
        const updatedList = foodList.filter((_, i) => i !== index);
        setFoodList(updatedList);
    };

    const spinWheel = () => {
        if (foodList.length > 0 && !spinning) {
            setSpinning(true);
            const randomIndex = Math.floor(Math.random() * foodList.length);

            setTimeout(() => {
                setSpinResult(foodList[randomIndex]);
                setSpinning(false);
            }, 4000);
        }
    };

    return (
        <div className="App">
            <h1>점심 음식 추천 앱</h1>

            <div>
                <input
                    type="text"
                    value={newFood}
                    onChange={(e) => setNewFood(e.target.value)}
                    placeholder="음식점 이름을 입력하세요"
                />
                <button onClick={addFood}>추가하기</button>
            </div>

            <div>
                <h2>음식점 리스트:</h2>
                <ul>
                    {foodList.map((food, index) => (
                        <li key={index}>
                            {food}
                            <button className="delete" onClick={() => deleteFood(index)}>삭제</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <div className={`wheel ${spinning ? 'spin' : ''}`}>
                    {spinning ? '룰렛 돌리는 중...' : spinResult || '음식점 추천!'}
                </div>
                <button onClick={spinWheel}>룰렛 돌리기</button>
            </div>
        </div>
    );
};

export default App;
