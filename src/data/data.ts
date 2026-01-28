import type { UiIcon } from '@/assets/assets';

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
interface Card {
  title: string;
  list?: string[];
  img: UiIcon;
  img_size: number;
}
interface WhoWeAre {
  title: string;
  description: string;
  cards: Card[];
  remark: string;
  button: {
    title: string;
  };
}
export const WHO_WE_ARE: WhoWeAre = {
  title: 'Who We Are',
  description: 'An email marketing agency built around practical solutions.',
  cards: [
    {
      title: 'Content',
      list: ['Email copywriting for campaigns and flows', 'Automatization', 'Promotional campaigns'],
      img: 'BTN_CIRCLE',
      img_size: 100
    },
    {
      title: 'Optimization',
      list: ['Email and flow reviews', 'Audience segmentation', 'Delivery rate', 'Conversion rate'],
      img: 'BTN_RECTANGLE',
      img_size: 100
    },
    {
      title: 'Setup',
      list: ['Trigger-based emails', 'Email content planning', 'Domain and technical setup'],
      img: 'BTN_CROSS',
      img_size: 80
    }
  ],
  remark: '*Each task is approached as a separate, clearly defined solution*',
  button: {
    title: 'Discuss'
  }
};

interface HowWeWork {
  title: string;
  description: string;
  cards: {
    title: string;
    img: UiIcon;
  }[];
}
export const HOW_WE_WORK: HowWeWork = {
  title: 'How We Work',
  description:
    '<div class="assertion">One <span class="accent-text">task</span> — equal <span class="accent-text">solution.</span></div>',
  cards: [
    {
      title: 'Email Review',
      img: 'EMAIL_REVIEW'
    },
    {
      title: 'Product Context',
      img: 'PRODUCT_CONTEXT'
    },
    {
      title: 'Email Tools Setup',
      img: 'EMAIL_TOOLS_SETUP'
    },
    {
      title: 'Basic Competitor Review',
      img: 'BASIC_COMPETITOR_REVIEW'
    },
    {
      title: 'Email Performance Tracking',
      img: 'EMAIL_PERFORMANCE_TRACKING'
    },
    {
      title: 'Email Campaigns',
      img: 'EMAIL_CAMPAIGNS'
    }
  ]
};

export const DROP_US_A_LINE = {
  title: 'Drop us a line',
  description:
    '<div class="assertion">Have a specific email <span class="accent-text">task</span> in <br>mind?<br> Let’s discuss the <span class="accent-text">solution.</span></div>',
  button: { title: 'Contact' },
  img: 'WORLD' as UiIcon
};

export const FOOTER = {
  description:
    '<div>Focused on email marketing. One <span class="accent-text">task</span> - one <span class="accent-text">solution.</span></div>',
  input: {
    type: 'email',
    name: 'email',
    error: 'Not correct email',
    label: 'Subscribe to our newsletter',
    placeholder: 'Enter your email',
    icon: 'EMAIL' as UiIcon
  },
  button: { title: 'Submit' },
  socials: {
    // twitter: 'https://twitter.com/rockpaperscisss',
    linkedin: {
      link: 'https://www.linkedin.com/company/rock-paper-scissors-agency/',
      icon: 'LINKEDIN' as UiIcon,
      alt: 'Rock Paper Scissors LinkedIn'
    }
    // facebook: 'https://www.facebook.com/rockpaperscissorsagency'
  },
  copyright: 'Rock Paper Scissors. 2026. All rights reserved'
};
