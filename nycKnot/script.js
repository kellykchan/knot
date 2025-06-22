const data = [
  { "name": "Alimama Tea", "url": "alimama.html", "location": "Manhattan" },
  { "name": "Bo Ky", "url": "bo-ky.html", "location": "Manhattan" },
  { "name": "Burp Bowl Cafe", "url": "burp-bowl-cafe.html", "location": "Manhattan" },
  { "name": "Com Tam Ninh Kieu", "url": "com-tam.html", "location": "Bronx" },
  { "name": "HKS Kitchen", "url": "hks-kitchen.html", "location": "Staten Island" },
  { "name": "Ipoh Kitchen", "url": "ipoh-kitchen.html", "location": "Brooklyn" },
  { "name": "Kai Sushi Asian Fusion", "url": "kai-sushi.html", "location": "Bronx" },
  { "name": "Nai Brother", "url": "nai-brother.html", "location": "Brooklyn" },
  { "name": "New Lake Pavilion", "url": "new-lake-pavilion.html", "location": "Queens" },
  { "name": "New World Mall Food Court", "url": "new-world.html", "location": "Queens" },
  { "name": "Pho Rainbow 3", "url": "pho-rainbow.html", "location": "Staten Island" },
  { "name": "Something Sweet", "url": "something-sweet.html", "location": "Staten Island" },
  { "name": "Thanh Da", "url": "thanh-da.html", "location": "Brooklyn" },
  { "name": "Wonder Pig KBBQ", "url": "wonderpig.html", "location": "Queens" },
  { "name": "Zhongzhong Noodles", "url": "zhongzhong.html", "location": "Bronx" }
];

// Get input element and results list
const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');

function filterItems() {
  // Clear results list
  results.innerHTML = '';

  // Get search term
  const searchTerm = searchInput.value.toLowerCase();

  // Loop through data and check for matches
  data.forEach(function(item) {
    // Check if name or location contains search term
    if (
      item.name.toLowerCase().includes(searchTerm) ||
      item.location.toLowerCase().includes(searchTerm)
    ) {
      // Create result item (li)
      const li = document.createElement('li');

      // Create anchor element to wrap the whole list item
      const link = document.createElement('a');
      link.href = item.url; // Set the URL
      link.innerHTML = `${item.name} - ${item.location}`; // Combine name and location

      // Add the anchor tag with name and location to the list item
      li.appendChild(link);

      results.appendChild(li);
    }
  });
}

function chooseRandomRestaurant() {
  const randomIndex = Math.floor(Math.random() * data.length);
  const randomRestaurant = data[randomIndex];
  window.location.href = randomRestaurant.url; // Redirects in the same tab
}