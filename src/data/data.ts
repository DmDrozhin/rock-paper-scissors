import { getImagePath } from '@/utils/utils';

export const META = {
  name: 'Rock Paper Scissors'
};
export const HEADER = {
  button: 'BOOK A CALL'
};
export const RPS = {
  title: 'ROCK PAPER SCISSORS',
  description:
    '<div class="description">Practical email marketing services.<br> Clear <span class="accent-text">tasks</span>. Working <span class="accent-text">solutions</span>.</div>',
  button: {
    title: 'Discuss my task',
    aria_label: 'Discuss my task with Rock Paper Scissors team'
  }
};

export const WHO_WE_ARE = {
  title: 'Who We Are',
  description: 'An email marketing agency built around practical solutions.',
  cards: [
    {
      title: 'Content',
      list: ['Email copywriting for campaigns and flows', 'Automatization', 'Promotional campaigns'],
      img: getImagePath('btn_circle.svg'),
      img_size: 100
    },
    {
      title: 'Optimization',
      list: ['Email and flow reviews', 'Audience segmentation', 'Delivery rate', 'Conversion rate'],
      img: getImagePath('btn_rectangle.svg'),
      img_size: 100
    },
    {
      title: 'Setup',
      list: ['Trigger-based emails', 'Email content planning', 'Domain and technical setup'],
      img: getImagePath('btn_cross.svg'),
      img_size: 80
    }
  ],
  remark: '*Each task is approached as a separate, clearly defined solution*',
  button: {
    title: 'Discuss'
  }
};
