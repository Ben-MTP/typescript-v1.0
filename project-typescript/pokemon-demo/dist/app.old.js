"use strict";
// // Tạo riêng một đối tượng chứa thông tin của pokemon
// let poke: {
//   id: number,
//   name: string,
//   image: string,
//   type: string
// };
// // Tạo một mảng chứa các pokemons
// let pokemons:{
//   id: number,
//   name: string,
//   image: string,
//   type: string
// }[] = [];
// // Method lay thong tin va generate template:
// function template(pokemonItem: {
//   id: number, 
//   name: string, 
//   image: string, 
//   type: string
// }){
//   return `
//       <div class="pokemon">
//         <div>#$${pokemonItem.id}</div>
//         <img src="${pokemonItem.image}" alt="${pokemonItem.type}">
//         <div>Name: ${pokemonItem.name}</div>
//         <div>Type: ${pokemonItem.type}</div>
//       </div>`;
// }
// // Hàm truy cập để lấy thông tin từ API
// // Gán giá trị của id vào trong một api nào đó -> ${i}
// async function fetchData(root: HTMLElement) {
//   for(let i = 1; i <= 20; i++){
//     let data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
//     let pokemon : any = await data.json();
//     console.log(pokemon);
//     // Trong một result: sẽ có name + url
//     let {name: pokename, url} = pokemon.abilities[0].ability;
//     let {front_default: imageUrl} = pokemon.sprites;
//     let {name: type} = pokemon.types[0].type;
//     poke = {
//       id: i,
//       name: pokename,
//       image: imageUrl,
//       type: type
//     }
//     pokemons.push(poke);
//   }
//   console.log(pokemons)
//   shuffle();
//   pokemons.forEach(Element => {
//     root.innerHTML += template(Element);
//   })
// }
// // Lấy thông thông tin element thông qua id = app
// // Tìm nạp thông tin của root vào trong hàm fetchData
// let root = document.getElementById('app');
// if(root){
//   fetchData(root);
// }
// // Thực hiện xóa trộn, đảo vị trí của các phần tử trong mảng
// function shuffle(){
//   for(let i = 0; i < pokemons.length; i++){
//     let j = Math.round(Math.random() * pokemons.length);
//     let temp = pokemons[i];
//     pokemons[i] = pokemons[j];
//     pokemons[j] = temp;
//   }
// }
