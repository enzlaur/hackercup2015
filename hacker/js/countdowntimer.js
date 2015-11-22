
//###################################################################
// Author: ricocheting.com
// Version: v3.0
// Date: 2014-09-05
// Description: displays the amount of time until the "dateFuture" entered below.

var CDown = function() {
	this.state=0;// if initialized
	this.counts=[];// array holding countdown date objects and id to print to {d:new Date(2013,11,18,18,54,36), id:"countbox1"}
	this.interval=null;// setInterval object
}

CDown.prototype = {
	init: function(){
		this.state=1;
		var self=this;
		this.interval=window.setInterval(function(){self.tick();}, 1000);
	},
	add: function(date,id){
		this.counts.push({d:date,id:id});
		this.tick();
		if(this.state==0) this.init();
	},
	expire: function(idxs){
		for(var x in idxs) {
			this.display(this.counts[idxs[x]], "Now!");
			this.counts.splice(idxs[x], 1);
		}
	},
	format: function(r){
		var out="";
		if(r.d != 0){out += r.d +" "+((r.d==1)?"day":"days")+"<br> ";}
		if(r.h != 0){out += r.h +" "+((r.h==1)?"hour":"hours")+"<br> ";}
		out += r.m +" "+((r.m==1)?"min":"mins")+", ";
		//out += r.s +" "+((r.s==1)?"sec":"secs")+", ";

		return out.substr(0,out.length-2);
	},
	math: function(work){
		var	y=w=d=h=m=s=ms=0;

		ms=(""+((work%1000)+1000)).substr(1,3);
		work=Math.floor(work/1000);//kill the "milliseconds" so just secs

		y=Math.floor(work/31536000);//years (no leapyear support)
		w=Math.floor(work/604800);//weeks
		d=Math.floor(work/86400);//days
		work=work%86400;

		h=Math.floor(work/3600);//hours
		work=work%3600;

		m=Math.floor(work/60);//minutes
		work=work%60;

		s=Math.floor(work);//seconds

		return {y:y,w:w,d:d,h:h,m:m,s:s,ms:ms};
	},
	tick: function(){
		var now=(new Date()).getTime(),
			expired=[],cnt=0,amount=0;

		if(this.counts)
		for(var idx=0,n=this.counts.length; idx<n; ++idx){
			cnt=this.counts[idx];
			amount=cnt.d.getTime()-now;//calc milliseconds between dates

			// if time is already past
			if(amount<0){
				expired.push(idx);
			}
			// date is still good
			else{
				this.display(cnt, this.format(this.math(amount)));
			}
		}

		// deal with any expired
		if(expired.length>0) this.expire(expired);

		// if no active counts, stop updating
		if(this.counts.length==0) window.clearTimeout(this.interval);
		
	},
	display: function(cnt,msg)
    {
        var now = document.getElementById("now");
        var next = document.getElementById("next");
		document.getElementById(cnt.id).innerHTML=msg;
        /* Getting the current and next event by using the time left hihi */
        /* For the current event */
        /* 
            ALAM KONG SOBRANG BRUTE FORCE AT PEDE NAMAN PAGLARUAN ANG ARRAYS AT CURR TIME USING MATH PERO FUUUU 
            IKAW KAYA GUMAWA -_-
        */
        if(d > 1) 
        {
            now.innerHTML  = "Nothing yet. Go back to sleep!";
            next.innerHTML = "DLSU HackerCup 2015!!";
        } 
        else if ( d == 1 ) {
            
            if( h > 5) {
                now.innerHTML  = "Nothing yet. Go back to sleep!";
                next.innerHTML = "DLSU HackerCup 2015!!";
            }
            /* 7:00 - 8:00 */
            else if (h == 5 && m == 0 || h == 4 && m >= 0) {
                now.innerHTML  = "Registration";
                next.innerHTML = "Talk: OWASP";
            } else if ( h == 4 && m == 0 || h == 3 ) {
                /* 8:15 - 8:29 */
                if ( m > 30 && m <= 45) {
                    now.innerHTML  = "Talk: OWASP";
                    next.innerHTML = "Talk: 8Layer";
                } 
                /* 8:30 - 8:44 */
                else if ( m > 15 && m <= 30 ) {
                    now.innerHTML  = "Talk: 8Layer";
                    next.innerHTML = "Talk: Abra";
                }
                /* 8:45 - 9:00 */
                else if ( m <= 15 ) {
                    now.innerHTML  = "Talk: Abra";
                    next.innerHTML = "KLab";
                }
                /* */
            } else if ( h == 3 && m == 0 || h == 2 && m > 0 ) {
                if ( m == 0 && hh == 3 || h == 2 && m > 45) {
                    now.innerHTML  = "KLab";
                    next.innerHTML = "Microsoft";
                }
                else if ( m >= 31 && m <= 45 ) {
                    now.innerHTML  = "Microsoft";
                    next.innerHTML = "ConvergeICT";
                }
                else if ( m <= 30 && m > 0 ) {
                    now.innerHTML  = "ConvergeICT";
                    next.innerHTML = "Hacking Starts";
                }
                
            } /* 10:00 - 11:59*/
            else if ( h == 2 && m == 0 || h >= 0 && m >= 0 || h == 1 ) {
                now.innerHTML  = "Hacking Starts";
                next.innerHTML = "Lunch";
            } // 12:00 - 12:59 
            else if (h == 0 & m == 0 || h == 23 && m > 0) {
                now.innerHTML  = "Lunch";
                next.innerHTML = "Hacking Continues";
            }
        }
        else if ( d == 0 )
        {
            /* 
                still day 1 
            */
            // 13:00 - 14:59
            if ( h == 23 && m == 0 || h == 22  || h == 21 && m > 0) {
                now.innerHTML  = "Hacking Continues";
                next.innerHTML = "Afternoon Snacks";
            }
            /* 15:00 - 15:45*/
            else if ( h == 21 && m == 0 || h == 20 && m > 15) {
                now.innerHTML  = "Afternoon Snacks";
                next.innerHTML = "Hackathon Continues";
            }
            /* 15:45 */
            else if ( h == 20 && m <= 15 || h == 19 || h == 18 && m > 1 ) {
                now.innerHTML  = "Hackathon Continues";
                next.innerHTML = "Dinner";
            }
            /* 18:00 - next day */
            else if ( h <= 18 && h >= 14 )
            {
                /* 18:00 - 19:00 */
                if ( h == 18 && m == 0 || h == 17 && m >= 0)
                {
                    now.innerHTML  = "Dinner!";
                    next.innerHTML = "After-Dinner";
                }
                /* 19:00 - 21:00 */
                else if ( h == 17 && m == 0 || h == 14 && m > 0 )                    
                {
                    now.innerHTML  = "After-Dinner";
                    next.innerHTML = "LockDown Period";
                }
            }
            /* day 2 */
            else if (h == 0 ) 
            {
                if ( m > 15 ) 
                {
                    now.innerHTML  = "Lunch/End of Hack";
                    next.innerHTML = "Intel Sponsor Talk";
                } else if ( m <= 15 ) {
                    now.innerHTML  = "Intel Sponsor Talk";
                    next.innerHTML = "Demo Time!!";
                }
            }
            else if ( h == 1 ) 
            {
                now.innerHTML  = "Lunch/End of Hack";
                next.innerHTML = "Intel Sponsor Talk";
            }
            else if ( h <= 5 && h > 1)
            {
                if ( m > 0) 
                {
                    now.innerHTML  = "Breakfast";
                    next.innerHTML = "Hacking Continues";
                } 
                else 
                {
                    now.innerHTML  = "Hacking Continues";
                    next.innerHTML = "Lunch/End of Hack";
                }
            }
            else if ( h >= 6 && h <= 14) 
            {
                /* 6:00 flat */
                if ( m == 0 && h == 6 ) 
                {
                    now.innerHTML  = "Breakfast";
                    next.innerHTML = "Hacking Continues";
                } 
                else if ( h == 14 && m == 0|| h == 13 && m > 0) 
                {
                    now.innerHTML  = "Lockdown / Shower";
                    next.innerHTML = "Dasal lang";
                }
                else 
                {
                    now.innerHTML  = "Tiwala lang";
                    next.innerHTML = "At darating din ang breakfast";
                }                
            }
            /* 15:00 events */
            else if ( h == 20 )
            {
                /* 15:00 - 15:45*/
                if ( m >= 16) {
                    now.innerHTML  = "Afternoon Snacks";
                    next.innerHTML = "Hackathon Continues";
                }
                /* 15:45 - onwards */
                else if ( m <= 15) {
                    now.innerHTML  = "Hacking Continues";
                    next.innerHTML = "Dinner";
                }
            }
        } 
        
	}
};

window.onload=function(){
	var cdown = new CDown();

	cdown.add(new Date(2015,10,22,12,30,00), "countbox1");
    cdown.add(new Date(2015,10,22,12,30,00), "countbox2");
};
