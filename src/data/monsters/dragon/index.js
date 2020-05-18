import DragonSprite from './dragon.png';

const Dragon = {
    hp: 60,
    maxHp: 60,
    attackValue: '2d20 + 20',
    defence: 8,
    dice: '2d20',
    exp: 400,
    type: 'dragon',
    sprite: DragonSprite,
    ai: 'normal',
    aiTurns: 0,
};

export default Dragon;
