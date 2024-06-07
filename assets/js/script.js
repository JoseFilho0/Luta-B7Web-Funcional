const player1 = createKnight('José');
const player2 = createLittleMonster();


stage.start(
    player1,
    player2,
    document.querySelector('#player1'),
    document.querySelector('#player2')
)