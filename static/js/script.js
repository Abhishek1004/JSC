function age_in_weeks()
{
    reset();
    const _MS_PER_DAY = 1000 * 60 * 60 * 24 * 7;
    const date = new Date();
    var birth_year = prompt("Enter your birth year.");
    var birth_month = prompt("Enter your birth month.");
    var birth_date = prompt("Enter your birth date.");
    const full_birth_date = new Date(birth_year, birth_month-1, birth_date);
    //var days_age = ((date.getFullYear()-birth_year)*365);
    const utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
    console.log(utc1);
    const utc2 = Date.UTC(full_birth_date.getFullYear(), full_birth_date.getMonth(), full_birth_date.getDate());
    console.log(utc2);
    var days_age = Math.floor((utc1 - utc2) / _MS_PER_DAY);
    var h1 = document.createElement('h1');
    var answer = document.createTextNode('You are '+days_age+' weeks old.');
    h1.setAttribute('id', 'age');
    h1.appendChild(answer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function age_in_days()
{
    reset();
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const date = new Date();
    var birth_year = prompt("Enter your birth year.");
    var birth_month = prompt("Enter your birth month.");
    var birth_date = prompt("Enter your birth date.");
    const full_birth_date = new Date(birth_year, birth_month-1, birth_date);
    //var days_age = ((date.getFullYear()-birth_year)*365);
    const utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
    console.log(utc1);
    const utc2 = Date.UTC(full_birth_date.getFullYear(), full_birth_date.getMonth(), full_birth_date.getDate());
    console.log(utc2);
    var days_age = Math.floor((utc1 - utc2) / _MS_PER_DAY);
    var h1 = document.createElement('h1');
    var answer = document.createTextNode('You are '+days_age+' days old.');
    h1.setAttribute('id', 'age');
    h1.appendChild(answer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function age_in_hours()
{

}

function age_in_minutes()
{

}

function age_in_secs()
{

}

function reset()
{
    if(document.getElementById('age')!==null)
    {
        document.getElementById('age').remove();
    }
}

/*function dateDiffInDays(a, b) {
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }*/