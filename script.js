document.addEventListener('DOMContentLoaded', () => {
  // Βρίσκουμε τα κουμπιά HOME για Αγγλικά και Ελληνικά και το container του περιεχομένου
  const homeButtonEn = document.getElementById('home-button-en');
  const homeButtonGr = document.getElementById('home-button-gr');
  const productContainer = document.getElementById('products');
  const categoryTitle = document.getElementById('category-title');
  const subcategoryContainer = document.getElementById('subcategory-container');

  // Λειτουργία για φόρτωση περιεχομένου για το Home Menu
  function loadHomeContent(language) {
    if (language === 'en') {
      categoryTitle.textContent = "Welcome to our Coffee Shop"; // Τίτλος της κατηγορίας για Αγγλικά
      subcategoryContainer.innerHTML = "<p>Discover our wide variety of drinks, food, and gift items!</p>";

      // Προσθήκη προϊόντων για το home menu (προσωρινό παράδειγμα)
      productContainer.innerHTML = `
        <div class="product-card">
          <h3>Coffee</h3>
          <p>Enjoy the best coffee in town!</p>
        </div>
        <div class="product-card">
          <h3>Pastries</h3>
          <p>Freshly baked pastries to complement your coffee.</p>
        </div>
        <div class="product-card">
          <h3>Gift Items</h3>
          <p>Exclusive gift items for your loved ones.</p>
        </div>
      `;
	  
	  
	  
	  
	  
	  
	  
    } else if (language === 'el') {
      categoryTitle.textContent = "Καλώς ήρθατε στο Καφέ μας"; // Τίτλος της κατηγορίας για Ελληνικά
      subcategoryContainer.innerHTML = "<p>Ανακαλύψτε την μεγάλη ποικιλία ποτών, φαγητών και δώρων μας!</p>";

      // Προσθήκη προϊόντων για το home menu στα Ελληνικά (προσωρινό παράδειγμα)
      productContainer.innerHTML = `
        <div class="product-card">
          <h3>Καφές</h3>
          <p>Απολαύστε τον καλύτερο καφέ στην πόλη!</p>
        </div>
        <div class="product-card">
          <h3>Ζαχαροπλαστεία</h3>
          <p>Φρεσκοψημένα ζαχαροπλαστεία για να συνοδεύσετε τον καφέ σας.</p>
        </div>
        <div class="product-card">
          <h3>Δώρα</h3>
          <p>Αποκλειστικά δώρα για τους αγαπημένους σας.</p>
        </div>
      `;
    }
  }

  // Κατά την φόρτωση της σελίδας, φορτώνει το περιεχόμενο του Home Menu για τη γλώσσα
  if (document.documentElement.lang === 'en') {
    loadHomeContent('en'); // Φόρτωση περιεχομένου για Αγγλικά
	// Όταν πατηθεί το κουμπί HOME για Αγγλικά, φορτώνουμε το περιεχόμενο για το Home Menu και αλλάζουμε τη γλώσσα
  homeButtonEn.addEventListener('click', (e) => {
    e.preventDefault();  // Αποτρέπουμε την ανακατεύθυνση (refresh)
    document.documentElement.lang = 'en';  // Αλλαγή γλώσσας σε Αγγλικά
    loadHomeContent('en');
  });

  } else  {
    loadHomeContent('el'); // Φόρτωση περιεχομένου για Ελληνικά
	
	 // Όταν πατηθεί το κουμπί HOME για Ελληνικά, φορτώνουμε το περιεχόμενο για το Home Menu και αλλάζουμε τη γλώσσα
  homeButtonGr.addEventListener('click', (e) => {
    e.preventDefault();  // Αποτρέπουμε την ανακατεύθυνση (refresh)
    document.documentElement.lang = 'el';  // Αλλαγή γλώσσας σε Ελληνικά
    loadHomeContent('el');
  });
  }

  
 
});



















document.addEventListener('DOMContentLoaded', () => {
  // Εντοπίστε το κουμπί αλλαγής γλώσσας και το container περιεχομένου
  const languageToggle = document.getElementById('language-toggle');
  const content = document.getElementById('content');

  languageToggle.addEventListener('click', (e) => {
    e.preventDefault();

    // Εφαρμόζουμε το fade-out effect
    content.style.opacity = 0;

    // Αφού ολοκληρωθεί η μετάβαση (500ms), ανακατευθύνουμε στο αντίστοιχο αρχείο
    setTimeout(() => {
      if (document.documentElement.lang === 'el') {
        // Από Ελληνικά σε Αγγλικά
        window.location.href = 'index.html';
      } else {
        // Από Αγγλικά σε Ελληνικά
        window.location.href = 'greek.html';
      }
    }, 500);
  });

  /* --- Κώδικας για dropdown μενού --- */

  const dropdowns = document.querySelectorAll('.dropdown');

  // Κλείσιμο όλων των dropdown όταν γίνεται κλικ εκτός τους
  document.addEventListener('click', (e) => {
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
  });

  // Toggle dropdown με κλικ και κλείσιμο των υπολοίπων
  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('a');
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      dropdowns.forEach(d => {
        if (d !== dropdown) d.classList.remove('open');
      });
      dropdown.classList.toggle('open');
    });
  });

  // Επεξεργασία κλικ στις υποκατηγορίες (για φόρτωση περιεχομένου)
  const dropdownLinks = document.querySelectorAll('.dropdown-content a');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      this.closest('.dropdown').classList.remove('open');
      const subcategory = this.textContent;
      document.getElementById('category-title').textContent = subcategory;
      document.getElementById('products').innerHTML = `<p>Φόρτωση προϊόντων για το "${subcategory}"...</p>`;
    });
  });
});


//ΣΙΝΔΕΣΕΙ ΤΟΝ ΠΡΟΙΟΝΤΟΝ PRODUCTS ΓΙΑ ΕΛΛΗΝΙΚΑ 

document.addEventListener("DOMContentLoaded", function () {
  const productContainer = document.getElementById("products");
  const categoryTitle = document.getElementById("category-title");

  // Φόρτωση προϊόντων από το products_gr.js
  function loadProducts(category, subcategory) {
    if (products[category] && products[category][subcategory]) {
      displayProducts(products[category][subcategory], subcategory);
    }
  }

  function displayProducts(productList, subcategory) {
    categoryTitle.textContent = subcategory;
    productContainer.innerHTML = productList.map(product => `
      <div class="product-card">
        <img src="images/${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      </div>
    `).join("");
  }

  document.querySelectorAll(".dropdown-content li a").forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const category = this.closest(".dropdown").querySelector("a").textContent;
      const subcategory = this.textContent;
      loadProducts(category, subcategory);
    });
  });
});


//ΣΙΝΔΕΣΕΙ ΤΟΝ ΠΡΟΙΟΝΤΟΝ PRODUCTS_us ΓΙΑ Αγγλικά 

document.addEventListener("DOMContentLoaded", function () {
  const productContainer = document.getElementById("products");
  const categoryTitle = document.getElementById("category-title");

  function loadProducts(category, subcategory) {
    if (products[category] && products[category][subcategory]) {
      displayProducts(products[category][subcategory], subcategory);
    }
  }

  function displayProducts(productList, subcategory) {
    categoryTitle.textContent = subcategory;
    productContainer.innerHTML = productList.map(product => `
      <div class="product-card">
        <img src="images/${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      </div>
    `).join("");
  }

  document.querySelectorAll(".dropdown-content li a").forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const category = this.closest(".dropdown").querySelector("a").textContent;
      const subcategory = this.textContent;
      loadProducts(category, subcategory);
    });
  });
});



