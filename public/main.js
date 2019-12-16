window.addEventListener('load', init);

const TypeWriter = function(txtElement, words, wait = 1000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

// Type Method
TypeWriter.prototype.type = function() {
  // Current Index of Word
  const current = this.wordIndex % this.words.length;
  // Get Full Text od Current Word
  const fullTxt = this.words[current];

  // CHeck if deleting
  if (this.isDeleting) {
    // Remove Character
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // Add Character
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // Insert txt into Element
  this.txtElement.innerHTML = `<span class="text">${this.txt}</span>`;

  // Initial Type Speed
  let typeSpeed = 100;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  // If word is complete
  if (!this.isDeleting && this.txt === fullTxt) {
    // this will make pause
    typeSpeed = this.wait;
    // Set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    // move to next word
    this.wordIndex++;
    // Pause before start typing
    typeSpeed = 200;
  }

  setTimeout(() => this.type(), typeSpeed);
};
// Init on DOM Load

// Init App

function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
