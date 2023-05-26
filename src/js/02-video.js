import SimpleLightbox from 'simplelightbox';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const currentTimeKey = 'videoplayer-current-time';

const player = new Player('vimeo-player');

const handleTimeUpdate = throttle(() => {
  player.getCurrentTime().then(time => {
    localStorage.setItem(currentTimeKey, time);
  });
}, 1000);

player.on('timeupdate', handleTimeUpdate);

const storedTime = localStorage.getItem(currentTimeKey);
if (storedTime) {
  player.setCurrentTime(storedTime);
}
