import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BodyMuscleCouple from './BodyMuscleCouple';

import { selectMuscle } from '../../actions/index';

class BackBody extends Component {
  shouldComponentUpdate(nextProps) {
    return (nextProps.muscles !== this.props.muscles);
  }


  buildBodyMuscleSVG = () => {
    const backMuscles = this.props.muscles.filter(muscle => muscle.view === "back");
    return backMuscles.map((muscle) => {
      return (<BodyMuscleCouple
        muscleName={muscle.name}
        key={muscle.name}
        muscleRightSVGPath={muscle.svgPathRight}
        muscleLeftSVGPath={muscle.svgPathLeft}
        muscleRightForce={muscle.forceRight}
        muscleLeftForce={muscle.forceLeft}
      />);
    });
  }

  render() {
    return (
      <div className="back-body">
        <svg width="100%" viewBox={this.props.backBodyViewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="back">
            <path id="Vector" d="M679.428 1.892c-21.3 1.8-40.4 7-61.8 16.8-24.2 11-42.3 23.1-58.1 39-20.6 20.8-32.4 42.1-39.8 72.1-4.7 19.4-6.2 31.5-6.8 56.2-.8 31.6 1.9 57.2 10.3 98 1.9 9.1 3.4 17.6 3.4 18.7 0 3.5-2.2 7.1-5.6 9.2-9.2 5.6-13 39.5-7 62.2 2.9 11.2 7.5 22.4 13.7 33.4 10.3 18 18 19.7 32.7 7.2 4-3.4 7.4-6 7.6-5.8.2.2 1.2 4.9 2.1 10.3 1.6 8.6 1.7 13.3 1.1 34.6-.6 20.8-.4 25.9.9 32.6 2.2 10.5 6.3 20.5 13 31.8 6.4 10.6 6.9 13.9 2.8 17.8-3.7 3.4-42.7 23.7-112.8 58.4-62.2 30.8-75.2 38.4-89.5 52.1-4.6 4.3-10.2 10.6-12.6 13.9-11.7 16.4-23.7 50.9-29 83.4-1.3 8.1-1.8 18.2-2 44.3-.3 37-.4 37.8-6.4 46.7-14.9 22.1-27.9 50.8-35.6 78.8-6 21.9-8.8 37.6-13.4 73.7-2.9 22.298-10 46.698-19.1 64.798-2.8 5.5-9.2 16.6-14.2 24.6-17.7 28.3-34 63.7-45.5 99.1-4.6 14.2-26.5 92.1-53.7 191.5-5.9 21.4-11.9 41.4-13.3 44.3-4 8.2-10.8 14.5-21 19.2-19.8 9.4-27.1 13.4-34.9 19.3-4.5 3.4-13 9.9-19 14.5-14.5 11.1-23.2 15.4-39.4 19.7-22.5 6-28.5 10.2-26 18.4 1.3 4.6 8.2 11.8 13.5 14.2 5.7 2.6 14.4 2.4 30-.6 7.1-1.4 13.2-2.3 13.4-2 .3.2-10.2 20.2-23.2 44.4-18.9 35-23.8 44.9-24.3 48.8-1 9 3.9 14.3 13.2 14.3 6.1 0 9.1-1.7 15.5-8.7 4.8-5.2 33.6-43 35.8-46.9.6-1.1 1.4-1.4 2.4-.8 1.4.8 1.3 1.9-.8 8.9-2.9 9.7-5.1 14.3-15 31-8.9 15.1-14.9 28-19.4 42-4.3 13.5-4.8 19-2.2 24.1 3 5.9 5.7 7.9 10.7 7.8 7.4-.2 12.2-3.7 19.8-14.9 8.7-12.6 16-27.5 29-58.8 5.7-13.7 10.8-24.8 11.3-24.7 1.4.1 2.5 5.2 1.8 8.5-.4 1.6-2.8 9.7-5.4 18-5 15.5-9.8 31.8-13.1 44-1.1 4.1-1.9 10.4-1.9 15.3 0 8.2 0 8.2 3.3 10.3 2.4 1.5 4.4 1.9 8.2 1.6 4.4-.4 5.4-1 9.6-5.6 2.8-3 6.9-9.4 10.1-15.8 13.4-27.1 37.3-72.2 37.9-71.5.3.4-1.3 8.6-3.7 18.2-5.3 21-9.4 40.9-9.4 45.3 0 3.8 3 9 6.5 11.3 4.5 3 16.3-.5 19.8-5.9.9-1.4 2.8-6.7 4.2-11.8 6.5-23 19.1-64.9 24.5-81.4 8.1-24.7 10.8-36 12.1-50 1.9-20.5 3.2-25.6 9.3-36.4 8.5-14.9 9.6-18.9 10.6-38.1.8-16.6 2-22.3 6.4-30.8.9-1.7 8.5-14.3 16.9-27.9 28-45.3 75-122.6 82.5-135.8 18.3-32.1 30.7-61.9 38.7-93 4-15.6 6-27.2 8-46.4 2.5-23.8 4.8-31.5 21.5-72.1 16.1-38.998 20.5-52.498 31.9-96.898 3.3-12.8 6.2-23.5 6.5-23.8 1-1 1.7 8.8 2.6 36.2.5 16.5 1.6 33.8 2.5 40 2.5 16.698 9.5 49.998 21.7 102.998 8 34.7 11.1 49.9 11.2 55 .1 3.8-1.1 14-2.6 22.5-4.9 27.5-7.7 61.5-7.8 94 0 15.8-2.4 26.4-9.8 43.5-3.3 7.7-7.4 18-9.1 22.9-10.2 28.8-21.2 81.9-24.6 118.1-1.9 20.5-3.1 28.1-9 54-11 48-13.4 61.5-15.9 89-3 32.1-4 58.1-4 109-.1 58-.6 50.2 8.9 133 14.4 125.4 17.4 165.7 14.6 200.4-.6 8.1-2.5 31.5-4.1 52.1-5 62.8-6 68.4-26.4 152.5-12 49.3-15.4 79.9-14.3 130 .7 31 2 46.6 8.3 98 6.9 57.1 9.7 90.8 12.4 152.5.5 12.9 1.2 27.4 1.5 32.1.3 4.8.3 15.4-.1 23.6l-.7 14.9-5.7 1.1c-6.5 1.2-17.8 6.6-26.5 12.7-3.3 2.3-8.1 4.9-10.6 5.9-7.6 2.9-10.9 7.8-10.9 16.1 0 4 .5 4.8 7 11.3l7 7v10c0 16.6 4.9 28.3 17.7 42.4 4.2 4.6 10.7 13.1 14.6 18.9 11.6 17.2 21 26 32.5 30.2 7.7 2.9 30.3 3.1 40.2.4 9.6-2.6 17.7-7.2 20.9-12 4.8-7 5.3-10 4.9-29.3-.3-16.6-.2-18.1 1.8-21.8 13.3-25.2 16.2-31.6 17.4-38.6 1.7-9.7.8-37-2.6-80.4-2.1-27.1-2.5-36.7-2-53.5 1.1-39.6 5.8-62.6 21.3-104 17.3-46.1 27.3-86.2 39.7-159 5.3-30.9 7.6-49.2 11.1-90.7 2.8-33.6 3.6-39 7-47.8 2.4-6.4 17-36.3 19.7-40.5 2.5-3.9 4.5-11.8 8.3-32.5 5.1-28.5 4.9-27 26.4-202.5 11.1-89.9 23.9-193.9 28.5-231 4.7-37.1 9.3-76.4 10.3-87.4 2-22.9.6-20.6 14.8-23.3 9.5-1.8 22.5-1.3 30 1.3 2.8.9 5.1 1.8 5.2 1.8.1.1 1.1 10.3 2.3 22.6 1.1 12.3 6.3 56.2 11.5 97.4 5.2 41.3 18 145.1 28.5 230.6 10.4 85.5 20.2 162.5 21.6 171 4.3 25.8 8.3 45.1 10.4 49.4 1.1 2.3 5.9 11.7 10.6 21.1 8.6 17 11.6 24.1 13.5 32.3.5 2.4 2.3 19.7 3.9 38.5 3.9 43.7 5.2 54.3 10.6 87.1 12.4 74.5 24.8 123.5 42.3 167.4 8.8 22.1 14.7 46 17.7 72.2 2 17.5 1.4 59.6-1.1 86-.8 9.1-1.8 29.1-2.2 44.5-.7 33.6-.9 32.6 11.5 56.8l8.7 16.8-.4 8.2c-1.1 20.2-.7 27.9 1.7 32.9 4.5 9.1 13.7 14.7 28.9 17.3 16.6 2.9 31.8 1.3 41.8-4.4 8.402-4.8 15.002-11.6 23.602-24.3 4.5-6.7 11.1-15.3 14.6-19.1 15-16.3 20.8-29.9 20.1-47.3l-.3-7.4 6.8-6.8c6.6-6.6 6.7-6.8 6.7-12.1 0-8.7-3.9-14.2-11.9-16.6-1.3-.4-6.1-3.2-10.7-6.2-10.6-6.9-20.3-11.3-26.5-12l-4.9-.6v-22.1c0-12.2.9-39.4 2-60.6 3.3-64.5 4.8-82.2 11.5-137 7.1-58.1 7.7-65.6 8.2-103.7.9-59.9-1.2-76.2-18.6-148-14.402-59.3-17.302-76-21.102-124.6-1.1-14.3-2.7-34.5-3.6-45-2.3-29.4-2.8-50.6-1.5-68.2 1.6-22.4 9.3-97.8 14.602-143 10.5-89.5 11.4-105.7 9.7-164.2-2.5-80.6-5-104.2-16.802-155.4-8.7-38.2-10.3-46.8-12.4-68.8-5-50.5-17.6-104.2-32.5-138.6-10-23.2-10.4-25.1-11.5-61-.9-33.5-2.8-52.8-7.6-81.5-2-11.9-3.2-21.7-2.8-23.5.3-1.6 5.5-24.6 11.5-51 12.8-55.8 21.4-97.998 22.8-111.498.6-5.2 1.3-19.4 1.6-31.5.7-26 1.4-36.5 2.5-36.5.4 0 2.4 6.6 4.4 14.7 11.6 46.7 17.7 65.4 33.802 104.798 17 41.4 19.6 50.3 21.9 73.5 4.4 46.8 19.6 91.6 47.2 139.7 7.5 13 56.1 92.9 83.2 136.8 8.1 13.2 15.8 26.3 17.1 29.1 3.4 7.6 5.3 18.6 5.2 29.9-.2 15 1.7 20.9 12.5 39.5 3.6 6.2 5.4 14.2 6.7 28.8 1.3 16.2 3.5 25.5 11.5 50.2 5.4 16.8 19.8 65 26.9 90 1.8 6.5 5.3 10.3 11.5 12.5 5.4 1.9 7.4 1.9 11.1 0 6.1-3.1 7.3-9.7 4.4-24.5-1.9-10-10-43.7-11.4-47.4-.7-1.9-.6-2.6.3-2.6 1.3 0 5.7 8.3 29 53.7 14.9 29.1 18.8 35.3 24 37.9 4.1 2.2 11 1.4 14.4-1.7 2.4-2.3 2.5-2.7 2-10.9-.6-8.8-4.3-22.8-15.3-57.8-3-9.5-5.4-19-5.4-21 0-3.5 1.4-7.2 2.3-6.2.2.3 4.6 10.6 9.7 23 15.8 38.2 27 59.6 36.9 70.3 7.8 8.5 18.7 8.3 23.2-.5 3.2-6.1 2.8-11.4-1.6-24.8-5.4-16.5-9.5-25.2-20.8-44.8-7.1-12.3-10.8-20.1-12.9-26.5-4.2-13.5-2.7-15.4 4.3-5.5 16.7 23.9 35.5 46.9 40.2 49.1 7.3 3.5 17.4 1.2 19.7-4.4.7-1.6 1.1-5.2.8-8.2-.4-4.5-3.6-11-24.1-49.1-13-24.2-23.5-44.1-23.3-44.3.2-.2 6.1.8 13.2 2.2 22 4.3 31.5 2.8 39.2-6 6.2-7 6.8-12.1 2-16.9-3.4-3.3-8.1-5.1-29.8-11.1-10.8-3-20.1-7.9-32.1-17.1-29.4-22.6-34.5-25.9-47.7-31-14.5-5.7-23.4-12.9-28.1-22.7-1.1-2.3-12-40.2-24.1-84.2-40.7-147.5-42.7-154.3-53.7-182-10-25.3-20.8-46.5-35.9-70.7-19.6-31.4-27.7-54.6-32.9-94.998-8.2-63.6-21.3-103.6-46.5-142.3-7.9-12-8.3-14.4-7.5-39.5 1.3-40.8-4.1-75.8-16.9-108.4-8.1-20.8-13.7-29.9-25.7-41.7-14.3-14.2-33.802-25.7-86.402-51.1-36.5-17.5-111.6-56-116.2-59.5-4.9-3.6-5.2-6.7-1.5-13.3 7.1-12.2 13.3-25.9 15.3-33.5 1.7-6.5 2.1-10.4 1.9-21-.8-36.5.2-54.9 3-59.5.6-1 2.3 0 6.7 4 16.2 14.8 24.2 12 37.2-13 9.6-18.5 13.6-35.9 12.8-55.5-.8-18.7-3.7-28.7-9.4-33.1-6.5-5-6.7-6.9-2.8-26.6 8.4-41.3 10.9-62 10.9-90.8.1-51-9.8-88.7-31.2-119-7.8-11-27.6-31.4-37.6-38.8-16.7-12.2-33.3-19.7-57.1-25.7-35.4-9-65.7-12-94.7-9.4zm49.7 13.4c27.7 3.2 47.1 8.5 69.2 19 32.8 15.6 56.1 37.7 70.7 67.2 11.5 23 19.2 58.1 20.3 91.9 1.2 38.2-4.3 68.8-20.7 115-17.7 49.6-25.2 64.6-41.5 83.7-12 13.9-32.5 29-46 33.8-3.3 1.2-13.6 3.4-23 5-11.5 2-18.7 3.8-22.2 5.5-14.5 7-18 20.7-17 65.4.6 23.4 1.1 30.5 5.7 69.5 1.9 15.9 13.4 101.6 14.5 107.9.5 2.9-1.1 10.1-7.5 32.8-4.9 17.4-6.9 34.4-11.5 97.3-1.8 23.8-3.7 110.6-3.9 175.5l-.1 43.498 2.9 13.5c4.3 20.4 2.6 28.8-8.1 40.8l-4.8 5.4-5.3-6.6c-9.6-11.7-11.2-20.8-7.1-40.2 2.6-12.8 4-33.3 3.3-50.898-.3-7.7-.9-44.4-1.4-81.5-.9-64.2-1.9-87.9-5.5-132-3.7-45.2-4-46.8-12.5-77.5-5-17.7-5.1-13.1 1.9-63.5 11.1-79.4 14.5-112.9 14.5-143 0-48.4-5.1-56.8-37.4-61.5-6.3-.9-14.8-2.5-18.8-3.6-24.1-6.4-52-30.2-68.4-58.2-7.4-12.7-22.9-51.6-32.5-81.7-15.4-48.6-17.9-93.7-7.7-142.4 10.9-52.3 33.6-82.9 79.4-106.9 24.6-13 47.8-21.2 66.5-23.6 11.4-1.4 40-1.2 54 .4zm-194.2 313.7c4.4 11.1 12.3 26.8 23.2 46.3 5.8 10.4 10.7 19.4 10.8 20 .1.5-2.2 1.8-5.2 2.8-8.2 2.7-13.3.4-17.6-8.1-1.2-2.4-5.4-22.2-5.5-26 0-.1-.6-.2-1.4-.2-4.4 0-3 21.2 2.3 32.5 1.5 3.4 4.2 7.6 5.8 9.5 4.7 5.5 2.1 8-4.2 4.1-5.3-3.2-15.6-26.4-18.9-42.5-4.1-19.8-3-35.4 2.9-41.3 1.8-1.8 3.7-3.3 4.3-3.3.5 0 2.1 2.8 3.5 6.2zm350.6-3.1c4.5 4.4 5.4 9.3 4.8 24.4-.7 16.9-3.8 28.9-11.5 45-6 12.4-9.7 16.9-13.6 16.3-3.1-.5-2.9-2 1.3-7.6 6.3-8.3 8.3-14.8 8.9-28.5.4-10.1.2-11.7-1.1-11.7-2.2 0-2.4.5-4.2 11.4-2.3 14.7-5.3 20.3-12.3 23.3-3.5 1.5-9 .6-12.6-2-1.7-1.3-1.3-2.3 7.3-17.6 8-14.1 23.1-43.2 23.1-44.4 0-1.5 5.2-11.7 5.9-11.7.5 0 2.3 1.4 4 3.1zm-295.8 87.8c2.4 1.5 5.7 4.2 7.2 5.9 5.4 5.7 5.5 6.8 3 43.3-1.2 18.4-2.5 35.9-2.9 38.9l-.6 5.5-3-3.5c-1.6-1.9-4.2-6.2-5.7-9.5-5.5-11.6-5.8-15.3-5.3-59.8.1-18.7.5-23.7 1.5-23.7.7 0 3.3 1.3 5.8 2.9zm240.9 29.3c0 35.1-.7 41.7-5.5 51.4-3.3 6.8-8.3 13.1-8.9 11.3-.3-.8-1.7-18.6-3.2-39.6l-2.7-38.2 2.7-4.5c2.7-4.6 6.6-8.2 12.1-11 5.7-3 5.5-4.3 5.5 30.6zm-210.1-8.1c7.2 2.5 8.1 3.4 8.1 8.3 0 4.2-4.2 37.8-6 47.6-2.3 12.8-7.2 26.8-10 28.5-.7.4-1-13.9-1-43.5 0-41.7.1-44.2 1.8-43.5.9.4 4.1 1.6 7.1 2.6zm179.9 63.1l-.3 22.3-3.1-6.5c-4.1-8.5-5.9-15.8-8.9-37-3.6-24.8-4.5-34.8-3.5-37.5.7-1.7 2.7-2.9 8.2-4.7l7.3-2.5.3 21.9c.1 12 .1 31.8 0 44zm-149.6-57.4c4.8 1 8.9 2 9.3 2.3.6.7-24.8 50.6-26.6 52.4-.7.7-.9-.4-.5-3.5.4-2.5 1.3-12.8 2.1-23 2.5-30.5 2.4-30 4.8-29.9 1.2 0 6.1.8 10.9 1.7zm126.5 24.7c1.3 14.3 2.2 27.1 2 28.5-.1 1.7-4.2-5.4-13.8-24-7.6-14.6-13.5-26.7-13.3-26.9.8-.8 17.1-3.9 19.9-3.8l3 .2 2.2 26zm-102-15.3c5.3 5.8 7.3 13.8 8 31.3.6 16.7-1.9 43.5-7.2 76-1.8 11.5-4.1 27.1-5 34.5-1.8 14.2-4.7 34-9 60.5-3.3 19.9-3.4 32.1-.4 42.5 9.1 32.3 10.4 39.9 13.9 82 4 48.3 5.9 94.5 6 141.5.1 27 1.1 58.4 2.6 85.298.7 12.2-.9 30.4-3.2 35.9-2.7 6.6-4.2 5-19.7-20.5-33.7-55.198-60.9-105.998-85.2-158.698-23.9-52.1-32.3-76.6-43.5-128.5-5.9-26.9-12.4-50-16.9-59.6-8.2-17.4-24.5-36.5-41-47.8l-8.3-5.8 11.8-7c29.7-17.5 40.2-23.3 74.9-41 42.4-21.7 49.7-25.9 60.5-34.6 20.5-16.4 35.4-37.2 49.3-69.2 5.6-12.8 8.8-19 9.8-19 .3 0 1.5 1 2.6 2.2zm71 9.5c3 6.5 7.4 15.8 9.7 20.8 8.8 18.6 24.3 40 36.7 50.6 14.8 12.5 20.9 16.2 71.4 42.1 31.2 15.9 81.5 44.2 81.5 45.7 0 .4-3.6 3.1-7.9 6-8.9 6-23.3 20.2-30.6 30.1-6.3 8.6-11.6 19.3-15.3 31.1-3.4 10.4-11.1 41.3-13.7 54.9-8.9 45.3-26.7 91.7-63.1 164-21.3 42.3-38.1 72.5-64.1 115.198-12.9 21-14.8 23.6-16.4 22.7-3.1-1.6-4-4.6-5.6-18.2-1.3-11.7-1.3-14.9.1-31.598 1-11.6 1.6-29.7 1.6-48.1 0-50.7 2-109.8 5-150 4.1-53.3 6.6-71.1 12.9-91.1 3.6-11.3 5.1-19.4 5.1-26.8 0-3.1-2-18-4.4-33.1-2.4-15.1-5.4-35.2-6.6-44.5-1.2-9.4-3.9-28-6.1-41.5-2.1-13.5-4.3-29.5-4.8-35.5-.6-6.1-1.5-15.7-2.2-21.5-1.8-16.8.3-37.6 4.7-46.3 1.9-3.8 4.4-6.7 5.6-6.7.5 0 3.4 5.3 6.5 11.7zm-283.9 169.9c14.4 7.2 39 42.3 45.2 64.4 3.1 11 3.8 28.1 1.5 35.1-3.2 9.5-26.1 31.4-48.8 46.6-10.7 7.1-31.1 18-44.7 23.8-9.2 4-61 24.5-61.8 24.5-1 0 .8-50.9 2.3-65 5.6-52.5 14.2-74 39.4-99.1 11.1-11.1 20.6-18.1 33.1-24.4 18.6-9.4 24.7-10.5 33.8-5.9zm515.1 2.7c33.202 15 58.802 42.4 69.502 74.6 6.3 19 10.2 48.2 11.5 85.1.5 12.9.6 25.4.2 27.7l-.6 4.2-25.5-10c-44.702-17.5-65.502-27.7-85.502-41.8-18.7-13.1-38.8-32.5-42.9-41.1-2.8-6.2-2.7-21.9.3-34.5 4.1-17.2 18.4-41.2 34.7-58.1 12.5-12.9 20.4-14.2 38.3-6.1zm-56.4 180.6c-8.3 14.7-17.5 31.1-20.3 36.6-11.1 21.4-30.1 38.5-49.2 44.3-10.3 3.1-14 3.6-14 1.8 0-2.5 8-22.4 20.8-51.6 13.5-31.1 20.1-48.5 24.3-64.6 2.5-9.4 5.9-28 5.9-32.2 0-.6 10.7 7.9 23.8 19l23.8 20.2-15.1 26.5zm-396.2-59.7c2.1 22.5 9.7 45.7 30.5 93.3 9.5 21.9 17.9 42.5 19.7 48.3.6 2.2.5 2.3-3.2 1.7-15.2-2.6-27.4-8.9-39.5-20.4-10-9.5-15.8-17.1-21.1-27.7-2-3.9-10.6-19.4-19.2-34.4-14.9-26.1-15.5-27.5-13.8-29.1 4.3-4.1 44.7-37.9 45.3-37.9.4 0 1 2.8 1.3 6.2zm-59.6 42c4.8 5.3 13.8 20.9 25.6 44.3 13.2 26.3 21.2 39.6 29.1 48.2 5.7 6.3 5.4 6.4-9.3 3.3-10.3-2.1-17.7-5.8-35.1-17.8-16.6-11.3-30.2-22.7-56.3-46.6l-8.8-8.1 25.8-12.7c14.2-6.9 26.1-12.7 26.4-12.7.3-.1 1.5.9 2.6 2.1zm510.5 10.5l26.102 12.8-8.402 7.8c-24.9 23.2-43 38.1-60.9 50-14.9 9.9-22.9 13.5-34.8 15.6l-10 1.8 5.1-6.1c8.9-10.8 16.2-22.9 30.6-51.3 12.1-23.8 23.7-43.3 25.7-43.3.3 0 12.3 5.7 26.6 12.7zm-578.8 20.5c-.4 1.3-2.9 7-5.7 12.8-4.6 9.9-7.4 16.5-26.9 64-9.4 22.9-27.3 59.7-35.2 72.5-3.1 4.9-5.6 8.6-5.6 8.2 0-.5 1.3-8.8 3-18.5 1.6-9.8 5.2-33.2 8-52.2 7.9-53.7 8.9-60 10.6-63.1 1.6-3.2 9.9-7.8 28.9-15.9 6.1-2.6 13.3-5.9 16-7.3 6.4-3.3 7.9-3.4 6.9-.5zm624.102-.2c2.2 1.2 11.2 5.3 20 9.1 18.5 8.1 23.9 11.1 26 14.3 1.9 2.9 2.2 4.6 9.9 56.6 3.7 24.5 7.9 52.1 9.5 61.4 3.2 18.8 3.3 18.7-5 4.7-11.5-19.3-22.1-42-40.6-87.1-6.8-16.8-15.3-36.6-18.7-44-9-19.2-9-19-1.1-15zm-596.202 25.4c11.8 10.9 13.7 13.6 13.7 20.4 0 11.1-11.4 64-19.5 90.7-3.3 10.9-19.9 55.198-27.4 73.398-7.6 18.1-19.3 37.3-34.8 56.6-9.5 11.8-29.5 32.4-30 30.8-.2-.6 4.8-11.8 11.1-24.9 14.5-30.3 19.2-44.3 23.2-69 2.2-13.9 3-50.098 1.5-70.898l-1.3-17 5-12c2.7-6.6 11.7-28.7 20-49 8.3-20.4 16-39.2 17.1-41.9l2.1-4.8 4.8 4.3c2.6 2.4 9.1 8.4 14.5 13.3zm606.302 41.3l20.4 50.1-1.2 9.9c-1.6 13.8-1.6 57.398 0 69.298 4.1 28.4 9.1 44.7 22.9 73.5 5.8 12.1 11.2 23.5 12 25.4l1.4 3.3-2.8-2c-1.6-1.1-7.5-6.8-13-12.5-18.5-19.2-34.5-41.8-44.9-63.2-6.6-13.6-24.7-60.198-30.802-78.998-9.7-29.7-22.5-90-21.1-99.1.5-3.4 1.9-5.3 9.3-12.6 4.8-4.7 12.1-11.6 16.2-15.2l7.502-6.6 1.8 4.3c1.1 2.3 11.1 26.8 22.3 54.4zm-702.102-17c-.3 2.1-1.9 14.5-3.5 27.6-3.4 27.3-14.9 96.4-18.5 111.198-3.3 13.9-11.4 42.7-12.1 43.4-.7.7.3-28.5 1.7-49.4 2.1-31.098 7.3-62.798 14.4-88.498 8.3-29.9 20-58.8 18-44.3zm760.502 7.6c17.5 45.9 26.3 94.3 27.5 152.698l.5 22.5-4-14c-7.7-26.9-10-37.5-17-78.698-6.3-37.2-13.1-85-13-91.8.1-2.4.1-2.4 1.5-.6.8 1 2.8 5.5 4.5 9.9zm-617.202 8c25.5 15.5 30.5 16.6 80.2 18.2 11.3.4 22.2 1.1 24.3 1.6 5.7 1.5 10.2 6.2 16.4 17.3 3.1 5.5 15.2 27 26.8 47.6 46.9 82.798 45.5 80.198 45.5 87.898 0 12-8 30.3-19.7 45.1-9.2 11.7-37.7 40-50 49.8-18.6 14.7-47.5 32.4-62 38.1l-5.2 2-6.5-12.2c-12.1-22.8-22-46.3-28.2-66.5-5.8-19.1-27.9-132.798-31.9-163.998-2.3-17.7-5.5-56.3-5.5-66 0-9.7-1.9-9.8 15.8 1.1zm484.2-6.1c0 16.4-5.7 72.1-10 97.8-3.5 20.298-19.8 104.098-23.6 120.998-5.3 23.2-17.5 54.5-31.9 81.6-3.6 6.8-6.9 12.6-7.4 12.8-1.3.8-27.2-12.4-39.1-19.9-29-18.3-56.3-42.6-77.3-69-13.1-16.3-21.9-37.7-20.3-48.9.8-4.8 6.4-15.4 37.1-69.598 11.7-20.6 25.4-44.9 30.5-54 10.5-18.8 13-22.4 17-24.5 3.7-1.9 8.2-2.3 40.5-3.5 38.9-1.5 43.8-2.8 69-18.3 7.7-4.7 14.3-8.6 14.8-8.7.4 0 .7 1.5.7 3.2zm-605.9 110.3c-2.9 39.798-12.5 71.898-41.5 138.498-5.9 13.5-11.1 24.9-11.6 25.4-1.4 1.4-2.5-12-2.4-29.4.1-18 2-34.4 5.8-49.3 2.9-11.4 21.8-59.1 37.4-94.398l11.7-26.5.9 10.4c.5 6.6.4 15.7-.3 25.3zm723.702-8.8c9.9 22.298 27.3 64.498 33.9 82.098 6 16.3 9.8 45.4 9 70.1-.8 25.5-.5 25.5-13-3-24.9-57.2-35.1-87.4-40.3-119.4-1.9-11.6-3.2-57.598-1.6-55.998.5.5 5.9 12.3 12 26.2zm-791.402 80.798c3.6 22.5 4.5 40.8 2.6 59.1-.5 5.5-2.1 24.4-3.5 42.2l-2.6 32.4-19.3 43.6c-22.2 50.1-31 69.1-44.3 95.6-16.2 32.5-45.3 87-47.7 89.4-2 2.1-2.7 2.2-6.7 1.3-2.4-.5-7.7-1.2-11.7-1.6l-7.3-.7 1.9-2.2c4.5-4.8 29.1-47.5 40.1-69.4 12.4-24.8 20.1-43.3 30.1-72.7 3.7-11 10.9-30.4 16-43 17.9-44.6 19.1-49.1 25.1-87.2 3.7-23.3 4.2-28.7 4.1-41.5-.2-17.8 1.1-22.7 9.3-36.8 3.1-5.2 6.8-11.9 8.2-14.7 1.5-2.9 3-5 3.4-4.5.4.4 1.4 5.2 2.3 10.7zm856.302.5c12.3 20.9 14.5 28 13.6 45-.4 8.6 0 14.4 2.6 32 6.6 44.3 8.4 50.9 26.1 95.5 5.9 14.8 12.4 32.2 14.5 38.5 11.7 35.5 25.5 67.2 43.8 100.5 9.8 17.8 24.6 42.3 27.8 45.9l3 3.4-7.8.7c-4.3.4-9.6 1.1-11.8 1.5-2.9.7-4.6.5-6-.4-3.2-2.2-45.9-84-64.8-124.1-14.2-30.2-46.6-103.8-47.2-107.1-.4-2.6-4.2-49.5-6.5-80.4-1.2-16.7.6-40.8 4.7-60.5.4-2.3.8-2.7 1.5-1.5.5.8 3.4 5.8 6.5 11zm-454.602 17.2c8.7 12.2 20.1 25.8 21.4 25.8 1.7 0 9.2-8.7 19.3-22.3l7.9-10.7 5.2 10.1c13.2 25.7 28 45.9 49 67 23.9 23.8 44.3 38.2 78.8 55.5 22 11 31.1 18.3 40.2 32.4 3.6 5.7 10.3 20.1 9.6 20.8-.4.4-23.2-12.4-50.2-28.2-13.1-7.5-21.4-10.1-33.3-10-5.2 0-11.5.6-14 1.3-7.7 2.2-18.5 7.8-22.8 12-7.6 7.4-7.8 8.1-14.2 50.1-3.2 21-6.6 34.7-14.2 58-11.4 34.7-31.1 90.5-36.7 103.7-8.7 20.7-9.5 24.5-9.5 48.8 0 19.1.3 23.3 3.6 45.5 4 26.9 4.8 33 4.3 33-.2 0-3.2-.7-6.7-1.6-3.7-1-10.5-1.7-16.3-1.7-8.7 0-12.5.5-20.9 3-1.8.5-1.8.1-1.2-5.8.4-3.5 2.3-17.4 4.3-30.9 2.9-20.2 3.6-27.4 3.6-41 .1-20.8-1.9-30.7-9.6-48.7-5.8-13.4-22.1-59.1-36.3-101.8-8.8-26.6-13.7-47.7-16.9-73-2.2-18-4-26-6.9-31-9.7-16.5-38.1-24.6-60.1-17.1-4.4 1.5-12.7 5.6-18.5 9-18.6 11.2-46.3 26.7-46.8 26.1-.9-.9 5.1-13.7 9.8-20.9 9.7-14.6 17.8-21.1 41.5-32.9 9.4-4.7 22.1-11.7 28.3-15.6 42.4-26.4 75.2-61.8 97-104.8 3.1-6.2 5.8-11.3 5.9-11.3.1 0 2.5 3.3 5.4 7.2zm-308.8 12.5c-4.6 39.8-11.7 69-22.1 91.5-4.7 10.1-31.1 59.4-47.2 88.3-16.9 30.3-33.9 59.2-48 81.5-20.8 33-21.7 34.4-24.9 40.8-5.1 10-8.9 22.9-9.9 33.2-.6 5.2-.8 9.9-.5 10.3 1.3 2.2-1.3 9.2-5.7 15.3-6.5 8.7-8.3 13.9-11.4 32.4-1.5 9.1-5.4 25.7-9.5 40.3-4.8 16.8-8 30.7-10.1 43.5-4.3 25.8-16.1 70.1-20.5 76.9-2.1 3.1-5.8 3-8.4-.3-2.7-3.5-2.6-6.6.4-17.8 4.8-17.7 12.6-56.9 11.4-58.1-.5-.5-4.1-1-7.9-1-11.1 0-12.6 1.8-25.1 31.5-6.7 15.8-17.6 40.1-23.3 52.1-4.2 8.9-7.3 11.2-10.7 7.8-1.6-1.6-1.8-2.7-1.3-5.7 1.6-9.3 5.3-21.9 15-50.7 5.7-17 10.4-31.2 10.4-31.6 0-.3-3.2-2.8-7.2-5.4-5.4-3.6-7.6-4.5-8.7-3.8-2.7 1.7-14.3 23.1-27.4 50.7-20.9 43.8-25.5 50.4-32.8 46.5-3-1.6-4.1-5.4-2.8-10.2.6-2.3 6.4-14.1 12.9-26.2 19.5-36.2 24.8-47.6 26.5-57.9 2.5-14.6 2.3-16-3.3-21.8l-4.8-5-9.7 10.5c-10.8 11.9-17.8 21.1-28.6 38.1-11.8 18.5-15.5 21.4-20.7 16.5-2.2-2-2.2-2.4-.9-5.6.8-1.9 6.4-12 12.4-22.6 25.4-44.7 62.9-112.4 63.2-114.2.9-4.5-2.9-2.1-8.6 5.6-10.7 14.4-16.5 21.3-19.4 23.2-2.9 1.7-16.8 6.1-34.3 10.7-7.6 2-9.3 2.1-13 1.1-4.8-1.4-7.9-3.6-9.7-7-2.7-4.9 3.4-7.4 20.3-8.6 18.9-1.2 28.4-5.5 43.1-19.5 16.2-15.5 26.7-22.8 46.6-32.5l11.7-5.7 12.3 1.1c12.9 1.2 21.6 3.1 27.5 5.8 3.3 1.6 3.5 1.6 5.3-.3 3.8-3.9 35-64.9 53.8-105.3 16.8-36.2 35.7-79.3 55.5-126.6l18.4-44 35.5-35.2c19.5-19.4 35.7-35.3 36-35.3.3 0 .4 1.2.2 2.7zm699.902 35.1l32.7 32.9 15.5 36.9c38.6 92.3 64.2 148.5 93.4 204.9 20.2 38.8 19 37.2 25.2 34 5-2.6 14.1-4.5 26.6-5.6l12.2-1 9.3 4.4c19.6 9.2 33.2 18.6 49.1 34 14.6 14.1 23.6 17.9 45.9 19.6 12.8 1 16.7 2.3 17.6 5.9.8 3.2-3.7 7.5-9.6 9.3-3.5 1-5.3.9-13.3-1.1-18.8-4.7-33.8-9.7-36.4-12.1-1.4-1.3-7.3-8.6-13.2-16.2-10.1-13.1-13-15.6-12.5-10.8.3 1.9 32.6 60.6 63.8 115.6 6.3 11 11.7 21.2 12 22.6.5 2.1.1 3-1.6 4.3-5.9 4.1-8 2-24.4-22.9-6.2-9.4-15.2-21.4-20.1-26.9-4.9-5.5-10.1-11.3-11.5-13l-2.7-3.1-4.3 4.9c-2.4 2.7-4.7 5.4-5.1 6-.9 1.6.9 17 2.8 23.6 1.9 6.6 11.9 26.7 25.5 51.6 13.9 25.3 15.3 30.5 9.7 34.7-6.1 4.5-11.3-1.3-23.8-26.8-4.3-8.8-12.1-24.8-17.3-35.5-10.5-21.4-18.2-35-20.1-35-2.1 0-14.6 9-14.6 10.5 0 .8 4.9 16.2 10.9 34.2 14.6 43.8 16.4 52.5 11.4 54.4-1.7.6-2.9.3-4.7-1.4-2.5-2.3-13.9-26.4-27.1-57.4-12.9-30.4-15.8-34.3-25.6-34.3-2.6 0-5.8.4-7.2.9l-2.4.9 4.8 22.9c2.6 12.5 5.7 26.6 6.9 31.3 3.4 13 3.9 16 2.8 19.2-1.1 3.1-3.5 4.8-6.7 4.8-1.4 0-2.7-1.3-4-3.9-4.4-8.5-16-52.4-19.1-72.1-3-18.7-4.1-23.5-11-48-3.4-11.8-7.4-28.9-8.9-38-3.3-18.9-5.7-26-11-32.8-5.6-7.1-6.1-8.4-6.1-16.9-.1-15.2-4.7-31.7-13-46.9-2.2-4-8.4-14.2-13.8-22.6-27.5-42.7-63-104.8-96.5-168.8-16.4-31.3-23.9-57.9-29.3-103.4l-.7-5.9 3.4 2.6c1.9 1.4 18.1 17.4 36.1 35.5zm-828.202 16.9c-4.4 35.4-6.5 42.6-22.7 79.3-6.4 14.4-12.8 31.3-19.3 51-5.3 16.2-11.9 34.7-14.4 41-4 9.5-27.2 56-28 56-.2 0 4.5-14.3 10.4-31.8 5.8-17.4 16.1-51.3 22.9-75.2 26.2-92.7 36.5-125 50.2-157.5l3.4-8 .3 10.2c.2 6.9-.7 18.1-2.8 35zm922.802-25.9c12.7 32.2 21.2 59.2 40.2 126.7 14.7 52.2 22.7 78.6 31.9 105.3 3.9 11.1 6.8 20.2 6.6 20.2-.8 0-23.4-44.7-26.8-53-4.5-10.9-11.4-30.8-16.8-48-5-16.2-9.4-27.3-18.7-48.2-8.5-18.8-13.3-31.5-16.1-42.3-4.6-17.3-11.2-80.9-8.3-79.1.6.3 4.2 8.6 8 18.4zm-671.202 53.9c2.5 5.4 6.6 13.9 8.9 18.9l4.3 9.2-10.5 13.3c-5.8 7.4-10.9 13.5-11.3 13.7-1.4.5-2.1-24.1-1-35.8 1.3-14.1 3.7-29 4.6-29 .2 0 2.5 4.4 5 9.7zm421.9 1.8c1.9 11.8 3.1 38.3 2.1 47.8l-.8 6.7-10.9-13.9c-6-7.7-10.9-14.3-10.9-14.7 0-1.8 17.6-37.2 18.2-36.6.3.4 1.4 5.2 2.3 10.7zm-322 64.4c8.1 4 12.8 9.3 15 16.7 2 6.7 9.5 35.6 9.5 36.5 0 .3-8.2.9-18.2 1.3-47.3 1.8-73.3 9.7-96.4 29.3-3.6 3-13.5 14.1-22.1 24.6-18.7 22.8-32.4 38.9-32.9 38.4-.2-.2 1.4-7.3 3.5-15.8 6.3-24.7 22.9-69.9 29.7-80.6 7.9-12.3 16.3-19 36.4-28.5 7.5-3.6 19.7-9.9 27.2-14.1 16.1-9.2 19.1-10.5 26-11.5 7.5-1.1 15.1.2 22.3 3.7zm242.6-2.3c2.5.8 11.5 5.3 20 10 8.5 4.8 22.4 12 30.9 16.1 14.4 7 16 8 23.6 15.6 5.4 5.5 9.2 10.3 11.4 14.7 8 15.8 24 61 28.5 80.3 1.5 6.5 2.6 12 2.4 12.2-.5.4-16.1-17.7-32.6-38-19.6-24.1-29.2-32.3-46.7-40.6-19.1-8.9-48.1-13.8-82.3-13.9h-8.1l4.8-18.8c5.9-23.1 7.3-26.5 11.9-30.1 11.3-8.9 23.5-11.4 36.2-7.5zm-221.7 72.6c2.4 2.5 4 5.9 6.5 13.8 1.7 5.8 5.5 16.3 8.3 23.5 9.3 23.9 13.8 39.6 20.2 70.8 2.8 13.6 4.4 18.9 10 32 8.3 19.4 9.8 26.1 9.8 44.2.1 20.7-3.3 36.1-11.8 53.1-15.1 30.1-53.4 60.8-118.8 95.1-11.1 5.8-27.8 14.8-37.2 19.9-9.4 5.2-17.7 9.4-18.3 9.4-.8 0-1.1-1-.7-2.8.3-1.5 1.1-8.6 1.8-15.7 1.5-15.5 1.6-36.8.4-84-.7-30.5-.6-37.2.9-52 2.9-28.6 1.2-40-8.4-54.8-2.6-3.9-9.1-14.9-14.4-24.2-13.3-23.5-13.4-23.2 3.7-48.9 19.1-28.8 41.8-53.6 60.8-66.4 10.6-7.1 21.3-9.7 58.8-14.1 23.3-2.8 24.6-2.7 28.4 1.1zm212.1.3c34.5 4.4 41.2 6.7 57.5 20.2 17.4 14.5 34.8 34.5 50.7 58.3 11.4 17 13.7 21.7 13.8 27.4 0 4.6-.9 6.6-9.3 21.3-5.1 9-11.7 20.2-14.8 25-9.8 15.6-11.5 25.3-8.9 50.3 2.1 19.8 2.3 34.5 1.1 85-.8 33.7-.7 40.6.9 55.7.9 9.5 1.5 17.6 1.4 18.2-.2.5-6.5-2.5-13.9-6.6s-23.4-12.7-35.5-19c-42.1-22.1-62.5-34.8-85.5-53.3-38.6-31.1-53.6-61.3-51.7-103.5.8-16 2.2-21.9 8.8-37.1 7.1-16.3 7.6-17.9 11-34.4 6.4-30.7 11.1-47.3 19.9-69.5 2.6-6.6 6.4-17.4 8.4-23.9 2.8-8.9 4.5-12.7 6.7-14.9l3-3 8.7.7c4.8.4 17.3 1.8 27.7 3.1zm-369.8 146.2c6.7 13.7 12.6 26.3 13.2 28.1 2.1 6.9 2.3 14.6.5 25.7-1.6 9.6-1.8 16.5-1.6 55.3.2 37-.1 48.5-1.8 69.5-1.1 13.9-2.2 29-2.6 33.7-1.3 19.8-5.1 40.2-15 81.4-11.7 48.6-15.6 72.3-20.5 124.5-1.1 12.4-2.2 22.7-2.4 22.9-1.5 1.6-13.8-129.9-15.6-166.8-.6-12.9-1.2-40.2-1.3-60.5l-.1-37 4.3-32.5c5.8-44.3 14.9-107.7 16.8-117.5 1.9-9.7 11.4-49.6 12-50.7.3-.4.8-.8 1.2-.8.4 0 6.2 11.1 12.9 24.7zm502.7-23c2.4 8.5 10.9 46.3 12.5 55.8 2.6 15.7 11 75.3 15.8 112l3.8 29-.1 45c0 24.7-.6 54-1.3 65-2.2 37.4-13.7 156.3-15.2 158-.5.5-.9-1.2-.9-4.2 0-6.8-3.4-41.2-6.6-65.8-3.2-24.7-6.3-40.8-15.3-78-10.7-44.5-14.2-63.8-15.6-88-.3-6.1-1.3-18.4-2.2-27.5-1.2-12.5-1.6-28.9-1.7-67-.1-38.6-.4-52.1-1.5-57.4-1.9-9.5-1-22.4 2-30.1 3.5-8.9 23.8-48.5 24.9-48.5.5 0 1.1.8 1.4 1.7zm-318.1 318.6c-13 98.8-23.9 179.4-24.1 179.2-1.4-1.3-7.7-144-9.2-207-1-42.1-1.1-44-5.1-73.1-2-15.1-2.1-17.5-.9-20.4 1.7-4.2 3.1-5.6 31-30.9 31.7-28.9 31.1-28.3 31.6-27.8.3.3-10.2 81.3-23.3 180zm125.6-153.7c16.1 14.6 30.1 28 31.2 29.8 2.5 4.1 2.4 8.6-.5 30.3-3.1 22.4-3.5 28.7-4.6 78.4-1 40.9-3.7 108.6-6.5 160.2-.8 15.3-1.5 29.6-1.5 31.9 0 2.3-.2 3.9-.5 3.6-.3-.3-11.1-80.3-24-177.9-12.9-97.6-23.7-178.6-23.9-180.2-.3-1.5-.2-2.7.2-2.7.5 0 14 12 30.1 26.6zm-173.4 79.4c4 46.8 4 53.7.5 68.8-3.5 14.8-12 32.4-22.3 46.2-5.2 7-29.6 35.7-33.1 38.9-2.1 2-2.6 2.1-2.6.8 0-6 10.2-67.1 16-95.9 8.3-41.3 17.6-82 19.8-86.6 1.3-2.9 16.9-16.8 17.8-16 .1.2 1.9 19.9 3.9 43.8zm233.8-31.3c2.2 2.4 3.5 5.9 6.7 18.9 11.2 45.9 23.6 109.7 29.5 152.4.8 6.3 1.8 12.6 2.1 14 .5 2.2-.1 1.8-4.6-2.5-8.2-7.9-29.8-34.2-36.2-43.9-13.4-20.4-19.7-40-19.8-61.1 0-8.4 5.7-86.5 6.6-89.3.4-1.3 10.5 6.1 15.7 11.5zm-263.7 5c-.3 1-4.6 18.2-9.5 38.3-19.1 77.3-26.6 122.5-39 234.5-10.5 94.2-12.7 108.8-18.2 123.9-3.7 10.2-22.8 49.3-31.4 64.1-15.1 26.1-38.8 56-48.4 60.9l-3.4 1.8.7-2.9c1.4-6.4 5.8-34.1 11.1-69.8 6.6-44.8 7-46.4 18.5-88.5 11.2-41.1 13.8-51.6 20.1-80.2 21.2-97.5 45.6-225.8 46.8-246.2l.6-10.8 25.5-13.4c14-7.3 25.9-13.4 26.3-13.4.5 0 .6.8.3 1.7zm301.8 12.2l25.6 13.3-.1 9.2c-.1 10.8 8.5 60.5 23.7 137.1 18.8 95 29.2 141.1 41.9 187 11.4 41.1 13.1 49.5 21 102.3 6.8 45.4 8.3 54 10.1 60.5.5 1.7.3 1.7-3.4-.2-8.5-4.3-30.5-31.2-44.5-54.3-8.9-14.7-31.4-59.8-35.5-71.1-1.8-4.9-3.9-12.8-4.7-17.5-2.5-13.9-8.1-59.3-13-104.7-12.1-111.2-20.2-159.3-41-243.3-4.1-16.7-7.5-30.8-7.5-31.4 0-1.3-1.7-2.1 27.4 13.1zm-396 183.7c-18.5 90.7-33.8 165.1-34 165.3-.8.9-1.5-.8-2.3-5.5-.7-4.7 1-63.3 2.4-82.9 2-27.6 7.4-71.7 12.6-103 1.1-6.6 5.3-28.9 9.3-49.5 4.1-20.6 7.9-40.6 8.5-44.4 1.5-10.1 6.8-20.3 15-28.6 5.9-6 20.9-17.5 21.7-16.7.2.2-14.8 74.6-33.2 165.3zm437.8-159.9c18.4 13.3 26.6 25.7 29.3 44.3.8 5.8 4.8 27.4 8.9 48 10.4 51.7 18 105.5 20.5 145.5 1.7 26.2 3.3 75.6 2.6 81-.5 4.1-2.4 9.8-2.5 7.3 0-.4-.7-4-1.6-8-.8-4-15.4-75.5-32.4-158.8-17-83.3-31.5-154.5-32.3-158.3-.8-3.7-1.2-6.7-.9-6.7.2 0 4.1 2.6 8.4 5.7zm-311.9 106c.4 2.1 1.1 10.8 1.8 19.3 2.9 38.8-2.2 88.1-22.1 216-6.1 38.9-7.6 46.3-11.5 58.5-2.4 7.7-7.6 28.1-11.5 45.4-3.8 17.3-7.1 31.6-7.3 31.7-.4.5-18.9-38.8-22.7-48.4-7.9-20-10.5-36.9-9-57.7 1-13.1 11-111.9 16.5-162.7 3.1-28.8 3.7-32.4 6-36.6 1.4-2.6 10.8-14.2 20.8-25.8 10-11.6 22.5-26.1 27.7-32.2 5.2-6.1 9.8-11.1 10.1-11.1.4-.1.9 1.6 1.2 3.6zm235.3 22.8c11 12.6 23 26.6 26.8 31 11 12.8 10.8 12.2 15.5 56.5 14.3 135.3 15.5 147.3 15.5 165 0 14.8-.3 18.9-2.2 26.2-3 12.2-8.3 25.8-16.4 42.8-3.9 8-8.4 17.4-10.1 21l-3 6.5-3.3-15c-8.4-37.7-11.8-51.4-15.4-62.3-4-12.3-9.1-41.3-19.4-111.2-11-74.6-13.6-98.5-14.3-132.1-.5-24.1.7-51.4 2.4-54.3.7-1 .1-1.6 23.9 25.9zm-222.7 129.5c3.5 21.4 4.4 32.7 4.4 56.5-.1 30.8-2.2 51.8-9.8 94.5-1.9 10.7-3.9 23.9-4.5 29.3-1.1 10.3-3.1 16.7-7.5 24.3-3.9 6.7-8.5 11.4-21.7 22.6l-11.8 9.9v-3.5c0-6.6 3.2-28.2 6.2-42.1 1.6-7.7 6.1-23.7 10-35.5 3.8-11.8 7.2-22.2 7.4-22.9.3-.8 2.5-13.9 4.9-29 11.1-69.5 16.5-103.2 17.6-111 .7-5 1.5-7.8 1.9-7 .5.8 1.7 7 2.9 13.9zm193.7 14.2c2.4 15.6 6.9 43.6 9.9 62.3 3.1 18.7 5.8 35.8 6.1 38 1.5 11.2 4.1 21.6 9.5 37.6 9.6 28.8 15 53.1 16.7 74.6.9 11.9 2.3 11.9-12 0-10.9-9.2-15.8-14.3-20.2-21.2-5.1-7.9-6.6-12.7-8.6-29-1.1-8.3-2.6-18.3-3.4-22.1-2.2-10.6-6.3-37.3-8.3-53.4-2.4-20.3-2.5-69.4 0-86.5 2.2-15.9 4.8-29.7 5.4-29.1.3.3 2.5 13.2 4.9 28.8zm110.9 142.7c4.7 8.9 10.7 19.7 13.3 23.9 6.2 9.9 7.6 13.5 7.6 19.1.1 6.3-1.3 12.3-2.6 11.9-1.4-.5-30.5-40.2-32.6-44.5-1.3-2.8-1.4-4.1-.4-8.4 1.7-7.1 5.4-19.1 5.8-18.7.1.2 4.2 7.7 8.9 16.7zm-410.6-4.6c1.8 6.6 2.9 12.2 2.5 13.3-.4 1-8.2 12.1-17.3 24.7-18.1 25-17.9 24.8-18.9 13.2-.6-7.8.7-11.9 6.9-21.6 2.6-4.2 8.7-15.1 13.4-24.3 4.8-9.1 9-16.6 9.5-16.6.4 0 2.2 5.1 3.9 11.3zm20.4 50.4c5.7 12.1 13.4 27.3 17.1 33.5 6.3 10.9 6.6 11.8 6.6 17.9 0 12.9-6.4 97.3-8.6 113.9-5.1 38.9-18.4 75.2-36.1 98.8-5.8 7.8-10.2 11.2-14.4 11.2-3.8 0-10.7-4.8-17.6-12.5-12.1-13.1-18-25-19-38-.9-12.3 4.5-70.8 11.3-122 6.6-50 8.4-57.3 19.4-79 7.3-14.5 28.9-48 30.1-46.8.4.4 5.4 10.8 11.2 23zm378-9.9c21.8 32.9 29.4 49.1 33.7 71.9 4 21.9 11.4 82.4 15 123.6 3.5 40 3.1 45.7-4.3 60-4.2 8.2-15.6 21.4-23.1 26.9-8.3 6-14.4 2.4-26.2-15.2-14.5-21.8-25.7-54.1-30.9-88.7-2.8-18.4-10.1-118.8-8.9-122.6.3-1.2 3.7-7.6 7.5-14.2 3.7-6.6 11.4-21.8 17-33.7 5.6-12 10.5-21.5 11-21.3.4.3 4.6 6.3 9.2 13.3zm-440.2 25.3c1.7 11.3.2 24.9-6.1 54.1-3.4 15.6-5.6 33.3-10 80.3-1.7 18.1-3.7 38.4-4.5 45-1.9 15.7-2.1 22.8-1.1 35.1.6 8.2.5 11.3-.8 15.7-2.7 9.2-17.6 27.7-22.4 27.7-5.8 0-17.1-8.9-21.1-16.7-3.1-6.2-4.6-25.5-4.5-60.8.1-31.9 1.2-47 5.5-77 2.4-17.3 13.8-73.9 15.3-76.3.3-.5 3.2-1.9 6.5-3.1 9.3-3.4 17.2-9.3 29.3-22.1 7.6-8 11.5-11.4 12-10.6.4.7 1.3 4.6 1.9 8.7zm495.8 2.7c12.5 12.7 19.9 18.2 28.9 21.4 3.1 1.1 5.8 2.1 6 2.3 1.6 1.5 13.202 59.8 16.102 80.5 4 29.2 4.6 38.8 4.6 76-.1 37.6-1.1 52.4-4 58-4 7.7-15.202 17-20.602 17-3.6 0-6.9-2.8-14-12.1-10.1-13.3-10.9-16.2-9.5-35.9.6-9.5.3-15.6-1.8-35-1.4-12.9-3.5-33.4-4.6-45.5-3.2-34.6-5.9-58.2-8.1-68.5-1.1-5.2-3.2-15.1-4.6-22-2.1-10.1-2.6-15.4-2.7-27.5-.1-14.1.6-20.5 2.1-20.5.4 0 5.9 5.3 12.2 11.8zm-385.8 48.3c-1.7 10.1-4.6 30.1-6.6 44.4-4.1 30-4.2 30.7-13.9 84.5-4.1 22.3-8.3 46.6-9.5 54.1-5 31.7-12.5 55.6-30.9 97.9-13.5 31.3-18 62.9-19.2 134-.7 48.8-.8 49.6-7.1 59.5-3.8 6-9.9 13.5-10.9 13.5s-2.1-30.7-2.1-58c0-31.7 3.3-65.8 12.2-125.3 3-20 5.6-33.2 10.4-52 3.5-13.9 6.8-26.3 7.3-27.7.6-1.4 4-5.9 7.6-10 21.2-23.9 34.6-54.9 41.6-96 4-23.6 5.5-43.5 7.5-95.5.7-17.2 2.1-24.3 6.1-30.7 2.8-4.4 9.5-12 10.1-11.5.2.2-1 8.7-2.6 18.8zm268.6-7.3c5 8.5 5.4 11 6.9 46.2 1.5 37.7 2.6 51.5 5.5 70.9 6.7 46.3 20 78.9 42.6 104.8 3.5 4.1 7.1 8.9 7.9 10.8 3.6 8.7 13.5 51.8 16.8 73.2 7.7 49.8 12.4 92.2 13.2 119.8.6 18.8-.9 68.1-2.1 69.3-1.5 1.6-13-15.7-15.7-23.8-2.2-6.2-2.3-8.1-2.4-45.5-.1-40.4-1.2-58.4-5.4-87.5-3.5-23.6-6.7-34.2-20.5-66-7.6-17.7-15.1-39.5-19-55.4-1.4-5.9-4.8-23.9-7.5-40-2.6-16-7.5-44-10.9-62.1-3.3-18.2-7.6-44.7-9.6-59-3.3-24.1-8.9-61.5-10-65.9-.6-2.8 7.1 4.9 10.2 10.2zm-385.6 205.7c8.5 13.1 20.6 23.2 32 26.8 1.5.5 1.3 1.9-1.7 13.4-24.1 89.7-28.4 117.3-28.4 179.2 0 57.4 5.5 104.4 18.1 154.3 3.6 14.3 3.7 21.8.6 27.3-4.9 8.6-16.8 13.2-31.7 12.2-15.6-1-22.6-3.6-27.3-9.8-2.8-3.9-2.4-9.3 1.6-19 10.5-25.5 14.8-47.2 19.3-99.6 1.8-20.2 1.8-20.4-.4-42.5-3.9-38.3-6-114.6-4.3-151.7 1.8-39.5 5.1-65.5 10.6-84.5 2.4-8.4 5.3-15.2 6-14.4.2.2 2.7 3.9 5.6 8.3zm505.8 2.9c9.2 28.8 12.8 71.1 11.7 140.6-.7 50.3-1.9 78.2-4 96.5-2.1 17.5-2 32.9.4 58 4.1 42.2 7.4 58.6 17.1 83.7 5.5 14.2 5.8 16.8 2.9 21.6-4 6.6-19.9 11-35.3 9.9-12.6-1-20.9-5.8-24.8-14.2-2.6-5.6-2.4-10.2 1.1-23.5 17.3-67.1 23.2-151.7 15.5-219.5-3.1-27-7.6-48.2-20.5-97.2-4.4-16.6-8-30.4-8-30.6 0-.3 3.3-2 7.3-3.9 10.8-5.2 21.6-15.9 28.8-28.5 3.1-5.4 4.1-4.5 7.8 7.1zm-558.1 16.4c5.1 4.5 10 8.2 10.9 8.2 2.7 0 9.6-3.7 14.1-7.6 2.3-1.9 4.2-3.3 4.2-3 0 .4-.7 4.8-1.5 9.9-1.9 12.2-4.1 31.6-5.6 50.7-1.8 21.7-1.6 93.6.4 138.5.9 20.3 1.9 43.6 2.3 51.7.5 11.1.3 14.8-.6 14.8-2.2 0-11.3-10.5-13.9-16l-2.6-5.5-.1-44c0-24.2-.4-49.9-.8-57-1.9-35.1-5.9-69.3-11.6-98.7-2.8-14.3-8-48.1-8-51.5 0-1.9-.8-2.5 12.8 9.5zm612.702-8.6c-.2 1.3-1.6 10.6-3 20.7s-3.7 23.8-5.1 30.5c-8.9 43.8-13.102 97.5-12.102 154.6.7 35.6.1 44.3-3.4 51.2-2.1 4.2-10.1 13.3-12.9 14.8-1.8 1-1.8 1.1.6-53.5 2.2-51 2.9-115.6 1.5-140.5-1.2-20.5-4-48.3-6.4-63.8-.8-4.5-1.2-8.2-.9-8.2.3 0 2.2 1.6 4.3 3.5 5.1 4.6 11.6 7.8 14.4 7.1 1.2-.3 6.702-4.6 12.102-9.6 5.5-4.9 10.2-9 10.7-9 .4 0 .5 1 .2 2.2zm-614.702 269c6.3 1.5 17.1 12.1 20.8 20.3 2.3 5 2.6 6.6 2.1 12.4-1.5 17.2-4.7 36.3-7.5 44.7-3.3 9.6-10 24.4-11.1 24.4-1.8 0-26.1-25-28-28.7-3.5-7-5.1-16-5.1-28.4 0-13.9-.8-15.5-10-18.9-3.3-1.2-6.3-2.7-6.6-3.2-.3-.5.2-1.8 1.2-3 3.6-3.9 7.6-5.1 18.8-5.7l11-.6-4.6-4.1-4.7-4 3.2-2c7.4-4.5 12.4-5.3 20.5-3.2zm620.102.9c7.9 3.5 7.9 3.8 2.5 8.6l-4.9 4.3h9c10.6 0 15.3 1.1 19.5 4.6 4 3.4 3.8 5-.7 6.5-11.7 3.7-13.9 6.8-12.9 17.6.8 8.1-.6 19-3.5 27-1.8 5-3.9 7.5-15.5 19-7.4 7.3-13.8 13.3-14.2 13.3-.4 0-3-4.8-5.602-10.8-5.2-11.6-9-24.9-10-35.2-.4-3.6-1.4-11-2.3-16.5-1.8-11.9-1.1-15.7 4.5-23.8 10.102-14.6 22.502-19.9 34.102-14.6zm-524.602 33.9c-1.3 11.3-4 19.4-8.9 26.9l-3.7 5.5-2.1-5c-1.6-3.9-2-7.1-2.1-15.4 0-12.4 1.7-17.5 10.6-30.9l5.4-8.3.9 8.9c.6 5.7.5 12.2-.1 18.3zm421.7-15c7.8 12.9 10.4 25.1 7.6 35.8-.9 3.5-2.2 7.4-2.9 8.8l-1.4 2.6-3.3-5.2c-1.8-2.8-4.4-8.1-5.8-11.8-2.3-6.1-2.6-8.4-2.9-24.7l-.4-18 2.6 3c1.4 1.6 4.4 5.9 6.5 9.5z" fill="#CD0F0F" />
            {this.buildBodyMuscleSVG()}
          </g>
        </svg>


      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedMuscle: state.selectedMuscle,
    muscles: state.muscles
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectMuscle },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BackBody);