/**
 * Adds a new row.
 */
function addOptions() {

    var add = document.getElementById('add-row');


}

/**
 * Stores the new options.
 */
function saveOptions() {
    var shippableProjectId = document.getElementById('shippableProjectId').value;

    // Store the option
    chrome.storage.sync.set({
        shippableProjectId: shippableProjectId
    }, function() {
        // Display feedback
        var status = document.getElementById('save');
        status.textContent = 'Options saved';
        setTimeout(function() {
            status.textContent = 'Save';
        }, 1500);
    });
}

/**
 * Restores the already saved options.
 */
function restoreOptions() {
    chrome.storage.sync.get({
        shippableProjectId: 'Project ID'
    }, function(items) {
        document.getElementById('shippableProjectId').value = items.shippableProjectId;
    });
}

// Attach the document ready listener
document.addEventListener('DOMContentLoaded', restoreOptions);

// Attach the add and save event listeners
document.getElementById('add').addEventListener('click', addOptions);
document.getElementById('save').addEventListener('click', saveOptions);
