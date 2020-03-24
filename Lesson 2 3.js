var login = 'Admin';

switch(login){
        
    case 'Admin':{
                
            var password = 'TheMaster';
        
            switch(password){
        
            case 'TheMaster':{
                    if(password == 'TheMaster' && login == 'Admin')
            alert('Welcome');
            break;
                }
                    
            case 'Other':{
            alert('Wrong password');
            break;
                }
    
            default:{
            alert('Canceled');
            }
        }
                
        
        alert('Password');
        break;
    }
        
    case 'Other':{
        alert('I dont know you');
        break;
    }
    
    default:{
        alert('Canceled');
        }
}


