import React from 'react';

import spearman from './sprites/spearman.png';
import Sprite from './game-functions/Sprite';

interface IProps {}
interface IState {
  gridCoordinates: any[];
  fps: number;
  fpsInterval: any;
  now: any;
  then: any;
  elapsed: any;
  currentTile: any;
  myCanvas: any;
  currentCharacter: Sprite;
  //   gridImage: any;
  mouseX: any;
  mouseY: any;
}

class SelectCharacter extends React.Component<IProps, IState> {
  // const SelectCharacter = (props: any) => {
  constructor(props: IProps) {
    super(props);
    this.state = {
      currentCharacter: new Sprite(spearman, 100, 100, 1),
      fps: 5,
      mouseX: 100,
      mouseY: 100,
      myCanvas: React.createRef(),
      fpsInterval: null,
      gridCoordinates: [],
      now: Date.now(),
      then: Date.now(),
      elapsed: null,
      currentTile: { x: 100, y: 100 },
    };
  }

  componentDidMount({ fps } = this.state) {
    this.setState({ fpsInterval: 1000 / fps });
    this.gameLoop();
  }

  gameLoop = () => {
    const { fpsInterval, elapsed, currentCharacter, myCanvas } = this.state;
    const ctx = myCanvas.current.getContext('2d');

    window.requestAnimationFrame(this.gameLoop);

    // calc elapsed time since last loop
    this.setState(() => ({ now: Date.now() }));
    this.setState((prevState) => ({ elapsed: prevState.now - prevState.then }));

    // if enough time has elapsed, draw the next frame
    if (elapsed > fpsInterval) {
      // Get ready for next frame by setting then=now, but also adjust for your
      // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
      currentCharacter.drawStrip(ctx, 100, 100);

      this.setState((prevState) => ({
        then: prevState.now - (prevState.elapsed % prevState.fpsInterval),
      }));
    }
  };

  render() {
    return (
      <main className="select-character__main">
        <h1 className="select-character__title">Army Game v1</h1>
        <h2 className="select-character__sub-title">Choose your soldier</h2>
        <div className="select-character__options">
          <p className="select-character__left">
            <span role="img" aria-label="left arrow">
              ⬅️
            </span>
          </p>
          <canvas
            className="select-character__canvas"
            ref={this.state.myCanvas}
          />
          <p className="select-character__right">
            <span role="img" aria-label="right arrow">
              ➡️
            </span>
          </p>
        </div>
        <div className="select-character__character-info"></div>
      </main>
    );
  }
}
export default SelectCharacter;
