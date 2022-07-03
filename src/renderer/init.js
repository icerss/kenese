(async () => {
  const LoadGameImport = await import("../gamedata");
  const LoadGame = await LoadGameImport.default();
  const { screen } = await import("./Screen");
  const { deviceIsPhone } = await import("./utils");

  if (deviceIsPhone()) {
    return screen.showLoadingAnimation("请使用电脑访问");
  }
  await LoadGame();
})();
