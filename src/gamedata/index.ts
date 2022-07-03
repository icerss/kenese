const GameData = ["S1", "S2"];

export default async (): Promise<any> => {
  for (let item of GameData) {
    let game = await import(`./${item}`);
    await game.default();
  }
};
