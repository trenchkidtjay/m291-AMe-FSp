Vue.createApp({
    data() {
        return {
            neueAnfrage: {
                typ: 'quickService',
                beschreibung: ''
            }
        };
    },
    methods: {
        anfrageHinzufuegen() {
            if (this.neueAnfrage.beschreibung) {
                alert('Kundenanfrage erfolgreich erfasst!');
                this.neueAnfrage.beschreibung = '';
            }
        }
    }
}).mount('#app');