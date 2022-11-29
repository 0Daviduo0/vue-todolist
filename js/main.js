const { createApp } = Vue

createApp({
    data() {
        return {
            error: false ,
            newNote: "",
            notes: [
                { nota: 'Fare i compiti', completata: false }, 
                { nota: 'Fare la spesa', completata: true }, 
                { nota: 'Fare il bucato', completata: false },
            ]
        }
    },
    methods: {
        addNote(){
            this.notes.push({ nota: this.newNote, completata: false });
        }
    }
}).mount('#app')