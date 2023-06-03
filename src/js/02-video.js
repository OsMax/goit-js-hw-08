import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeo = new Vimeo(document.querySelector('iframe'));
const STORAGE_KEY = 'videoplayer-current-time';

// vimeo.on('timeupdate', () => {
//   vimeo.getCurrentTime().then(function (seconds) {
//     localStorage.setItem(STORAGE_KEY, seconds);
//   });
// });

vimeo.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem(STORAGE_KEY, e.seconds);
    // console.log(e.seconds);
  }, 1000)
);

const startTime = localStorage.getItem(STORAGE_KEY);
if (startTime) {
  vimeo.setCurrentTime(startTime);
}
