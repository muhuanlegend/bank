import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://2eec33af47ea9b922679ecb66b513f93@o4507232086720512.ingest.us.sentry.io/4507232089735168",
  integrations: [
    Sentry.replayIntegration(),
  ],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  tracePropagationTargets: ['third-party-site.com', /^https:\/\/yourserver\.io\/api/],
  tracesSampleRate: 1,
  debug: false,
  // spotlight: process.env.NODE_ENV === 'development',
});