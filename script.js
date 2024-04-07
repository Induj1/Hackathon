
function showRecommendation(selectElementId, recommendationElementId) {
    var selectElement = document.getElementById(selectElementId);
    var recommendationElement = document.getElementById(recommendationElementId);
    var recommendation = "";
    
    switch (selectElement.value) {
        case "drip-irrigation":
            recommendation = "Drip irrigation is efficient in water usage and suitable for many crops.";
            break;
        case "sprinkler-irrigation":
            recommendation = "Sprinkler irrigation is effective for uniform water distribution over large areas.";
            break;
        case "flood-irrigation":
            recommendation = "Traditional flooding irrigation may lead to water wastage and soil erosion.";
            break;
        case "sandy-soil":
            recommendation = "Sandy soil drains quickly but may require frequent irrigation.";
            break;
        case "clay-soil":
            recommendation = "Clay soil retains moisture well but may become waterlogged.";
            break;
        case "loamy-soil":
            recommendation = "Loamy soil is ideal for most crops due to its balanced drainage and moisture retention.";
            break;
        case "good-drainage":
            recommendation = "Good drainage prevents waterlogging and ensures adequate aeration for roots.";
            break;
        case "moderate-drainage":
            recommendation = "Moderate drainage is suitable for a wide range of crops.";
            break;
        case "poor-drainage":
            recommendation = "Poor drainage can lead to waterlogging, root rot, and reduced crop yields.";
            break;
        default:
            recommendation = "";
    }
    
    recommendationElement.innerHTML = recommendation;

function submitForm() {
    console.log("Form submitted!");
}
  
document.getElementById("irrigation-type").addEventListener("change", function() {
    showRecommendation("irrigation-type", "irrigation-recommendation");
});

document.getElementById("soil-texture").addEventListener("change", function() {
    showRecommendation("soil-texture", "soil-texture-recommendation");
});

document.getElementById("drainage").addEventListener("change", function() {
    showRecommendation("drainage", "drainage-recommendation");
});
