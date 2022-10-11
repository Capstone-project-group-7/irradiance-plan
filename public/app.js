document.addEventListener('alpine:init', () => {
    Alpine.data(`globalHorizontalIrradiance`, function() {
      return {

        
        message: '',
        companies: [],
        makeSelected(){

          let bodyFormData = new FormData();
        
          bodyFormData.append('first_interval', 380);
          bodyFormData.append('sec_interval', 378);
          bodyFormData.append('third_interval', 379);
          alert(this.message)
        },
        init(){
          axios({
            method: 'post',
            url: 'uj-wrp-ml-hub-api.herokuapp.com/api/model/radiation',
            data: bodyFormData,
            headers: { 'Content-Type': 'multipart/form-data' }
          })
            .then(response => {
              //handle success
              console.log(response.data)
            })
            .catch(response => {
              //handle error
              console.log(response.data)
            })
        },
        

    }
    })
})