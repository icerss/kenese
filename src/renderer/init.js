(async () => {
  const Sentry = await import("@sentry/browser");
  const { BrowserTracing } = await import("@sentry/tracing");
  const LoadGameImport = await import("../gamedata");
  const LoadGame = await LoadGameImport.default();
  const { screen } = await import("./Screen");
  const { deviceIsPhone } = await import("./utils");

  if (deviceIsPhone()) {
    return screen.showLoadingAnimation("请使用电脑访问");
  }
  await Sentry.init({
    dsn: "https://b410206a05b44426a692b486ae947074@o947661.ingest.sentry.io/6387179",
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
  });
  await LoadGame();
})();
