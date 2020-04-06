function rpsGame(yourChoice)
{
    console.log(yourChoice.id);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = botchoiceint(randomnumgen())
    results = decideWinner(humanChoice, botChoice); // [0,1] you lost, bot won
    message = finalMessage(results); // dict {message:You won, color:...}
    rpsFrontend(humanChoice, botChoice, message);
}

function randomnumgen()
{
    return Math.floor(Math.random() * 3);
}

function botchoiceint(num)
{
    return ['rock', 'paper', 'scissors'][num]
}

function decideWinner(humanChoice, botChoice)
{
    var rpsdict = 
    {
        'rock'    : {'rock':0.5, 'paper':0, 'scissors':1},
        'paper'   : {'rock':1, 'paper':0.5, 'scissors':0},
        'scissors': {'rock':0, 'paper':1, 'scissors':0.5}
    };
    var humanScore = rpsdict[humanChoice][botChoice];
    var botScore = rpsdict[botChoice][humanChoice];
    return [humanScore, botScore];
}

function finalMessage([humanScore, botScore])
{
    if(humanScore===0)
    {
        return {'message': 'You lost!', 'color':'red'};
    }
    else if(humanScore===0.5)
    {
        return {'message': 'You tied!', 'color':'yellow'};
    }
    else
    {
        return {'message': 'You won!', 'color':'green'};
    }
}

function rpsFrontend(humanChoice, botChoice, message)
{
    var imagesDataset = 
    {
        'rock'    : document.getElementById('rock').src,
        'paper'   : document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var msgDiv = document.createElement('div');
    var botDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='"+imagesDataset[humanChoice]+"' height=250 width=300 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    msgDiv.innerHTML = "<h1 style='color: "+ message['color'] +"; font-size: 60px; padding: 30px; margin-top: 20px'>"+ message['message'] + "</h1>"
    botDiv.innerHTML = "<img src='"+imagesDataset[botChoice]+"' height=250 width=300 style='box-shadow: 0px 10px 50px rgba(248, 38, 24, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(msgDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}