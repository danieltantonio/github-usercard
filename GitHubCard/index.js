/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/danieltantonio/followers')
  .then(res => {
    console.log(res)
  }).catch(err => console.log(err));
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// const followersArray = ['avawing', 'OrlandoDavila', 'jaketorrez', 'sami-alaloosi', 'emcleary'];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function gitHubCard(userDataObj) {
  const cardsSection = document.querySelector('.cards');
  const card = document.createElement('div');
  const profilePic = document.createElement('img');
  const cardInfo = document.createElement('div');
  const cardHeader = document.createElement('h3');
  const userName = document.createElement('p');
  const locationText = document.createElement('p');
  const profileText = document.createElement('p');
  const profileLink = document.createElement('a');
  const followersText = document.createElement('p');
  const followingText = document.createElement('p');
  const bioText = document.createElement('p');

  card.classList.add('card');
  profilePic.src = userDataObj.avatar_url;
  cardInfo.classList.add('card-info');
  cardHeader.classList.add("name");
  cardHeader.textContent = userDataObj.name;
  userName.classList.add('username');
  userName.textContent = userDataObj.login;
  locationText.textContent = `Location: ${userDataObj.location}`
  profileLink.href = userDataObj.html_url;
  profileLink.textContent = userDataObj.html_url;
  profileText.textContent = `Profile: `;
  profileText.appendChild(profileLink);
  followersText.textContent = `Followers: ${userDataObj.followers}`;
  followingText.textContent = `Following: ${userDataObj.following}`;
  bioText.textContent = `Bio: ${userDataObj.bio}`;

  cardInfo.appendChild(cardHeader);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(locationText);
  cardInfo.appendChild(profileText);
  cardInfo.appendChild(followersText);
  cardInfo.appendChild(followingText);
  cardInfo.appendChild(bioText);
  card.appendChild(profilePic);
  card.appendChild(cardInfo);
  cardsSection.appendChild(card);
}

axios.get('https://api.github.com/users/danieltantonio')
  .then(res => {
    gitHubCard(res.data);
  }).catch(err => {
    console.log(err);
});

// followersArray.forEach(user => {
//   axios.get(`https://api.github.com/users/${user}`)
//   .then(res => {
//     gitHubCard(res.data);
//   }).catch(err => {
//     console.log(err);
//   });
// });


//// STRETCH ////
axios.get('https://api.github.com/users/danieltantonio/followers')
  .then(res => {
    res.data.forEach(user => {
      gitHubCard(user);
    });
  })
  .catch(err => {
    console.log(err);
  });

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
