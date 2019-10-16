// start partie de desiree
// script pour le formulaire

function surligne(champ,erreur)
{
    if(erreur)
        champ.style.border = "2px solid red";
    else
    {
        champ.style.border = "2px solid #76c38f";
    }
}

function verifName(champ)
{
    if(champ.value.length < 2 || champ.value.lenght > 25)
    {
        surligne(champ, true);
        return false;
    }
    else
    {
        surligne(champ, false);
        return true;
    }
}

function verifMail(champ)
{
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if(!regex.test(champ.value))
    {
        surligne(champ, true);
        return false;
    }
    else{
        surligne(champ, false);
        return true;
    }
}

function verifSubject(champ)
{
    if(champ.value.length < 2 || champ.value.lenght > 25)
    {
        surligne(champ, true);
        return false;
    }
    else
    {
        surligne(champ, false);
        return true;
    }
}

function verifMessage(champ)
{
if(champ.value.length < 2 || champ.value.lenght > 300)
    {
        surligne(champ, true);
        return false;
    }
    else
    {
        surligne(champ, false);
        return true;
    }
}

function verifForm(f)
{
    var nameOk = verifName(f.name);
    var mailOk = verifMail(f.mail);
    var subjectOk = verifSubject(f.subject);
    var messageOk = verifMessage(f.message);

    if(nameOk && mailOk && subjectOk && messageOk)
        return true;
    else
    {
        alert("Please fill the fields correctly.");
        return false;
    }
}

// end partie de desiree