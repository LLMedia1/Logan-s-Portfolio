document.addEventListener('DOMContentLoaded', (event) => {
    // Select the element you want to observe
    const slideInElement = document.querySelector('#pmexp');

    // Options for the observer (when to trigger)
    const observerOptions = {
        root: null, // observe against the viewport
        rootMargin: '0px',
        threshold: 0.5 // trigger when 50% of the element is visible
    };

    // Callback function when the element intersects
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the CSS transition
                entry.target.classList.add('is-visible');
                // Optional: Stop observing the element once it has appeared
                observer.unobserve(entry.target); 
            }
        });
    };

    // Create the observer and start observing the element
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(pmexp);
});



document.addEventListener('DOMContentLoaded', (event) => {
    // Select the element you want to observe
    const slideInElement = document.querySelector('#rogersexp');

    // Options for the observer (when to trigger)
    const observerOptions = {
        root: null, // observe against the viewport
        rootMargin: '0px',
        threshold: 0.5 // trigger when 50% of the element is visible
    };

    // Callback function when the element intersects
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the CSS transition
                entry.target.classList.add('is-visible');
                // Optional: Stop observing the element once it has appeared
                observer.unobserve(entry.target); 
            }
        });
    };

    // Create the observer and start observing the element
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(rogersexp);
});



document.addEventListener('DOMContentLoaded', (event) => {
    // Select the element you want to observe
    const slideInElement = document.querySelector('#londonfilmexp');

    // Options for the observer (when to trigger)
    const observerOptions = {
        root: null, // observe against the viewport
        rootMargin: '0px',
        threshold: 0.5 // trigger when 50% of the element is visible
    };

    // Callback function when the element intersects
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the CSS transition
                entry.target.classList.add('is-visible');
                // Optional: Stop observing the element once it has appeared
                observer.unobserve(entry.target); 
            }
        });
    };

    // Create the observer and start observing the element
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(londonfilmexp);
});



document.addEventListener('DOMContentLoaded', (event) => {
    // Select the element you want to observe
    const slideInElement = document.querySelector('#aboutblurb');

    // Options for the observer (when to trigger)
    const observerOptions = {
        root: null, // observe against the viewport
        rootMargin: '0px',
        threshold: 0.8 // trigger when 50% of the element is visible
    };

    // Callback function when the element intersects
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the CSS transition
                entry.target.classList.add('is-visible');
                // Optional: Stop observing the element once it has appeared
                observer.unobserve(entry.target); 
            }
        });
    };

    // Create the observer and start observing the element
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(aboutblurb);
});



document.addEventListener('DOMContentLoaded', (event) => {
    // Select the element you want to observe
    const slideInElement = document.querySelector('#aepic');

    // Options for the observer (when to trigger)
    const observerOptions = {
        root: null, // observe against the viewport
        rootMargin: '0px',
        threshold: 0.8 // trigger when 50% of the element is visible
    };

    // Callback function when the element intersects
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the CSS transition
                entry.target.classList.add('is-visible');
                // Optional: Stop observing the element once it has appeared
                observer.unobserve(entry.target); 
            }
        });
    };

    // Create the observer and start observing the element
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(aepic);
});



document.addEventListener('DOMContentLoaded', (event) => {
    // Select the element you want to observe
    const slideInElement = document.querySelector('#prpic');

    // Options for the observer (when to trigger)
    const observerOptions = {
        root: null, // observe against the viewport
        rootMargin: '0px',
        threshold: 0.8 // trigger when 50% of the element is visible
    };

    // Callback function when the element intersects
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the CSS transition
                entry.target.classList.add('is-visible');
                // Optional: Stop observing the element once it has appeared
                observer.unobserve(entry.target); 
            }
        });
    };

    // Create the observer and start observing the element
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(prpic);
});



document.addEventListener('DOMContentLoaded', (event) => {
    // Select the element you want to observe
    const slideInElement = document.querySelector('#pspic');

    // Options for the observer (when to trigger)
    const observerOptions = {
        root: null, // observe against the viewport
        rootMargin: '0px',
        threshold: 0.8 // trigger when 50% of the element is visible
    };

    // Callback function when the element intersects
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the CSS transition
                entry.target.classList.add('is-visible');
                // Optional: Stop observing the element once it has appeared
                observer.unobserve(entry.target); 
            }
        });
    };

    // Create the observer and start observing the element
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(pspic);
});



document.addEventListener('DOMContentLoaded', (event) => {
    // Select the element you want to observe
    const slideInElement = document.querySelector('#drpic');

    // Options for the observer (when to trigger)
    const observerOptions = {
        root: null, // observe against the viewport
        rootMargin: '0px',
        threshold: 0.8 // trigger when 50% of the element is visible
    };

    // Callback function when the element intersects
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the CSS transition
                entry.target.classList.add('is-visible');
                // Optional: Stop observing the element once it has appeared
                observer.unobserve(entry.target); 
            }
        });
    };

    // Create the observer and start observing the element
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(drpic);
});





// Background video transition
const v1 = document.getElementById('video1');
const v2 = document.getElementById('video2');

let v2Started = false;

v1.addEventListener('timeupdate', () => {
    const timeLeft = v1.duration - v1.currentTime;

    if (timeLeft < 1.5 && !v2Started) {
        v2.play().catch(() => {});
        v2Started = true;
    }

    if (timeLeft < 0.3) {
        v2.classList.add('active');
        v1.classList.remove('active');
    }
});

v1.addEventListener('ended', () => {
    v1.pause();
    v1.currentTime = 0;
});
