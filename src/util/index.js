const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const getDamageMultiplier = (attackType, defenderTypes) => {
  let multiplier = 10;
  // console.log(defenderTypes);
  defenderTypes.forEach((defenderType) => {
    if (attackType.double_damage_to.includes(defenderType.name)) {
      multiplier = multiplier * 2;
    } else if (attackType.half_damage_to.includes(defenderType.name)) {
      multiplier = multiplier * 0.5;
    } else if (attackType.no_damage_to.includes(defenderType.name)) {
      multiplier = multiplier * 0;
    }
  });
  return multiplier;
};
const getDamage = (attacker, defender) => {
  //berechne für jeden type des angreifers den multiplier
  const multipliers = attacker.type.map((type) =>
    getDamageMultiplier(type, defender.type)
  );
  //suche den größsten multiplier
  const damageMultiplier = !(multipliers.length === 0)
    ? Math.max(...multipliers)
    : 1;
  //Schadensberechnung
  //...

  const { Attack, Special_Attack } = attacker.base;
  const attackValue = Attack > Special_Attack ? Attack : Special_Attack;

  const { Defense, Special_Defense } = defender.base;
  const defenseValue = Attack > Special_Attack ? Defense : Special_Defense;

  let randomNumber = Math.random() * (255 - 217) + 217;

  const returnValue =
    (((((7 * attackValue * 60) / defenseValue / 50 + 2) * damageMultiplier) /
      10) *
      randomNumber) /
    255;

  return Math.round(returnValue);
};

export { getDamage, sleep };
