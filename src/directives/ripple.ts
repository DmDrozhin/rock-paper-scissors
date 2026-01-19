import type { DirectiveBinding } from 'vue';

interface RippleOptions {
  color?: string;
  duration?: number;
  center?: boolean;
}

interface RippleHTMLElement extends HTMLElement {
  __rippleMouse__?: (e: MouseEvent) => void;
  __rippleKey__?: (e: KeyboardEvent) => void;
}

function createRipple(event: MouseEvent | KeyboardEvent, el: HTMLElement, options: RippleOptions = {}) {
  if (el.hasAttribute('disabled')) return;

  const rect = el.getBoundingClientRect();
  const ripple = document.createElement('span');

  const size = Math.max(rect.width, rect.height);
  const radius = size / 2;

  let x = rect.width / 2;
  let y = rect.height / 2;

  if (event instanceof MouseEvent && !options.center) {
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;
  }

  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x - radius}px`;
  ripple.style.top = `${y - radius}px`;

  ripple.style.backgroundColor = options.color ?? 'rgba(255,255,255,.35)';
  ripple.style.animationDuration = `${options.duration ?? 600}ms`;

  ripple.className = 'v-ripple__circle';

  const oldRipple = el.querySelector('.v-ripple__circle');
  if (oldRipple) oldRipple.remove();

  el.appendChild(ripple);

  ripple.addEventListener('animationend', () => {
    ripple.remove();
  });
}

export const vRipple = {
  mounted(el: RippleHTMLElement, binding: DirectiveBinding<RippleOptions>) {
    el.classList.add('v-ripple');
    el.style.position ||= 'relative';
    el.style.overflow = 'hidden';

    const options = {
      ...binding.value,
      center: binding.modifiers.center
    };

    el.__rippleMouse__ = (e: MouseEvent) => createRipple(e, el, options);
    el.__rippleKey__ = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        createRipple(e, el, { ...options, center: true });
      }
    };

    el.addEventListener('mousedown', el.__rippleMouse__);
    el.addEventListener('keydown', el.__rippleKey__);
  },

  unmounted(el: RippleHTMLElement) {
    if (el.__rippleMouse__) {
      el.removeEventListener('mousedown', el.__rippleMouse__);
    }
    if (el.__rippleKey__) {
      el.removeEventListener('keydown', el.__rippleKey__);
    }
  }
} as const;
