const makeChange = (c) => {
  // your name here
	s = (c/100)
	ansobj = {}

	const obj = 
		   {
			0:["q" , 0.25],
			1:["d" , 0.10],
			2:["n" , 0.05],
			3:["p" , 0.01],
		   }
			
	l  =	Object.keys(obj).length
	i =0
	j = 0
	while(i<l && j<4 )
	{
	    const [curr,x] = obj[i]
	    ct = 0
	    
	    while(x<=s)
	    {
	        ct++
	        s-=x
	    }
	    ansobj[curr]  = ct
	    
	    i++
	   
	}
	 if (s > 0) {
    ansobj["p"] += Math.round(s * 100); // Round remaining cents to nearest penny
  }
	return ansobj
};


// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
