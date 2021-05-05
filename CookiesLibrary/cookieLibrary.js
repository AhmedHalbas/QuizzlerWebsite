     
    function getCookie(cookieName)
    {
        if(arguments.length != 1)
        throw new Error("Please Enter 1 Argument: cookieName");
    
        if( isFinite(arguments[0]))
        throw new Error("Please Enter 'String' Argument only: cookieName");
    
        var cookies=document.cookie.split(";");
               
               
        var cookiesArr=[];
        
        
        for(i=0;i<cookies.length;i++){
            var key=(cookies[i].split("=")[0]).trim();
            var val=decodeURIComponent((cookies[i].split("=")[1]));
            
            cookiesArr[key]=val;
            
        }
    
        return cookiesArr[cookieName];
    }
    
    
    
    function setCookie(cookieName,cookieValue,expiryDate)
    {
        if(arguments.length != 3)
        throw new Error("Please Enter 3 Arguments: cookieName, cookieValue and expiryDate (true or false) ");
    
        if( isFinite(arguments[0]))
        throw new Error("Please Enter 'String'Arguments only");
    
        
        //persistent cookie
        if(expiryDate)
        {
            
        var today= new Date();
        var m=today.getMonth();
        today.setMonth(m+1);
        document.cookie=encodeURIComponent(cookieName)+"="+encodeURIComponent(cookieValue)+";expires="+today.toUTCString() + "; path=/";
        }
        else{
            //session cookie
            document.cookie=cookieName+"="+cookieValue;
        }
    }
    
    
    function deleteCookie(cookieName)
    {
        if(arguments.length != 1)
        throw new Error("Please Enter 1 Argument: cookieName");
    
        if( isFinite(arguments[0]))
        throw new Error("Please Enter 'String' Argument only: cookieName");
    
        var today= new Date();
        var m=today.getMonth();
        today.setMonth(m-1);
    
        document.cookie=encodeURIComponent(cookieName)+"="+encodeURIComponent(getCookie(cookieName))+";expires="+today.toUTCString();
    
    }
    
    
    function allCookiesList()
    {
        var allCookies=document.cookie.split(";");
    
        return allCookies;
    }
    
    
    function hasCookie(cookieName)
    {
        if(arguments.length != 1)
        throw new Error("Please Enter 1 Argument: cookieName");
    
        if( isFinite(arguments[0]))
        throw new Error("Please Enter 'String' Argument only: cookieName");
    
        if(document.cookie.indexOf(cookieName+"=") !== -1)
        {
            return true;
        }
    
        return false;
    
    }
    
    
    
    