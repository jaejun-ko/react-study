import React, { useState } from 'react';

const Say = () => {
    const [message /* 현재 상태 */, setMessage /* 상태를 바꿔주는 함수 */] = useState('' /* 초기값, 클래스형 컴포넌트와 다르게 반드시 객체가 아니어도 됨 */);
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히 가세요!');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{message}</h1>
            <button style={{color: 'red'}} onClick={() => setColor('red')}>
                빨간색
            </button>
            <button style={{color: 'green'}} onClick={() => setColor('green')}>
                초록색
            </button>
            <button style={{color: 'blue'}} onClick={() => setColor('blue')}>
                파란색
            </button>
        </div>
    );
}

export default Say;