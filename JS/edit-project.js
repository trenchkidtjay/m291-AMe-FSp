Vue.createApp({

    data() {
        return {
            projekte: JSON.parse(localStorage.getItem('projekte')) || [],
            aktuellesProjektIndex: 0
        };
    },
    methods: {
        projektAktualisieren() {
            const projekte = JSON.parse(localStorage.getItem('projekte')) || [];
            projekte[this.aktuellesProjektIndex] = this.projekte[this.aktuellesProjektIndex];
            localStorage.setItem('projekte', JSON.stringify(projekte));
            alert('Projekt erfolgreich aktualisiert!');
        }
    }
    
}).mount('#app');
