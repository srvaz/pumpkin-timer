import React, { Component } from 'react';
import { Card, CardContent, IconButton, LinearProgress, Typography } from '@material-ui/core';
import {
  Pause as PauseIcon,
  PlayArrow as PlayArrowIcon,
  Replay as ReplayIcon,
} from '@material-ui/icons';
import * as moment from 'moment';

import './styles.scss';
import { normalizeNumber } from '../../utils/numbers';

export default class Timer extends Component {
  state = {
    color: 'primary',
    limit: null,
    minutes: 0,
    percentage: 0,
    seconds: 0,
    started: false,
  };

  timerInterval = null;

  componentDidMount() {
    this.resetTime();
    const { color } = this.props;

    if (color) this.setState({ color });
  }

  resetTime = () => {
    this.pauseTimer();
    const duration = moment.duration(parseInt(this.props.minutes), 'minutes');
    const [minutes, seconds] = [
      duration.minutes(),
      duration.seconds()
    ];

    this.setState({ minutes, seconds, started: false, percentage: 0, limit: null });
  };

  toggleTimer = () => {
    const { started } = this.state;

    started ? this.pauseTimer() : this.startTimer();

    this.setState({ started: !started });
  };

  countDown = () => {
    const limit = this.state.limit ? this.state.limit : moment().add(this.props.minutes, 'm');
    this.setState({ limit });

    this.timerInterval = setInterval(() => {
      const now = moment();
      const diff = limit - now;
      const dist = moment.duration(diff);
      const [minutes, seconds] = [
        dist.minutes(),
        dist.seconds(),
      ];

      if (diff >= 0) {
        this.setState({ minutes, seconds, percentage: this.calcPercent(diff) });
      } else {
        this.resetTime();
        clearInterval(this.timerInterval);
      }
    }, 100);
  };

  calcPercent = currentTime => ((60000 - currentTime) / 60000) * 100;

  startTimer = () => {
    const countDownEnd = new Date();
    countDownEnd.setMinutes(
      countDownEnd.getMinutes() + parseInt(this.props.minutes)
    );

    this.countDown();
  };

  pauseTimer = () => {
    clearInterval(this.timerInterval);
  };

  render() {
    const {
      color,
      minutes,
      percentage,
      seconds,
      started,
    } = this.state;

    return (
      <Card className='timer-card' variant='elevation' raised='true'>
        <CardContent>
          <LinearProgress
            className='timer-progress'
            variant='determinate'
            value={percentage} color={color} />
          <Typography className='timer-time' variant='h1' component='h5'>
            {normalizeNumber(minutes)}:{normalizeNumber(seconds)}
          </Typography>
          <IconButton
            onClick={this.resetTime}
            aria-label='Restart'
          >
            <ReplayIcon />
          </IconButton>
          <IconButton
            id='js-icon-button'
            onClick={this.toggleTimer}
            aria-label='Play/Pause'
          >
            {started ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
        </CardContent>
      </Card>
    );
  }
}
