import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeo = new Vimeo(document.querySelector('iframe'));
const STORAGE_KEY = 'videoplayer-current-time';

vimeo.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem(STORAGE_KEY, e.seconds);
    // console.log(e.seconds);
  }, 1000)
);

vimeo.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);
