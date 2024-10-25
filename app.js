Vue.createApp({
    data() {
        return {
            projekte: JSON.parse(localStorage.getItem('projekte')) || [],
            zeigeProjektListe: false,
            neuesProjekt: {
                name: '',
                beschreibung: '',
                dokument: 'offerte'
            },
            nachricht: ''
        };
    },
    methods: {
        projektHinzufuegen() {
            if (this.neuesProjekt.name && this.neuesProjekt.beschreibung) {
                this.projekte.push({ ...this.neuesProjekt });
                localStorage.setItem('projekte', JSON.stringify(this.projekte));
                this.nachricht = 'Projekt erfolgreich hinzugefügt!';
                this.leereFormulare();
            } else {
                this.nachricht = 'Bitte alle Felder ausfüllen.';
            }
        },
        leereFormulare() {
            this.neuesProjekt.name = '';
            this.neuesProjekt.beschreibung = '';
            this.neuesProjekt.dokument = 'offerte';
            setTimeout(() => {
                this.nachricht = '';
            }, 3000);
        }
    }
}).mount('#app');
