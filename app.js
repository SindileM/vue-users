const app = Vue.createApp({
    data(){
        return{
            showUsers: true,
            users:[
                {name: "Sindile",
                 surname: "Makhathini",
                 age:22},
                 {name: "Emihle",
                 surname: "Cebisa",
                 age:20},
                 {name: "Zanele",
                 surname: "Moni",
                 age:24},
                 {name: "Sima",
                 surname: "January",
                 age:22},
                 {name: "Bongani",
                 surname: "Nomangola",
                 age:21},
                 {name: "Unathi",
                 surname: "Mqolweni",
                 age:21},
            ]
        }
    },

    method: {
        viewshowUsers(){
            this.showUsers = !this.showUsers
        },
    }

})

app.mount("#app")