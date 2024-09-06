import Clock = Phaser.Time.Clock;


export class MockClock extends Clock {
  public overrideDelay: number | undefined;
  constructor(scene) {
    super(scene);
    this.overrideDelay = undefined;
    setInterval(() => {
      /*
        To simulate frame update
        eventEmitter.on(SceneEvents.PRE_UPDATE, this.preUpdate, this);
        eventEmitter.on(SceneEvents.UPDATE, this.update, this);
       */
      this.preUpdate(this.systems.game.loop.time, 100);
      this.update(this.systems.game.loop.time, 100);
    }, 100);
  }

  addEvent(config: Phaser.Time.TimerEvent | Phaser.Types.Time.TimerEventConfig): Phaser.Time.TimerEvent {
    return super.addEvent({
      delay: 0.01,
      repeat: 0,
      startAt: 0,
      callback: config.callback,
    });
  }
}
