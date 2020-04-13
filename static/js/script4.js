var all_buttons = document.getElementsByTagName('button');

var copyall_buttons = [];
for(let i=0; i<all_buttons.length; i++)
{
    copyall_buttons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(thisbuttonvalue)
{
    if (thisbuttonvalue.value === 'red')
    {
        buttonsred();
    }
    else if (thisbuttonvalue.value === 'green')
    {
        buttonsgreen();
    }
    else if (thisbuttonvalue.value === 'blue')
    {
        buttonsblue();
    }
    else if (thisbuttonvalue.value === 'yellow')
    {
        buttonsyellow();
    }
    else if (thisbuttonvalue.value === 'reset')
    {
        buttonsreset();
    }
    else if (thisbuttonvalue.value === 'random')
    {
        buttonsrandom();
    }
}

function buttonsred()
{
    for (let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsgreen()
{
    for (let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonsyellow()
{
    for (let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');
    }
}

function buttonsblue()
{
    for (let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-primary');
    }
}

function buttonsreset()
{
    for (let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyall_buttons[i]);
    }
}

function buttonsrandom()
{
    let choices = ['btn-primary', 'btn-warning', 'btn-success', 'btn-danger'];
    for(let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[Math.floor(Math.random()*4)]);
    }
}