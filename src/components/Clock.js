//Clock.js
import React from 'react'

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
//リアルタイム時刻を表示させる処理
    render() {
      return (
        <div>          
          現在時刻 {this.state.date.toLocaleTimeString()}
        </div>
      );
    }
  }
  

export default Clock;