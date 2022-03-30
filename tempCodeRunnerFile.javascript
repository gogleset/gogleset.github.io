

const person = {
    name: "Jin",
    age: 33,
    run: function() {
        console.log(`${this.name} Run!!`)
    }
}

person.run()