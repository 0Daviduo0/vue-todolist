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
            if(this.newNote.length < 5 || this.newNote === ""){
                this.error = true;
                console.log("errore")
            }
            else{
                this.notes.unshift({ nota: this.newNote, completata: false });
                this.error = false;
            }
            this.newNote = "";
        },
        removeNote(index){
            this.notes.splice(index, 1);
        },
        doneNote(index){
            if (this.notes[index].completata == false){
                console.log("la nota", this.notes[index].completata, "è stata completata")
                this.notes[index].completata = true;
                console.log(this.notes[index].completata)
            }
            else{
                console.log("la nota", this.notes[index].completata, "è stata rimossa dai completati")
                this.notes[index].completata = false;
                console.log(this.notes[index].completata);

            }

        }
        
    }
}).mount('#app')