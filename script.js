console.log('connecté');

//Je sélectionne et je stoke la div posts
const postsContainer = document.querySelector('.posts');
console.log(postsContainer);

const post = {
  titre: "SEO, les bonnes pratique",
  hashtag: "#SEO",
  extrait:
    "Lorem ipsum dolor sit amet, conecteturnadipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.",
};

//J'accède à la valeur de la propriété titre
const t = post.titre;
console.log(t);
//
const h = post.hashtag;
console.log(h);
//
const e = post.extrait;
console.log(e);

const utilisateur = {
  nom: "jame Doe", // une chaine de caractères
  age: 39 // un chiffre
}

//Initialisation d'un tableau (array)
const posts = [
  {
    titre: "SEO, les bonnes pratique",
    hashtag: "#SEO",
    extrait:
      "Lorem ipsum dolor sit amet, conecteturnadipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.",
  },
  {
    titre: "Bien débuter en référencement payant",
    hashtag: "#référencement",
    extrait:
      "Lorem ipsum dolor sit amet, conecteturnadipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.",
  },
  {
    titre: "Content Marketing, les bons arguments",
    hashtag: "#contentmarketing",
    extrait:
      "Lorem ipsum dolor sit amet, conecteturnadipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.",
  }
]
console.log(posts);

//Je passe en revue chaque élément du tableau
posts.forEach(item => {
  //console.log(item);

  //Creation d'une Div avec Template strings
  const article = `
                       <div class="post">
                          <div class="post-titre"> ${item.titre}</div>
                          <div class="post-extrait"> ${item.extrait}</div>
                          <div class="post-hashtag"> ${item.hashtag}</div>
                        </div>
                  `;
  console.log(article);
      // Ajout de article dans la div dédiée postsContainer
      postsContainer.innerHTML += article;
});

questions.forEach((item)=> {
  console.log(item, 'item');
}); 
