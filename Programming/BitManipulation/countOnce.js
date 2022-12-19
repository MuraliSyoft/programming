function countOnce(n)
        {
            let count=0;
            while( n )
            {
            n = n&(n-1);
               count++;
            }
            return count;
    }
    
console.log(countOnce(10))