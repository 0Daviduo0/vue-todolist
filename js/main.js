const { createApp } = Vue

createApp({
    data() {
        return {
            error: false ,
            newNote: "",
            notes: [
                { nota: 'Fare i compiti', done: false }, 
                { nota: 'Fare la spesa', done: true }, 
                { nota: 'Fare il bucato', done: false }
            ]
        }
    }
}).mount('#app')