"use strict";
//* abstraction 
Object.defineProperty(exports, "__esModule", { value: true });
// 1. interface
// 2. abstract class
// idea 
// interface MediaPlayer {
//     play() : void;
//     pause() : void;
//     stop() : void;
// }
// implementation
// class MusicPlayer implements MediaPlayer {
//       play(): void {
//           console.log('playing music...');
//       }
//       pause(): void {
//           console.log('stop music...');
//       }
//       stop(): void {
//           console.log('stop music...');
//       }
// }
// const RiajulPlayer = new MusicPlayer();
// RiajulPlayer.pause()
//* alternative idea
class MediaPlayer {
}
// implementation
class RiajulPlayer extends MediaPlayer {
    play() {
        console.log('playing music...');
    }
    ;
    pause() {
        console.log('pause music...');
    }
    stop() {
        console.log('stop music..');
    }
}
const riajulPlayer1 = new RiajulPlayer();
riajulPlayer1.play();
//# sourceMappingURL=abstraction.js.map