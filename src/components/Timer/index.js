import React, { Component } from 'react';
import { Card, CardContent, IconButton, Typography } from '@material-ui/core';
import {
  PlayArrow as PlayArrowIcon,
  Stop as StopIcon,
} from '@material-ui/icons';

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
    const endTime = now.setMinutes(
      now.getMinutes() + parseInt(this.props.minutes)
    );

    const { minutes, seconds } = dateToTime(startTime, endTime);

    this.setState({ minutes, seconds });
  };

  toggleTimer = () => {
    const { started } = this.state;

    started ? this.stopTimer() : this.startTimer();

    this.setState({ started: !started });
  };

  countDown = (countDownEnd) => {
    this.timerInterval = setInterval(() => {
      const now = new Date().getTime();

      const { distance, minutes, seconds } = dateToTime(now, countDownEnd);

      if (distance >= 0) {
        this.setState({ minutes, seconds });
      } else {
        this.resetTime();
        clearInterval(this.timerInterval);
      }
    }, 1000);
  };

  startTimer = () => {
    const countDownEnd = new Date();
    countDownEnd.setMinutes(
      countDownEnd.getMinutes() + parseInt(this.props.minutes)
    );

    this.countDown(countDownEnd.getTime());
  };

  stopTimer = () => {
    clearInterval(this.timerInterval);
    this.resetTime();
  };

  render() {
    const { minutes, seconds, started } = this.state;

    return (
      <Card className='timer-card' variant='outlined'>
        <CardContent>
          <Typography variant='h5'>
            {normalizeNumber(minutes)}:{normalizeNumber(seconds)}
          </Typography>
          <IconButton
            id='js-icon-button'
            onClick={this.toggleTimer}
            aria-label='Play/Stop'
          >
            {started ? <StopIcon /> : <PlayArrowIcon />}
          </IconButton>
        </CardContent>
      </Card>
    );
  }
}
