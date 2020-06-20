import React from 'react';

import Sprite from './game-functions/Sprite';
import spearman from './sprites/spearman.png';
import soldierInfo form './soldier-info.json';

interface IProps {}
interface IState {
  bufferBackground: CanvasRenderingContext2D | null;
  fps: number;
  fpsInterval: any;
  now: any;
  then: any;
  elapsed: any;
  myCanvas: any;
  currentCharacter: Sprite;
  mouseX: any;
  mouseY: any;
}

class SelectCharacter extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      bufferBackground: document.createElement('canvas').getContext('2d'),
      currentCharacter: new Sprite(spearman, 100, 100, 1),
      fps: 5,
      mouseX: 100,
      mouseY: 100,
      myCanvas: React.createRef(),
      fpsInterval: null,
      now: Date.now(),
      then: Date.now(),
      elapsed: null,
    };
  }

  componentDidMount({ fps } = this.state) {
    this.setupGame();
    this.setState({ fpsInterval: 1000 / fps });
    this.gameLoop();
  }

  setupGame = ({ myCanvas, bufferBackground } = this.state) => {
    bufferBackground!.canvas.height = 400;
    bufferBackground!.canvas.width = 400;
    myCanvas.current.height = window.innerHeight * 0.4;
    myCanvas.current.width = window.innerWidth * 0.4;
  };

  gameLoop = () => {
    const { fpsInterval, elapsed, currentCharacter, myCanvas } = this.state;
    const ctx = myCanvas.current.getContext('2d');
    window.requestAnimationFrame(this.gameLoop);

    // calc elapsed time since last loop
    this.setState(() => ({ now: Date.now() }));
    this.setState((prevState) => ({ elapsed: prevState.now - prevState.then }));

    // if enough time has elapsed, draw the next frame
    if (elapsed > fpsInterval) {
      let currentCharacterY = myCanvas.current.height / 2 - 100;
      let currentCharacterX = myCanvas.current.width / 2 - 100;
      currentCharacter.drawStrip(ctx, currentCharacterX, currentCharacterY);
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
