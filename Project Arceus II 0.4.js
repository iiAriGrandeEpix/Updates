/*Project Arceus II*/

print('Project Arceus is now loaded')


function useItem(x, y, z, itemId, blockId, side)
{

}

function attackHook(attacker, victim)
{
clientMessage('§4Tap!');
}

function procCmd(command)
{
var cmd = command.split(" ");

if(cmd[0] == "help"){
clientMessage('Creative | Changes the gamemode');
clientMessage('Survival | Changes the gamemode');
clientMessage('Day | Makes the time day');
clientMessage('Heal | Makes your life full');
clientMessage('rstop | Stops the weather');
clientMessage('rain | Starts the rain');
clientMessage('suicide | Kill yourself');
clientMessage('About | Shows the credits and version');
clientMessage('diamondtools | Gives you a Diamond sword')
clientMessage('starterkit | Gives you the starter blocks');
clientMessage('diamondarmor | Gives you the full armor');
clientMessage('More updates coming soon...');
}

if(cmd[0] == "diamondarmor")
{
Player.addItemInventory(310 , 1 , 0);
Player.addItemInventory(311 , 1 , 0);
Player.addItemInventory(312 , 1 , 0);
Player.addItemInventory(313 , 1 , 0);
clientMessage('Given you the armor');
}

if(cmd[0] == "diamondtools")
{
Player.addItemInventory(276 , 1 , 0);
Player.addItemInventory(277 , 1 , 0);
Player.addItemInventory(278 , 1 , 0);
Player.addItemInventory(279 , 1 , 0);
clientMessage('Diamond Tools Added!');
}

if(cmd[0] == "creative"){
Level.setGameMode(1);
}

if(cmd[0] == "survival"){
Level.setGameMode(0);
}

if(cmd[0] == "heal"){
Player.setHealth(20);
clientMessage('Your up!!');
}

if(cmd[0] == "day"){
Level.settime(1200);
}

if(cmd == "rstop"){
Level.setRainLevel(0);
}

if(cmd == "rain"){
Level.setRainLevel(1);
}

if(cmd[0] == "suicide"){
Player.setHealth(0);
clientMessage('§4 You took the easy way out');
}

if(cmd == "starterkit"){
Player.addItemInventory(17, 20, 0);
Player.addItemInventory(12, 20, 0);
Player.addItemInventory(4, 20, 0);
Player.addItemInventory(1, 2, 0);
Player.addItemInventory(1, 1, 0);
Player.addItemInventory(1, 1, 0);
Player.addItemInventory(1, 1, 0);
Player.addItemInventory(1, 1, 0);
Player.addItemInventory(1, 1, 0);
Player.addItemInventory(1, 1, 0);
Player.addItemInventory(1, 1, 0);
Player.addItemInventory(1, 1, 0);
Player.addItemInventory(1, 1, 0);
Player.addItemInventory(1, 10, 0);
}

if(cmd[0] == "about"){
clientMessage('Made by §5iiAriGrandeEpix');
clientMessage('Version 0.3');
clientMessage('Do not redistribute nor sell!')
clientMessage('Also thanks to FirehardBurnston');
}

}

function newLevel()
{
clientMessage('§2 Project Arceus,type §3/help §2for the commands');
}

