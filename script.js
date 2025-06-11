document.addEventListener('DOMContentLoaded', () => {
    const topicInput = document.getElementById('topicInput');
    const getTopicContentBtn = document.getElementById('getTopicContentBtn');
    const loadingTopic = document.getElementById('loadingTopic');

    const scriptOutput = document.getElementById('scriptOutput');
    const generateScriptBtn = document.getElementById('generateScriptBtn');
    const loadingScript = document.getElementById('loadingScript');

    const videoPlaceholder = document.getElementById('videoPlaceholder');
    const generatedVideo = document.getElementById('generatedVideo');
    const generateVideoBtn = document.getElementById('generateVideoBtn');
    const loadingVideo = document.getElementById('loadingVideo');
    const downloadVideoBtn = document.getElementById('downloadVideoBtn');

    const statusMessages = document.getElementById('statusMessages');

    let currentTopicContent = '';
    let currentScript = '';

    // --- Step 1: Get Topic Content (Simulated) ---
    getTopicContentBtn.addEventListener('click', () => {
        const topic = topicInput.value.trim();
        if (topic === '') {
            showStatus('Please enter a topic first.', 'error');
            return;
        }

        disableAllButtons();
        loadingTopic.style.display = 'inline-block';
        showStatus('Fetching trending content for "' + topic + '"...', 'info');

        // Simulate API call for scraping content
        setTimeout(() => {
            currentTopicContent = `Based on recent trends, ${topic} is a hot topic. A news summary might include: "Leading experts discuss new breakthroughs in ${topic}, highlighting its impact on daily life and future prospects."`;
            showStatus('Content fetched. Ready to generate script.', 'success');
            enableAllButtons();
            loadingTopic.style.display = 'none';
        }, 1500); // Simulate network delay
    });

    // --- Step 2: Generate Script (Simulated) ---
    generateScriptBtn.addEventListener('click', () => {
        if (currentTopicContent === '') {
            showStatus('Please fetch topic content first.', 'error');
            return;
        }

        disableAllButtons();
        loadingScript.style.display = 'inline-block';
        showStatus('Generating script based on the content...', 'info');

        // Simulate API call for script generation (e.g., to an LLM)
        setTimeout(() => {
            currentScript = `(Scene 1: Opening shot of a news studio with a dynamic background related to ${topicInput.value.trim()})\n\nNarrator (Voiceover): "Welcome to our special report! Today, we dive deep into the fascinating world of ${topicInput.value.trim()}..."\n\n(Scene 2: Text overlay with key statistics or facts about ${topicInput.value.trim()})\n\nNarrator (Voiceover): "...Recent data shows incredible progress, with experts predicting major advancements in the coming years."\n\n(Scene 3: Image relevant to the topic - e.g., a futuristic city for AI, a healthy ecosystem for climate change)\n\nNarrator (Voiceover): "From innovative solutions to global impact, ${topicInput.value.trim()} is reshaping our future. Stay tuned for more updates!"`;
            scriptOutput.value = currentScript;
            showStatus('Script generated successfully!', 'success');
            enableAllButtons();
            loadingScript.style.display = 'none';
        }, 2500); // Simulate network delay for LLM
    });

    // --- Step 3: Generate Video (Simulated) ---
    generateVideoBtn.addEventListener('click', () => {
        if (currentScript === '') {
            showStatus('Please generate a script first.', 'error');
            return;
        }

        disableAllButtons();
        loadingVideo.style.display = 'inline-block';
        showStatus('Generating 30-60 second video with text overlays and images...', 'info');

        // Simulate AI Video Generation (This is where a real API call would go)
        setTimeout(() => {
            // In a real scenario, this would be a URL to the generated video.
            // For this prototype, we'll use a placeholder video.
            const placeholderVideoURL = 'https://www.w3schools.com/html/mov_bbb.mp4'; // Example MP4
            generatedVideo.src = placeholderVideoURL;
            generatedVideo.style.display = 'block';
            videoPlaceholder.style.display = 'none'; // Hide the text placeholder

            downloadVideoBtn.href = placeholderVideoURL;
            downloadVideoBtn.style.display = 'block';

            showStatus('Video generated successfully! You can now watch or download it.', 'success');
            enableAllButtons();
            loadingVideo.style.display = 'none';
        }, 5000); // Simulate significant time for video generation
    });

    // --- Helper Functions ---
    function showStatus(message, type) {
        statusMessages.textContent = message;
        statusMessages.className = 'status-messages show'; // Reset classes
        if (type === 'error') {
            statusMessages.style.backgroundColor = '#fce4e4';
            statusMessages.style.borderColor = '#f8d7da';
            statusMessages.style.color = '#721c24';
        } else if (type === 'success') {
            statusMessages.style.backgroundColor = '#d4edda';
            statusMessages.style.borderColor = '#c3e6cb';
            statusMessages.style.color = '#155724';
        } else { // info or default
            statusMessages.style.backgroundColor = '#fdf6e3';
            statusMessages.style.borderColor = '#f9da8d';
            statusMessages.style.color = '#856404';
        }
    }

    function disableAllButtons() {
        getTopicContentBtn.disabled = true;
        generateScriptBtn.disabled = true;
        generateVideoBtn.disabled = true;
    }

    function enableAllButtons() {
        getTopicContentBtn.disabled = false;
        generateScriptBtn.disabled = false;
        generateVideoBtn.disabled = false;
    }
});