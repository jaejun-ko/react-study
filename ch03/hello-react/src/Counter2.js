import React, { Component } from 'react'

class Counter2 extends Component {
    // state 의 초기값 설정하기
    state = {
        number: 0,
        fixedNumber: 0
    };
    render() {
        const { number, fixedNumber } = this.state; // state 를 조회할 때는 this.state 로 조회합니다.
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    // onClick 을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
                    // onClick={() => {
                    //     // this.setState 를 사용하여 state 에 새로운 값을 넣을 수 있습니다.
                    //     this.setState({number: number + 1})
                    //     this.setState({number: this.state.number + 1})
                    // }}
                    onClick={() => {
                        this.setState(prevState => {
                            return {number: prevState.number + 1};
                        });
                        this.setState(prevState =>({number: prevState.number + 1}));
                    }}
                >
                    +2
                </button>
            </div>
        );
    }
}

export default Counter2;