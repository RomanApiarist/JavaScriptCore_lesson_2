var login = 'Admin';

if(login == 'Admin'){
    
            var password = 'TheMaster';

            if(password == 'TheMaster' && login == 'Admin'){
            alert('Welcome');
            }
            else if(password == 'Other'){
            alert('Wrong password');
            }
            else{
            alert('Canceled');
            }
        
    alert('Password');
}
else if(login == 'Other'){
    alert('I dont know you');
}
else{
    alert('Canceled');
}


