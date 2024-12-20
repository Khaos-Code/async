//task 1
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Delay of 1 second
        console.log(value);
    }
}

iterateWithAsyncAwait([1, 2, 3, 4]); // Logs each value with 1-second delay

//task 3
async function awaitCall() {
    try {
        const simulateApiCall = async () => {
            // Simulating an API call with random failure
            if (Math.random() > 0.5) {
                return "Data fetched successfully!";
            } else {
                throw new Error("API call failed");
            }
        };

        const data = await simulateApiCall();
        console.log(data);
    } catch (error) {
        console.error("Error: Unable to fetch data. Please try again later.");
    }
}

awaitCall(); // Handles error gracefully if the API call fails

//task 4
async function concurrentRequests() {
    try {
        const fetchApi1 = async () => {
            // Simulated API call 1
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay
            return "Response from API 1";
        };

        const fetchApi2 = async () => {
            // Simulated API call 2
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated delay
            return "Response from API 2";
        };

        // Run both API calls concurrently
        const [response1, response2] = await Promise.all([fetchApi1(), fetchApi2()]);

        // Log the combined results
        console.log("Concurrent Results:");
        console.log(response1);
        console.log(response2);
    } catch (error) {
        console.error("Error in concurrent requests:", error);
    }
}

concurrentRequests();
// Logs both API responses after both calls resolve

