import React, { Component } from 'react';

import './styles.css';
import { normalizeNumber, dateToTime } from '../../utils/numbers';

export default class Timer extends Component {
  state = {
    minutes: 0,
    seconds: 0,
    started: false,
  };

  timerInterval = null;

  componentDidMount() {
    this.resetTime();
  }

  resetTime = () => {
    const now = new Date();
    const startTime = now.getTime();
    const endTime = now.setSeconds(now.getSeconds() + parseInt(this.props.seconds));

    const { minutes, seconds } = dateToTime(startTime, endTime);

    this.setState({ minutes, seconds });
  }

  toggleTimer = () => {
    const { started } = this.state;

    started ? this.stopTimer() : this.startTimer();

    this.setState({ started: !started })
  }

  countDown = (countDownEnd) => {
    this.timerInterval = setInterval(() => {
      const now = new Date().getTime();

      const { distance, minutes, seconds } = dateToTime(now, countDownEnd);

      if (distance >= 0) {
        this.setState({ minutes, seconds });
      } else {
        this.setState({ minutes, seconds });
        clearInterval(this.timerInterval);
      }
    }, 1000)
  };

  startTimer = () => {
    const countDownEnd = new Date();
    countDownEnd.setSeconds(countDownEnd.getSeconds() + parseInt(this.props.seconds));

    this.countDown(countDownEnd.getTime());
  };

  stopTimer = () => {
    clearInterval(this.timerInterval);
    this.resetTime();
  };

  render() {
    const { minutes, seconds, started } = this.state;
    return (
      <article className="timer-container">
        <div className="timer-count">
          {normalizeNumber(minutes)}:{normalizeNumber(seconds)}
        </div>
        <button onClick={this.toggleTimer}>
          {started ? 'Stop' : 'Start'}
        </button>
      </article>
    );
  }
}
