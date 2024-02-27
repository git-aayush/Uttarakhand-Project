const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Load the HTML file containing your script
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

// Create a new JSDOM instance with the HTML content
const { window } = new JSDOM(html);
global.document = window.document;

// Now you can require your script file which contains event listeners
const { showSidebar, hideSidebar } = require('./script1.js');

// Your test cases go here
describe('Slide navigation', () => {
    test('next button should move items forward', () => {
        showSidebar(); // Example function call
        // Your test logic
    });

    test('prev button should move items backward', () => {
        hideSidebar(); // Example function call
        // Your test logic
    });
});
