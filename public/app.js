document.addEventListener('alpine:init', () => {
    Alpine.data(`globalHorizontalIrradiance`, function() {
      return {
        message: 0,
        weathers: [],
        makeSelected(){
          alert(this.message)
        },
        init(){
          axios
          .get('http:/api/weather')
          .then((result) => {
            console.log(result.data)
            const weathers = result.data.weather

            this.weathers = weathers
         })
         //.then(() => {
          //console.log(cardID)
          //return this.createCart();
         //})
         //.then((result) => {
          //console.log(result);
         // this.cartID = result.data.cart_code;
       //})
        },
        

    }
    })
})