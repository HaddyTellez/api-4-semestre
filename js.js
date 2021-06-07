var app = new Vue ({        //arreglo  de data//
    el:"#app",
    
    data() {
        return {
 
            query: null,
            results: null,               //datos o variables
            apikey: 'v1L1BBQ0AAA2_',      //apikey o clave de la api que estes utilizando, puede cambiar o variar dependiendo
            libroImg: [],                    // del tiempo que pase o de si es propia del programador
        }
        
    },  
     methods: {
        getBooks() {
            
            axios.get('https://api.overdrive.com/v1')   //manda a a consola respuesta para saber si corre la api y se aplica
            .the(response => {
                console.log(response)
    
    
             methods: {
        Libros : async function(){
            const response = await fetch(this.apikey);     
            this.libro= await response.json();
            this.libro= this.libro.results;
            console.log(this.libro);
            this.libroImg('https://link.overdrive.com/?S=${ this.query }')   //la api de tu agrado que estes utilizando para tu app
        },                                                                   //acompañada de los controles o parametros que puede traer la api
        libroImg: async function(url){                                       //todo hace conexion a travez del "query"
            const response = await fetch(url);
            this.libroImg = await response.json();
            this.libroImg = this.libroImg.sprites.other;
            console.log(this.libroImg.dream_world.front_default);            //aqui aparte de los datos que queremos sacar de api tambien estamos
                                                                             //pidiendo que nos de imagen del libro que nosotros queemos buscar
    },

    methods: {
        Libros : async function(){
            const response = await fetch(this.apikey);
            this.libro= await response.json();
            this.libro= this.libro.results;
            console.log(this.libro);
            
        },
       
        }
    }
})
