How did event.preventDefault() help in handling form submission?
It stopped the form from submitting and reloading the page, allowing custom validation and error messages to run first before saving data.
What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?
HTML5 attributes provide built-in browser checks (e.g., required, pattern), while JavaScript allows custom rules and real-time feedback. Using both ensures stronger validation and a better user experience.
Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?
The username is saved with localStorage.setItem and loaded on page load with getItem. It cannot securely store sensitive data like passwords because it’s not encrypted and can be cleared by the user.
Describe a challenge you faced in implementing the real-time validation and how you solved it.
Checking confirm password while typing was tricky. I added input listeners to both password fields and updated error messages dynamically to ensure accuracy.
How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?
Error messages were displayed in some <span> elements near each input, were clear and specific, and updated in real time only when inputs were invalid.
