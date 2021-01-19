import React, { Component } from 'react'

class Counter3 extends Component {
    // state 의 초기값 설정하기
    state = {
        number: 0
    };
    render() {
        const { number } = this.state; // state 를 조회할 때는 this.state 로 조회합니다.
        return (
            <div>
                <h1>{number}</h1>
                <button
                    onClick={() => {
                        this.setState({number: number + 1}, 
                            () => {
                                console.log('방금 setState 가 호출되었습니다.');
                                console.log('number=' + this.state.number);
                            });
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter3;