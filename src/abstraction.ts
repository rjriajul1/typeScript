//* abstraction 


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

abstract class MediaPlayer {
   abstract play(): void;
   abstract pause(): void;
   abstract stop(): void;
}


// implementation
class RiajulPlayer extends MediaPlayer{
    play(): void{
        console.log('playing music...');
    };

    pause(): void {
        console.log('pause music...');
    }

    stop(): void {
        console.log('stop music..');
    }
}
const riajulPlayer1 = new RiajulPlayer()
riajulPlayer1.play()
