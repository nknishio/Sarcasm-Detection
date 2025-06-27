// content-script/contentScript.js
let detectionEnabled = false;

// Listen for messages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "TOGGLE_SARCASM_DETECTION") {
    detectionEnabled = request.enabled;
  }

  // If user used the right-click context menu "Detect Sarcasm"
  if (request.type === "DETECT_SARCASM" && request.selectedText) {
    if (isTextSarcastic(request.selectedText)) {
      highlightSelection(request.selectedText);
    } else {
      alert("No sarcasm detected in: " + request.selectedText);
    }
  }
});

// Capture text selection on mouseup (only if detection is enabled)
document.addEventListener("mouseup", () => {
  if (!detectionEnabled) return;

  const selection = window.getSelection();
  const selectedText = selection.toString().trim();
  if (selectedText) {
    // Possibly run your sarcasm detection model here
    if (isTextSarcastic(selectedText)) {
      highlightCurrentSelection(selection);
    }
  }
});

/** 
 * Placeholder function for sarcasm detection.
 * Replace this with your real function or API call.
 */
function isTextSarcastic(text) {
  // EXAMPLE: random true/false
  return Math.random() >= 0.5;
}

/**
 * If the user highlights text while detection is enabled,
 * highlight it in the page by wrapping it in a <span>.
 */
function highlightCurrentSelection(selection) {
  // Make sure we have a range
  if (!selection.rangeCount) return;
  const range = selection.getRangeAt(0);

  // Create a <span> and apply the "sarcasm-highlight" class
  const span = document.createElement("span");
  span.className = "sarcasm-highlight";
  range.surroundContents(span);
}

/**
 * If the user used the context menu with selectedText, we can find that text 
 * in the DOM and highlight it. This is simplistic; real usage might be more advanced.
 */
function highlightSelection(selectedText) {
  const bodyText = document.body.innerHTML;
  // Warning: naive string replacement can cause issues with HTML.
  // For a robust solution, parse the DOM ranges. This is just a demonstration.
  const highlightSpan = `<span class="sarcasm-highlight">${selectedText}</span>`;

  // Replace only the first occurrence of the text for demonstration
  const updatedText = bodyText.replace(selectedText, highlightSpan);
  document.body.innerHTML = updatedText;
  alert(`Sarcasm detected and highlighted: "${selectedText}"`);
}
