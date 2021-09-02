

        
        function evensAndOdds(positiveinteger) {
          var sumOdd = 0;
          var sumPar = 0;
        
          for (var i = 0; i < positiveinteger.length; i++) {
            if (positiveinteger[i] % 2 === 0) {
              sumPar++;
            } else {
              sumOdd++;
            }
          }
          
          console.log("Odd : " + sumOdd);
          console.log("Par : " + sumPar);
        }
        evensAndOdds([5, 10, 15, 20, 25, 30, 32, 40, 45, 50]);

        f