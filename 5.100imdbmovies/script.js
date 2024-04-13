const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '72d5616af5mshf8eb21b61e4fba0p1cec22jsnad94de87c30e',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};
const container=document.querySelector("#container")
const movieImg=document.querySelector("#movieimg")

async function movie(){
    try {
        const response = await fetch(url, options);
        const result = await response.json()
        console.log(result);
        // container.innerHTML=`<h3>${result[0].title}</h3>`
        // container.innerHTML=`<img src="${result[0].image}" ></img>`
        function Mvtitle(){
            result.map((x)=>{
                // console.log(`<h3>${x.title}</h3>`);
                // console.log(`<img src="${x.image}" ></img>`);
                container.innerHTML+=`<img class='movie' src="${x.image}" ></img>`
                container.innerHTMLs+=`<h3>${x.title}</h3>`
                
               
                
            })
        }
        Mvtitle()
    } catch (error) {
        console.error(error);
    }
}

// const Mvtitle=()=>{
//     result.reduce(function(acc,curr){
//         acc=[...acc,curr[0].title]
//     },[])
//     console.log(acc);
// }

movie()