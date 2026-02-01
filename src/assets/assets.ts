export const UI_ICONS = {
  BTN_CIRCLE: 'btn_circle.svg',
  BTN_RECTANGLE: 'btn_rectangle.svg',
  BTN_CROSS: 'btn_cross.svg',
  // --- --- ---
  EMAIL_REVIEW: 'email_review.svg',
  PRODUCT_CONTEXT: 'product_context.svg',
  EMAIL_TOOLS_SETUP: 'email_tools_setup.svg',
  BASIC_COMPETITOR_REVIEW: 'basic_competitor_review.svg',
  EMAIL_PERFORMANCE_TRACKING: 'email_performance_tracking.svg',
  EMAIL_CAMPAIGNS: 'email_campaigns.svg',
  // --- --- ---
  WORLD: 'world.svg',
  // --- --- ---
  EMAIL: 'email.svg',
  LINKEDIN: 'linkedin.svg',
  WHATSUP: 'whatsup.svg',
  // --- --- ---
  FORM_USER: 'form_account.svg',
  FORM_EMAIL: 'email.svg',
  FORM_MESSAGE: 'form_message.svg'
} as const;

export type UiIcon = keyof typeof UI_ICONS;
