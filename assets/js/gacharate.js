// Promo codes with rates (probabilities)
const promoCodes = [
  { code: "LFXKZMWTQPHD", rate: 35 },
  { code: "TQXWMKJBZDHP", rate: 35 },
  { code: "PZLQNKJMXWTD", rate: 35 },
  { code: "KWMJZQXLTHPD", rate: 35 },
  { code: "XWMQLTJKZHPD", rate: 35 },
  { code: "TQZWMXJKLHPD", rate: 30 },
  { code: "ZLTXQKMWPJHD", rate: 30 },
  { code: "XWQKZMLTJHPD", rate: 30 },
  { code: "WMQZKXLTJHPD", rate: 30 },
  { code: "XLTJQZWMKHPD", rate: 30 },
  { code: "QXWMLTZKJHPD", rate: 25 },
  { code: "ZWMXQKLTJHPD", rate: 25 },
  { code: "XQTZKWMJLHPD", rate: 25 },
  { code: "WMXLQZKJTHPD", rate: 25 },
  { code: "ZMLTQXKJWHPD", rate: 25 },
  { code: "XZWMQLTKJHPD", rate: 20 },
  { code: "LTMQXKZJWHPD", rate: 20 },
  { code: "QKWMXZLTJHPD", rate: 20 },
  { code: "ZKJWMXQLTHPD", rate: 20 },
  { code: "TQZKWMXJLHPD", rate: 20 },
  { code: "WMQXZKLTJHPD", rate: 15 },
  { code: "ZKMWXLQTJHPD", rate: 15 },
  { code: "XKWMQLTZJHPD", rate: 15 },
  { code: "LTJWMQXZKHPD", rate: 15 },
  { code: "ZKJWMXQLTPHD", rate: 15 },
  { code: "XQTWMKZJLHPD", rate: 10 },
  { code: "LQZKWMXJTHPD", rate: 10 },
  { code: "WZMXQKLTJHPD", rate: 10 },
  { code: "XQKWMZLTJHPD", rate: 10 },
  { code: "WMZKXLQTJHPD", rate: 10 },
  { code: "QZKWMXLTJHPD", rate: 5 },
  { code: "XLTWMQKZJHPD", rate: 5 },
  { code: "WQZKMXLTJHPD", rate: 5 },
  { code: "TQWMZKXJLHPD", rate: 5 },
  { code: "ZKXWMQLTJHPD", rate: 5 },
  { code: "WMXLTQZKJHPD", rate: 1 },
  { code: "QXKWMZLTJHPD", rate: 1 },
  { code: "XZKWMQLTJHPD", rate: 1 },
  { code: "WZMXQLTKJHPD", rate: 1 },
  { code: "ZKWMXQTLJHPD", rate: 1 },
  { code: "XWMZKQLTJHPD", rate: 0.1 },
  { code: "QKWMXZLTJHPD", rate: 0.1 },
  { code: "LTWMXKZJQHPD", rate: 0.1 },
  { code: "WQKZMXLTJHPD", rate: 0.1 },
  { code: "XWMZKQLTJHPD", rate: 0.1 }
];

// Function to spin the Gacha and get a promo code
function spinGacha() {
  let randomValue = Math.random() * 100;
  let cumulativeRate = 0;

  for (let i = 0; i < promoCodes.length; i++) {
    cumulativeRate += promoCodes[i].rate;
    if (randomValue < cumulativeRate) {
      return promoCodes[i].code; // Return the promo code if the random value is within the rate
    }
  }
  return promoCodes[0].code; // Default to the first code if something goes wrong
}

// Function to show the Gacha result in a modal
function showRedeemviviendoGachaResult() {
  // Get the current date and the click count from localStorage
  const currentDate = new Date().toDateString();
  const lastClickDate = localStorage.getItem("lastClickDate");
  let clickCount = parseInt(localStorage.getItem("gachaClickCount")) || 0;

  // Reset click count if it's a new day
  if (lastClickDate !== currentDate) {
    localStorage.setItem("lastClickDate", currentDate);
    localStorage.setItem("gachaClickCount", 0);
    clickCount = 0;
  }

  // Check if the user has clicked the button 3 times already
  if (clickCount < 1) {
    const result = spinGacha(); // Get the promo code from the spin
    const gachaModal = document.getElementById("gachaModal");
    const gachaResultTitle = document.getElementById("gachaResultTitle");
    const gachaResultText = document.getElementById("gachaResultText");
    const promoCodeElement = document.getElementById("promoCode");

    gachaResultTitle.textContent = "Anda menang!";
    gachaResultText.textContent = "Selamat! Anda memenangkan kode promo:";
    promoCodeElement.textContent = result;

    gachaModal.style.display = "flex";

    // Increment the click count and save it to localStorage
    localStorage.setItem("gachaClickCount", clickCount + 1);
  } else {
    // Show the custom alert modal if the user has already clicked 3 times today
    const alertModal = document.getElementById("redeemviviendo-alertModal");
    alertModal.style.display = "flex"; // Show the custom alert
  }
}

// Function to close the custom alert modal
function closeRedeemviviendoAlert() {
  const alertModal = document.getElementById("redeemviviendo-alertModal");
  alertModal.style.display = "none";
}

// Function to close the Gacha modal
function closeGachaModal() {
  const gachaModal = document.getElementById("gachaModal");
  gachaModal.style.display = "none";
}

// Event listener for the Gacha button
document.getElementById("redeemviviendo-gachaButton").addEventListener("click", showRedeemviviendoGachaResult);
