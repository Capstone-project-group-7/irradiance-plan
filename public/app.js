document.addEventListener('alpine:init', () => {
    Alpine.data('globalHorizontalIrradiance', () => ({
        ghi: '',
        results: '',
            change() {
            axios.post('/api/weather', {
                ghi: this.ghi
            }).then(ghiResults => {
                this.results = ghiResults.data.ghi;
            })
        }
    }))
});