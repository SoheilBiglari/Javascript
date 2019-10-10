    let player;

function Player(classType, health, mana, strength, agility, speed) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

let playerMoves = {
    calcAttack: function(){
        //Who attacks first ?
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;

        //PLayer attacks
    let playerAttack = function(){
        let calcBaseDamage;
        if (player.mana > 0){
            calcBaseDamage = player.strength * player.mana / 1000;
        }else {
            calcBaseDamage = player.strength * player.agility / 1000;
        }
        let offsetDamage = Math.floor(Math.random() * Math.floor(10)); 
        let calcOutputDamage = calcBaseDamage + offsetDamage;
        // Number of hits
        let numberOfHits =  Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;
    }
     //Enemy attacks
     let enemyAttack = function(){
        let calcBaseDamage;
        if (enemy.mana > 0){
            calcBaseDamage = enemy.strength * enemy.mana / 1000;
        }else {
            calcBaseDamage = enemy.strength * enemy.agility / 1000;
        }
        let offsetDamage = Math.floor(Math.random() * Math.floor(10)); 
        let calcOutputDamage = calcBaseDamage + offsetDamage;
        // Number of hits
        let numberOfHits =  Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues ;
    }
    //Get player/enemy health to change later !
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");
    // Initiate attacks!
    if (getPlayerSpeed >= getEnemySpeed){
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDamage;
            //HIT
        document.getElementById("player-damage").innerHTML = ("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times. " + "Damage done this round: " + playerAttackValues[0] * playerAttackValues[1] + "");
        
        if (enemy.health <= 0) {
            //WON
            document.getElementById("won").innerHTML = ("You won !");
            document.getElementById("press00").innerHTML = "" + '<button id="btnnn-won" onclick="location.reload();"> Play again ? </button>' + "";
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            getEnemyHealth.innerHTML = 'Health: 0';
        } else {
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            // Enemy attacks
            let enemyAttackValues = enemyAttack();
            
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            document.getElementById("enemy-damage").innerHTML = ("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times. " + "Damage done this round: " + enemyAttackValues[0] * enemyAttackValues[1] + "");
            
            if (player.health <= 0) {
                //LOST
                document.getElementById("lost").innerHTML = ("You lost !");
                document.getElementById("press01").innerHTML = "" + '<button id="btnnn-lost" onclick="location.reload();"> Play again ? </button>' + "";    
            getPlayerHealth.innerHTML = 'Health: 0';
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        } else{
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
        }
    }
}else if (getEnemySpeed >= getPlayerSpeed){
        let enemyAttackValues = enemyAttack();
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.health = player.health - totalDamage;
        document.getElementById("enemy-damage").innerHTML = ("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times. " + "Damage done this round: " + enemyAttackValues[0] * enemyAttackValues[1] + "");
        if (player.health <= 0) {
            //LOST
            document.getElementById("lost").innerHTML = ("You lost !");
            document.getElementById("press01").innerHTML = "" + '<button id="btnnn-lost" onclick="location.reload();"> Play again ? </button>' + "";
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            getPlayerHealth.innerHTML = 'Health: 0';
        } else {
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            // Player attacks
            let playerAttackValues = playerAttack();
            
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            document.getElementById("player-damage").innerHTML = ("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times. " + "Damage done this round: " + playerAttackValues[0] * playerAttackValues[1] + "");
            
            if (enemy.health <= 0) {
                //WON
                document.getElementById("won").innerHTML = ("You won !");
                document.getElementById("press00").innerHTML = "" + '<button id="btnnn-won" onclick="location.reload();"> Play again ? </button>' + "";
            getEnemyHealth.innerHTML = 'Health: 0';
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
        } else{
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        }
        }
    }
    }
        
}

