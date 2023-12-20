document.addEventListener('DOMContentLoaded', function () {
    // Get the name element
    const nameElement = document.getElementById('name');

    // Get the name from storage or set a default name
    chrome.storage.sync.get(['Work Hard & Get Rewarded'], function (result) {
        const name = result.name || 'Work Hard & Get Rewarded'; // Default name is 'Guest'
        nameElement.textContent = `Welcome to Job Locker, ${name}`;
    });
});
